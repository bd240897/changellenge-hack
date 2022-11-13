# Проект на хакатон Hack&Change 2022
**Трек 2: Открытие Инвестиции**

Команда: Win+ners

Ссылка на задание: https://drive.google.com/drive/folders/1GnO0WG_2_fXJ0HWqj4wYTZ_NgqAi1yIM

## Описание папок:
### Frontend

Нами был использовал `framefork` `vue.js` для создания чат платформы.

### html_templates

Размеченые шаблоны страниц для нашего приложения находятся в этой папке.
В задании был использован `bootstrap` framefork

### Docker

Для удобства запуска приложения на рзных платформах был использован `docker`. В папке `frontend` есть `dockerfile` который описывает состояние контейнера. Созданный контейнер будет оптравлен и развернут на удаленном сервере

## Запуск приложения

### 1. Установка Docker (Ubuntu 20.04) 
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-on-ubuntu-20-04-ru

    sudo apt update
    sudo apt install apt-transport-https ca-certificates curl software-properties-common
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
    sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focal stable"
    sudo apt update
    apt-cache policy docker-ce
    sudo apt install docker-ce
    sudo systemctl status docker // status

### 2. Установка Docker-compose (Ubuntu 20.04)
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-docker-compose-on-ubuntu-20-04-ru

    sudo curl -L "https://github.com/docker/compose/releases/download/1.26.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    docker-compose --version // status


### 3. Запуск через Docker-compose
https://webdevblog.ru/kak-ispolzovat-django-postgresql-i-docker/

    git clone https://github.com/bd240897/changellenge-hack.git
    cd changellenge-hack/
    docker-compose -f docker-compose.dev.yml up --build

##  Результат

Проект доступен по ссылкам

    http://win-plus-ners.ru:80 (доступен на момент предоставления решения)
    # или
    http://localhost:8080/ (доступен при создании локального проекта)
   
    
