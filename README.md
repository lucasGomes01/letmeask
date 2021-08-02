# letmeask

https://nlw-react.web.app/

Projeto desenvolvido acompanhando as aulas da Rocketseat na semana nextLevel, desenvolvido com React Native e banco Firebase.

Adicionei extra: 
  botão da área de administração que só aparece para o autor da sala.
  
Foi utilizado:
  autenticação com google;
  realtime database;

  //completar <------------------------------------

Código das regras do firebase:

{
  "rules": {
    "rooms" : {
      ".read": false,
      ".write":"auth != null",
      "$roomId": {
        ".read": true,
        ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)",
        "questions": {
          ".read": true,
          ".write": "auth != null && (!data.exists() || data.parent().child('authorId').val() == auth.id)",
          "likes": {
            ".read": true,
            ".write": "auth != null && (!data.exists() || data.child('authorId').val() == auth.id)"
          }
        }
      }
    }
  }
