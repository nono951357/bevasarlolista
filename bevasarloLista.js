var bevasarloLista = [];

function f(e) {
    const value = e.value.trim();
    if (value) {
        bevasarloLista.push({ text: value, checked: false });
        bevasarloLista.sort((a, b) => a.text.localeCompare(b.text));
        e.value = '';
        renderList();
    }
}

function renderList() {
    document.querySelector('#output').innerHTML =
        bevasarloLista.map((item, i) =>
            `<div class="checkbox-wrapper-15 x${i % 2}">
                <input class="inp-cbx" id="cbx-${i}" type="checkbox" ${item.checked ? 'checked' : ''} onclick="toggleCheck(${i})"/>
                <label class="cbx" for="cbx-${i}">
                    <span>
                        <svg width="12px" height="9px" viewbox="0 0 12 9">
                            <polyline points="1 5 4 8 11 1"></polyline>
                        </svg>
                    </span>
                    <span>${item.text}</span>
                </label>
                <button onclick="deleteItem(${i})">x</button>
            </div>`
        ).join('');
}

function toggleCheck(index) {
    bevasarloLista[index].checked = !bevasarloLista[index].checked;
    renderList();
}

function deleteItem(index) {
    bevasarloLista.splice(index, 1);
    renderList();
}