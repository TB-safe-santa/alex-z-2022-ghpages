window.quests.push(
  {
    name: 'question-second',
    items: [
      {
        type: 'block',
        items: [
          {
            type: 'image',
            source: './santa.jpg',
            alt: 'Фото Санты'
          },
          {
            type: 'text',
            text: 'Идём дальше!'
          }
        ]
      },
      {
        type: 'block',
        items: [
          {
            type: 'text',
            text: 'Вторая загадка:'
          },
          {
            type: 'text',
            text: '"Какая подпись на этом стикере?"'
          },
          {
            type: 'image',
            source: './sticker.png',
            alt: 'Стикер'
          },
          {
            type: 'buttons',
            buttons: [
              {
                text: '"Я не согласен"',
                action: () => showPage({name: 'question-second-done'})
              },
              {
                text: '"Таск поставил?"',
                action: () => showPage({name: 'question-second-wrong-task'})
              },
              {
                text: '"Псс, не хочешь починить то, что ни разу не видел?"',
                action: () => showPage({name: 'question-second-wrong-never'})
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'question-second-retry',
    items: [
      {
        type: 'block',
        items: [
          {
            type: 'image',
            source: './santa.jpg',
            alt: 'Фото Санты'
          },
          {
            type: 'text',
            text: 'Попробуй ещё раз!'
          }
        ]
      },
      {
        type: 'block',
        items: [
          {
            type: 'text',
            text: 'Загадка:'
          },
          {
            type: 'text',
            text: '"Какая подпись на этом стикере?"'
          },
          {
            type: 'image',
            source: './sticker.png',
            alt: 'Стикер'
          },
          {
            type: 'buttons',
            buttons: [
              {
                text: '"Я не согласен"',
                action: () => showPage({name: 'question-second-done'})
              },
              {
                text: '"Таск поставил?"',
                action: () => showPage({name: 'question-second-wrong-task'})
              },
              {
                text: '"Псс, не хочешь починить то, что ни разу не видел?"',
                action: () => showPage({name: 'question-second-wrong-never'})
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'question-second-wrong-task',
    items: [
      {
        type: 'block',
        items: [
          {
            type: 'image',
            source: './santa.jpg',
            alt: 'Фото Санты'
          },
          {
            type: 'header',
            text: 'А вот и нет!'
          }
        ]
      },
      {
        type: 'block',
        items: [
          {
            type: 'text',
            text: 'Эта подпись от этого стикера:'
          },
          {
            type: 'image',
            source: './task.png',
            alt: 'Стикер'
          }
        ]
      },
      {
        type: 'block',
        items: [
          {
            type: 'buttons',
            buttons: [
              {
                text: 'Ещё раз',
                action: () => showPage({name: 'question-second-retry'})
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'question-second-wrong-never',
    items: [
      {
        type: 'block',
        items: [
          {
            type: 'image',
            source: './santa.jpg',
            alt: 'Фото Санты'
          },
          {
            type: 'header',
            text: 'Неа!'
          }
        ]
      },
      {
        type: 'block',
        items: [
          {
            type: 'text',
            text: 'Эта подпись от этого стикера:'
          },
          {
            type: 'image',
            source: './never.png',
            alt: 'Стикер'
          }
        ]
      },
      {
        type: 'block',
        items: [
          {
            type: 'buttons',
            buttons: [
              {
                text: 'Ещё раз',
                action: () => showPage({name: 'question-second-retry'})
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'question-second-done',
    items: [
      {
        type: 'block',
        items: [
          {
            type: 'image',
            source: './santa.jpg',
            alt: 'Фото Санты'
          },
          {
            type: 'header',
            text: 'Я согласен!'
          },
          {
            type: 'text',
            text: 'Стикеры пройдены! Осталось чуть-чуть!'
          },
        ]
      },
      {
        type: 'block',
        items: [
          {
            type: 'buttons',
            buttons: [
              {
                text: 'Далее',
                action: () => showPage({name: 'question-third'})
              }
            ]
          }
        ]
      }
    ]
  }
);
