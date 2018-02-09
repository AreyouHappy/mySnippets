```
// For every other request, go to index.html. Let client-side handle the rest.
    app.get('/*', function(req, res) {
      if (users && (!req.user || !req.user.isAuthenticated)) {
        return res.redirect(`${mountPath}login`);
      }
      res.send(`<!DOCTYPE html>
        <head>
          <link rel="shortcut icon" type="image/x-icon" href="${mountPath}favicon.ico" />
          <base href="${mountPath}"/>
          <script>
            PARSE_DASHBOARD_PATH = "${mountPath}";
          </script>
        </head>
        <html>
          <title>Parse Dashboard</title>
          <body>
            <div id="browser_mount"></div>
            <script src="${mountPath}bundles/dashboard.bundle.js"></script>
          </body>
          <script src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
          <script>
          const myVar = setInterval(myTimer, 100);
            function myTimer() {
              var color=[];
              color[1]="#00db7c";
              color[2]="#00db7c";
              color[3]="#00db7c";
              color[4]="#8fb9cf";
              color[5]="#8fb9cf";
              color[6]="#8fb9cf";
              color[7]="#788c97";
              color[8]="#788c97";
              color[9]="#788c97";


              if ( $(".apps__1hp0J > li").length ) {
                  $(".apps__1hp0J > li").each(function( i ) {
                    $($(".apps__1hp0J > li")[i]).css("background-color", color[i]);
                  })
                  clearInterval(myVar);
                }
            }

          </script>
        </html>
      `);
    });
  });
  ```
