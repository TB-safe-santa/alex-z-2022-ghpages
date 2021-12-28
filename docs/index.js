window.quests = [];
window.onload = start;

function start() {
  showPage({ name: 'initial' })
}

function findPage(params) {
  return getPages().find((page) => {
    return page.name === params.pageName;
  });
}

function renderComponent(params) {
  switch (params.component.type) {
    case 'block' :
      return renderBlock(params.component);
    case 'buttons' :
      return renderButtons(params.component);
    case 'image' :
      return renderImage(params.component);
    case 'header' :
      return renderHeader(params.component);
    case 'text' :
      return renderText(params.component);
  }
}

function renderBlock(params) {
  const block = document.createElement('div');
  block.classList.add('block');

  params.items.forEach((item) => {
    const element = renderComponent({component: item});
    element.classList.add('block-item');
    block.appendChild(element);
  });

  return block;
}

function renderButtons(params) {
  const buttonsWrapper = document.createElement('div');
  buttonsWrapper.classList.add('buttons');

  params.buttons.forEach((buttonData) => {
    const button = document.createElement('button');
    button.innerHTML = buttonData.text;
    button.classList.add('buttons-button');
    button.onclick = buttonData.action;
    buttonsWrapper.appendChild(button);
  });

  return buttonsWrapper;
}

function renderImage(params) {
  const imageWrapper = document.createElement('div');
  imageWrapper.classList.add('image');

  imageWrapper.style.paddingBottom = params.size ? `${params.size}%` : '50%';

  const image = document.createElement('img');
  image.setAttribute('src', params.source);
  image.setAttribute('alt', params.alt);
  image.classList.add('image-content');
  image.style.width = params.size ? `${params.size}%` : '50%';
  imageWrapper.appendChild(image);

  return imageWrapper;
}

function renderHeader(params) {
  const headerWrapper = document.createElement('div');
  headerWrapper.classList.add('header');

  const title = document.createElement('h1');
  title.innerHTML = params.text;
  title.classList.add('header-title');
  headerWrapper.appendChild(title);

  return headerWrapper;
}

function renderText(params) {
  const textWrapper = document.createElement('div');
  textWrapper.classList.add('text');

  const text = document.createElement('p');
  text.innerHTML = params.text;
  text.classList.add('text-content');
  textWrapper.appendChild(text);

  return textWrapper;
}

function showPage(params) {
  const grandfather = document.getElementById('app');
  grandfather.innerHTML = '';

  const pageData = findPage({pageName: params.name});
  pageData.items.forEach((item) => {
    const element = renderComponent({component: item});
    grandfather.appendChild(element);
  });
}

function getPages() {
  const staticPages = (
    [
      {
        name: 'initial',
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
                text: 'Хо-хо-хо!'
              },
              {
                type: 'text',
                text: 'Здравствуй, Саша!'
              },
              {
                type: 'text',
                text: 'Никогда заранее не знаешь, когда случится следующий новый год, но в этот раз нам с тобой повезло! Ты у нас, всё-таки, тех-директор, поэтому я решил, что поздравление должно быть в электронном формате.'
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
                    text: 'Далее',
                    action: () => showPage({name: 'intro'})
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'intro',
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
                text: 'Саша!'
              },
              {
                type: 'text',
                text: 'Желаю тебе личного и карьерного роста, исключительно положительных эмоций, а также реализации знаний и всего твоего потенциала!'
              },
              {
                type: 'text',
                text: 'Желаю тебе баг-фри кода, быстрого интернета, чистой архитектуры и эффективных обсуждений!'
              },
              {
                type: 'text',
                text: 'От всего сердца желаю, чтобы ты провёл наступающий год лучше, чем все предыдущие вместе взятые! И я уверен, что этого тебе желает не только твой Санта, но и весь наш коллектив!'
              },
              {
                type: 'text',
                text: 'Удачи!'
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
                    text: 'Далее',
                    action: () => showPage({name: 'choco-ball'})
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'choco-ball',
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
                text: 'Чуть не забыл!'
              },
              {
                type: 'text',
                text: 'Твой шоколадный колобок в подарке не просто вкусный - он заряжен магической силой, которая поможет тебе в новом году!'
              },
              {
                type: 'text',
                text: 'А ещё его эффект можно усилить!'
              },
              {
                type: 'text',
                text: 'Для этого тебе нужно разгадать парочку моих загадок.'
              },
              {
                type: 'text',
                text: 'P.S. Только чур не смотреть в devtools! Санта устал и от таких пентестов не застраховался :)'
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
                    text: 'Отгадать!',
                    action: () => showPage({name: 'question-first'})
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        name: 'final',
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
                text: 'Отлично!'
              },
              {
                type: 'text',
                text: 'Все мои загадки ты отгадал, а значит шоколадный колобок теперь будет работать на полную мощность (нагрузочное тестирование проводилось, он к этому готов) и успех в новом году гарантирован!'
              },
              {
                type: 'text',
                text: 'Ещё раз с наступающим! Пусть у тебя всё будет супер! ;)'
              },
              {
                type: 'text',
                text: 'Твой Санта'
              }
            ]
          }
        ]
      }
    ]
  );

  return [...window.quests, ...staticPages];
}

