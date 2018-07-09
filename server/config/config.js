



// ---------------------


process.env.PORT = process.env.PORT || 3000;


// ====================================
// Entorno
// ===================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'


// ====================================
// Base de Datos
// ===================================

let urlDB;

if ( process.env.NODE_ENV === 'dev' ){
  urlDB = 'mongodb://localhost:27017/cafe'
}else {
  urlDB = 'mongodb://cafe-user:cafe-user123@ds129831.mlab.com:29831/cafe_'
}


process.env.URLDB = URLDB
