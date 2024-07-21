const baseUrls = {
    datamuseMatch: 'https://api.datamuse.com',
    wikiSearch: 'https://en.wikipedia.org/w/rest.php/v1',
    catsApi: 'https://api.thecatapi.com/v1'
}

let MATCHES_DATA_MAX_LIMIT = 10;
const DEFINITION = document.getElementById('definition');
const LOADING = document.getElementById('loading');
const ANIMAL_PIC_LOADING = document.getElementById('animal-pic-loading');
const SHOW_ANIMAL = document.getElementById('show_animal');
const ANIMAL_INFO_CONTAINER = document.getElementById('animal_info_container');
let isWordSearch = false;

// Right Panel
SHOW_ANIMAL.addEventListener('click',function() {
    debouncedShowAnimal();
});

// Define the debounced function
var debouncedShowAnimal = debounce(loadAnimalInfo, 1500);

async function loadAnimalInfo() {
    ANIMAL_PIC_LOADING.style.display = 'block';
    try {
        let url = baseUrls.catsApi + '/images/search';
        const res = await fetch(url);
        const data = await res.json();
        if(data && data[0] && data[0]['url']) {
            return showAnimal(data[0]);
        }
        ANIMAL_PIC_LOADING.style.display = 'none';
    } catch(e) {
        ANIMAL_PIC_LOADING.innerText = 'Failed Loading Image !!';
    }
};

function showAnimal(animal) {
    ANIMAL_INFO_CONTAINER.innerHTML = getAnimalHTML(animal);
    ANIMAL_PIC_LOADING.style.display = 'none';
    SHOW_ANIMAL.innerText = 'One More';
}

function getAnimalHTML (animal) {
   return  `<img id="animal_img_link" src="${animal.url}" alt="">`
}

// Left Panel Search
autocomplete(document.getElementById("search-text"));

function autocomplete(inp) {
    var currentFocus;

    // execute a function when someone writes in the text field
    inp.addEventListener("input", function() {
        debouncedSearchInput.bind(this)();
    });

    // Define the debounced function
    var debouncedSearchInput = debounce(onSearchInput, 500);

    async function onSearchInput() {
        var a, b, i, val = this.value;

        // close any already open lists of autocompleted values 
        closeAllLists();
        
        if (!val || val.length < 3) return false;

        removeDefinition();

        // Get Matches of search text through datamuse api
        let getMatches = await loadMatches(val);
        var arr = [...getMatches];
        currentFocus = -1;

        // removeDefinition();

        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        this.parentNode.appendChild(a);
        
        for (i = 0; i < arr.length; i++) {
            if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                b = document.createElement("DIV");

                b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                b.innerHTML += arr[i].substr(val.length);

                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";

                b.addEventListener("click", async function(e) {
                    inp.value = this.getElementsByTagName("input")[0].value;

                    closeAllLists();

                    let definition = await getWikiDefinition(inp.value);
                    showDefinition(definition);
                });
                a.appendChild(b);
            }
        }
    }

    // execute a function presses a key on the keyboard
    inp.addEventListener("keydown", function(e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");

        if((e.keyCode == 40 && (currentFocus++ || true)) || (e.keyCode == 38 && (currentFocus-- || true))) {
            addActive(x);
        }

        if (e.keyCode == 13 && currentFocus > -1 && x) x[currentFocus].click();
    });

    // Highlight match text
    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }

    // Remove Highlighted match text
    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }
    
    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
    
    function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    async function getWikiDefinition(word) {
        let def = 'NA';
        LOADING.style.display = 'block';
        try {
            const res = await fetch(`${baseUrls.wikiSearch}/search/page?q=${word}&limit=2`);
            const data = await res.json();
            if(data && data.pages && data.pages.length && data.pages[0].excerpt) {
                def = `<div><b>Description :</b> ${data.pages[0].description}.</div>
                <br>
                <b>Detail : </b>${data.pages[0].excerpt}.`;
            }
        } catch(e) {
            console.error(e);
        } finally {
            LOADING.style.display = 'none';
            return def;
        }
    }

    // API Integration
    async function loadMatches(search) {
        try {
            LOADING.style.display = 'block';
            let url = baseUrls.datamuseMatch + '/sug?' + 's=' + search;
            if(MATCHES_DATA_MAX_LIMIT) url += '&max=' + MATCHES_DATA_MAX_LIMIT;
            if(!isWordSearch) url += '&v=enwiki';

            const res = await fetch(url);
            const data = await res.json();
            LOADING.style.display = 'none';
            if(data && data.length) {
                return data.map((el) => el.word);
            }
            return [];
        } catch(e) {
            console.error(e);
            return [];
        }
    }

    function reset() {
        inp.value = '';
        removeDefinition();
    }

    function showDefinition(definition) {
        DEFINITION.style.display = 'block';
        DEFINITION.innerHTML = definition;
    }

    function removeDefinition() {
        DEFINITION.innerHTML = '';
        DEFINITION.style.display = 'none';
    }

    document.getElementById('searchBy').addEventListener('change', function() {
        reset();
        isWordSearch = this.checked;
        if(isWordSearch) {
            inp.placeholder = 'Search word meaning... type atleast 3 letter'
        } else {
            inp.placeholder = 'Search for definition... type atleast 3 letter'
        }
    })
    
    document.getElementById('reset').addEventListener('click', reset);
}

// Debounce
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(function() {
            timeout = null;
            if (!immediate) {
            func.apply(context, args);
            }
        }, wait);
        if (callNow) func.apply(context, args);
    }
}
