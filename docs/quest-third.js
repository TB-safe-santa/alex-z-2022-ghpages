window.quests.push(
  {
    name: 'question-third',
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
            text: 'Последняя загадка! Мы почти у цели!'
          }
        ]
      },
      {
        type: 'block',
        items: [
          {
            type: 'text',
            text: '"Кто в 2020 году был в костюме розового зайца и помогал Санте?"'
          },
          {
            type: 'buttons',
            buttons: [
              {
                text: 'Лёша Кольцов',
                action: () => showPage({name: 'question-third-done'})
              },
              {
                text: 'Лёша Леонидов',
                action: () => showPage({name: 'question-third-wrong-leo'})
              },
              {
                text: 'Влад',
                action: () => showPage({name: 'question-third-wrong-vlad'})
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'question-third-retry',
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
            text: 'Попробуй ещё раз!'
          }
        ]
      },
      {
        type: 'block',
        items: [
          {
            type: 'text',
            text: '"Кто в 2020 году был в костюме розового зайца и помогал Санте?"'
          },
          {
            type: 'buttons',
            buttons: [
              {
                text: 'Лёша Кольцов',
                action: () => showPage({name: 'question-third-done'})
              },
              {
                text: 'Лёша Леонидов',
                action: () => showPage({name: 'question-third-wrong-leo'})
              },
              {
                text: 'Влад',
                action: () => showPage({name: 'question-third-wrong-vlad'})
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'question-third-wrong-leo',
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
            text: 'Неправильно!'
          },
          {
            type: 'text',
            text: 'Лёша Леонидов тогда подменял Снегурочку!'
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
                action: () => showPage({name: 'question-third-retry'})
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'question-third-wrong-vlad',
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
          },
          {
            type: 'text',
            text: 'Влад был таинственным индейцем!'
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
                text: 'Ещё раз',
                action: () => showPage({name: 'question-third-retry'})
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'question-third-done',
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
            text: 'Правильно!'
          },
          {
            type: 'text',
            text: 'Без этих знаний просто никуда, не так ли?'
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
                text: 'Усилить бафф!',
                action: () => showPage({name: 'final'})
              }
            ]
          }
        ]
      }
    ]
  }
);
