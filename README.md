<h1 align="center">
    <img alt="PlantManager" title="PlantManager" src="assets/icon.png" width=144 height=144 />
    <p>PlantManager</p>
</h1>

<img src="plantmanagerScreens.svg" />

## :page_facing_up: Descrição
O Plant Manager é um app para lembrar as pessoas de regar as suas plantinhas. <br/>
Esse projeto foi desenvolvido durante a **[Next Level Week](https://nextlevelweek.com/)**, apresentada pela **[@Rocketseat](https://github.com/Rocketseat)** durante o período de 19 a 25 de abril de 2021.

## 🛠 Tecnologias
Este projeto foi desenvolvido com as seguintes tecnologias

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Lottie React Native](https://docs.expo.io/versions/latest/sdk/lottie/)

## :clipboard: Funcionalidades
- [x] Fazer autenticação com o nome.
- [x] Selecionar planta para ser lembrado de regar.
- [x] Escolher horário para ser lembrado de regar a planta.
- [x] Receber uma notificação lembrando você de regar a planta no horário que você escolheu.
- [x] Remover plantas.
- [x] Todos os dados são salvos no Local Storage do dispositivo.


## :closed_book: Instalação

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/), [Expo](https://expo.io/), Um dispositivo físico ou um emuldador, Baixe o Expo Client no seu dispositivo para [IOS](https://apps.apple.com/br/app/expo-go/id982107779) ou [Android](https://play.google.com/store/apps/details?id=host.exp.exponent).

```bash
# Clone este repositório.
$ git clone https://github.com/FilipeRK/NLW5-PlantManager.git

# Vá para a pasta NLW5-PlantManager
$ cd NLW5-PlantManager

# Instale as dependências
$ yarn install 

# Execute o json server
$ json-server ./src/services/server.json --host 192.168.10.100 --port 3333 //Troca o IP 192.168.10.100 para o IP do seu computador

# Execute aplicação
$ expo start

# Leia o Código QR com Expo Client que você baixou no seu dispositivo, não se esqueça de colocar o seu endereço ip lan no diretório ./src/services/api na baseURL.
```

<p >Desenvolvido por <a href="https://github.com/FilipeRK">Filipe Kohls 🚀</a>
