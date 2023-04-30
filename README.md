# Starship Listing App

Bu uygulama, patika.dev FMSS Bilişim Frontend Practicum final ödevidir.

Uygulamayı çalıştırmak için, `git clone https://github.com/astopaal/starships-app` ile klonladıktan sonra, proje dizininde `npm install` komutunu kullanarak bağlılıkları kurun.

Ardından .env dosyasında REACT_APP_API_URL değerine https://swapi.dev/api değerini atayın. 

### NOT : Bu bir ödev projesi olduğu ve api key barındırmadığı için .env dosyası proje içinde bulunmaktadır. 

Son olarak, projeyi başlatmak için `npm start` komutunu kullanın.

Kullanılan teknolojiler : 
- React
- Redux Toolkit
- Tailwind Css
- Axios
- Starships Api (swapi.dev)
- Framer Motion
- React Testing Library

## Proje hiyerarşisi : 
```
src   
└───components
    │   Header //header component
    │   Card //card component
    │   List //list component içinde header ve card componentlerini listeler
    │   Loading //spinner bulundurur, status===loading durumunda tüm componentlerde render edilir
    │   StarshipDetail //list içindeki bir carda tıklandığında detail route'unda açılır ve renderlanır
│   
└───pages
    │   Home //header ve listi render eder
    │   Detail //header ve starshipdetail render eder
│   
└───redux
    │   starshipSlicer.js //starship verilerini apiden alır export eder
    │   store.js //redux store
│   
└───test
    │   Card.test.jsx
    │   Header.test.jsx
    │   List.test.jsx
    │   Loading.test.jsx
    │   StarshipDetail.test.jsx
│   
└───utils
    │   status.js //loading,idle,fail ve success durumlarını tutan bir object barındırır
App.js
```