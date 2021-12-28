window.quests.push(
  {
    name: 'question-first',
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
            text: 'Отлично! Я знал, что ты не упустишь такую возможность!'
          }
        ]
      },
      {
        type: 'block',
        items: [
          {
            type: 'text',
            text: 'Итак, первая загадка:'
          },
          {
            type: 'text',
            text: '"Главная причина, по которой Windows - не торт это..."'
          },
          {
            type: 'buttons',
            buttons: [
              {
                text: 'Adobe обходят эту систему стороной',
                action: () => showPage({name: 'question-first-wrong-adobe'})
              },
              {
                text: 'Надоевшие обои',
                action: () => showPage({name: 'question-first-done'})
              },
              {
                text: 'Тим Кук туда пальцы сувал',
                action: () => showPage({name: 'question-first-wrong-tim'})
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'question-first-wrong-tim',
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
            text: 'Error: 500!'
          },
          {
            type: 'text',
            text: 'Может это и случалось... Пожалуй, этому лучше остаться тайной.'
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
                action: () => showPage({name: 'question-first-retry'})
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'question-first-wrong-adobe',
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
            text: 'О нет! Ты ошибся!'
          },
          {
            type: 'text',
            text: 'Adobe и Windows как Сид и Нэнси, как Биба и Боба, как левый - коронный, правый - похоронный, как сцена каналов и баги. В общем, они неделимы.'
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
                action: () => showPage({name: 'question-first-retry'})
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'question-first-retry',
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
            text: 'Ничего, попробуй ещё раз!'
          },
        ]
      },
      {
        type: 'block',
        items: [
          {
            type: 'text',
            text: '"Главная причина, по которой Windows уже не торт это..."'
          },
          {
            type: 'buttons',
            buttons: [
              {
                text: 'Adobe обходят эту систему стороной',
                action: () => showPage({name: 'question-first-wrong-adobe'})
              },
              {
                text: 'Надоевшие обои',
                action: () => showPage({name: 'question-first-done'})
              },
              {
                text: 'Тим Кук туда пальцы сувал',
                action: () => showPage({name: 'question-first-wrong-tim'})
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: 'question-first-done',
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
            text: 'Уверен, Денис Попов гордится тобой!'
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
                action: () => showPage({name: 'question-second'})
              }
            ]
          }
        ]
      }
    ]
  }
);
