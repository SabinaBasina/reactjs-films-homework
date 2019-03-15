module.exports = {
    // Среды - среды, в которых ваши .js файлы будут запущены. Каждая среда предоставляет определенный набор предопределенных глобальных переменных.
    'env': {
        'node': true,
        'es6': true
    },
    "plugins": [
        "react"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "sourceType": "module"
    },

    // Здесь таятся наши правила.
    'rules': {
        // Каждое правило принимает тип оповещения о себе (2 или error, 1 или warn, 0 или off(не оповещать)) и непосрественно сами аргументы для правида.
        // Правило обеспечивает согласованный стиль отступов. В данном примере 4 пробела.
        'indent': [2, 2], // оповещать как ошибку
        // Правило обеспечивает последовательное использование точек с запятой.
        'semi': [2, 'always'], // оповещать как ошибку
        // Правило обеспечивает согласованный стиль привязки для блоков.
        'brace-style': [2, '1tbs'], // оповещать как ошибку
        // Правило направлено на устранение неиспользуемых переменных, функций и параметров функций.
        'no-console': [0]
    }
};