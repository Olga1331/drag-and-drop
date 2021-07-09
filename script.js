const item = document.querySelector('.item'),
      placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart',dragstart);
item.addEventListener('dragend',dragend);

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover), /* вызывается когда элемент находиться над плейсхолдером */
    placeholder.addEventListener('dragenter', dragenter), /* вызывается когда заходим на территорию плейсхолдера */
    placeholder.addEventListener('dragleave', dragleave), /* вызывается когда зашли на территорию плейсхолдера, но покинули ее не отпуская элемент */
    placeholder.addEventListener('drop', dragdrop ); /* вызывается когда отпустили элемент в плейсхолдер */
}

function dragstart(event) {
    event.target.classList.add('hold');
 setTimeout(() => /* функция удаляет элемент с изначального места после начала перетаскивания. Элемент остается только под мышью */
    event.target.classList.add('hide'), 0);
}

function dragend(event) {
    event.target.classList.remove('hold','hide');

}

function dragover(event) {
    event.preventDefault(); /* отменили стандартное поведение браузера- не дает опустить элемент в другой плейсхолдер */
}

function dragenter(event) {
    event.target.classList.add('hovered'); /* добавили класс, который визуально подсвечивает тот плейсхолдер, который активен в данный момент */
}

function dragleave(event) {
    event.target.classList.remove('hovered');/*  удалили класс с неактивного плейсхолдера */
}

function dragdrop(event) {
 event.target.append(item); /* опускаем( вставляем) элемент в плейсхолдер */
 event.target.classList.remove('hovered');
}
