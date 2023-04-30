# Starship Listing App

Live : https://cool-cuchufli-172c7b.netlify.app/

Bu uygulama, patika.dev FMSS Bilişim Frontend Practicum final ödevidir.

Uygulamayı çalıştırmak için, `git clone https://github.com/astopaal/starships-app` ile klonladıktan sonra, proje dizininde `npm install` komutunu kullanarak bağlılıkları kurun.

Ardından .env dosyasında REACT_APP_API_URL değerine https://swapi.dev/api değerini atayın. 

### NOT : Bu bir ödev projesi olduğu ve api key barındırmadığı için .env dosyası proje içinde bulunmaktadır. 

Son olarak, projeyi başlatmak için `npm start` komutunu kullanın.

### Kullanılan teknolojiler : 
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


## Ekran Görüntüleri

![image](https://user-images.githubusercontent.com/85809119/235360909-86f6d1a3-d51a-40ba-af74-dd206d9cd6d5.png)
![image](https://user-images.githubusercontent.com/85809119/235360916-233f3921-d50b-4f69-b764-bfd953bc7858.png)
