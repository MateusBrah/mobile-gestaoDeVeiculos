Gestão de Veiculos (Offline First)

O Gestão de Veiculos é um aplicativo mobile desenvolvido para ajudar no gerenciamento de veículos e entregas, focado na funcionalidade offline first. Com este aplicativo, os motoristas podem registrar a entrega de veículos em outras unidades e manter registros de entregas mesmo sem conexão com a internet.

Funcionalidades
Login Social com Google: Faça login usando sua conta do Google.
Registro de Veículo: Cadastre novos veículos com informações como placa, modelo e marca.
Registro de Saída e Chegada: Registre a saída e a chegada de veículos, armazenando as informações localmente se estiver offline.
Exibição de Pontos em Mapa: Veja os pontos de saída e chegada salvos localmente em um mapa. Quando online, sincronize os dados com o servidor e atualize o mapa.

Tecnologias Utilizadas
React Native
Expo
RealmDB
API de Login Social do Google
Geolocalização
Bibliotecas de Mapas

Pré-requisitos
Node.js
npm ou yarn
Expo CLI


Instale as dependências do projeto:
npm install
ou
yarn install

# Execute o aplicativo no dispositivo/emulador Android
npx expo run:android

Tarefas
Implementar UI/UX conforme design no Figma.
Integrar login social do Google.
Persistir dados dos veículos utilizando RealmDB com suporte offline.
Permitir registros de saída e chegada offline e armazenar localmente.
Exibir pontos de saída e chegada em um mapa e sincronizar com o servidor quando online.


