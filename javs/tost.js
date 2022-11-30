let test = document.querySelector('#test');

let questions = [
	{
		text: 'Три Мушкетера: Кто был первой жертвой Миледи?',
		right: 'священник',
	},
	{
		text: 'Терминатор: Какова дата Судного дня?',
		right: '29 августа 1997 года',
	},
	{
		text: 'Сколько самостоятельных новелл входит в фильм «Операция «Ы» и другие приключения Шурика»?',
		right: '3',
	},
    {
		text: 'Кем, по словам Данилы Багрова, он служил в армии?',
		right: 'писарем в штабе',
	},
    {
		text: 'Какое прозвище было у Берта — знакомого Мэри Поппинс?',
		right: 'Спичечник',
	},
];

for (let question of questions) {
	let div = document.createElement('div');
	test.appendChild(div);
	
	let p = document.createElement('p');
	p.innerHTML = question.text;
	div.appendChild(p);
	
	let input = document.createElement('input');
	input.dataset.right = question.right;
	div.appendChild(input);
}

let button = document.querySelector('#button');
button.addEventListener('click', function() {
	let inputs = document.querySelectorAll('#test input');
	
	for (let input of inputs) {
		input.classList.remove('correct');
		input.classList.remove('incorrect');
		
		if (input.value.toLowerCase() == input.dataset.right.toLowerCase()) {
			input.classList.add('correct');
		} else {
			input.classList.add('incorrect');
		}
	}
});