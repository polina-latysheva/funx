export class FirebaseService {
  constructor ($window) {
    'ngInject';
    this.$window = $window;
    const fb_config = {
      apiKey: "AIzaSyBR-uc9qYYYYDbm3iALzGDebPQn3Uk0N18",
      authDomain: "fundex-9d689.firebaseapp.com",
      databaseURL: "https://fundex-9d689.firebaseio.com",
      storageBucket: "fundex-9d689.appspot.com",
      messagingSenderId: "73132638534"
    };

    $window.firebase.initializeApp(fb_config);
    this.db = $window.firebase.database();
  }

  getWeeks() {
    return this.db.ref('/weeks').once('value').then(snapshot => {
      const weeksArray = snapshot.val();
      return {
        weeks: weeksArray
      }
    });
  }

  edit(week, user, val) {
    this.db.ref('/').child('weeks').child(week).child(user).set(val).then( () => {
      this.$window.location = '/list';
    });
  }
}
