  var firebaseConfig = {
    databaseURL: "https://discordbot-304c4-default-rtdb.europe-west1.firebasedatabase.app/",
  };
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  
  firebase.database().ref('data/players').orderByChild("sort").limitToFirst(20).once('value',function(snapshot){
    console.log(snapshot.val());
          snapshot.forEach(
            function(ChildSnapshot){
                let name = ChildSnapshot.val().name;
                let level = ChildSnapshot.val().level;
               $("#list").append("<tr><td>" + name + "</td><td>" + level + "</td></tr>");
            }
          );
  });

  firebase.database().ref('data/servers').orderByChild("prefix").once('value',function(snapshot){
    console.log(snapshot.val());
          snapshot.forEach(
            function(ChildSnapshot){
                let name = ChildSnapshot.val().name;
                let prefix = ChildSnapshot.val().prefix;
                let shouldping = ChildSnapshot.val().shouldping;
               $("#servers").append("<tr><td>" + name + "</td><td>" + prefix + "</td><td>" + shouldping + "</td></tr>");
            }
          );
  });

  firebase.database().ref('data/players').orderByChild("sort2").limitToFirst(20).once('value',function(snapshot){
    console.log(snapshot.val());
          snapshot.forEach(
            function(ChildSnapshot){
                let name = ChildSnapshot.val().name;
                let msgssent = ChildSnapshot.val().msgssent;
               $("#msgstats").append("<tr><td>" + name + "</td><td>" + msgssent + "</td></tr>");
            }
          );
  });