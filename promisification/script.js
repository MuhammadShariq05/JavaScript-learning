//Promisification

function promisify(f) {
  return function (...args) {
    // return a wrapper-function (*)
    return new Promise((resolve, reject) => {
      f(...args, (err, result) => {
        {
          // our custom callback for f (**)
          if (err) {
            reject(err);
          } else {
            resolve(result);
          }
        }
      });

      // args.push(callback); // append our custom callback to the end of f arguments

      // f.call(this, ...args); // call the original function
    });
  };
}

// Without Promise given by user
function loadScript(src, callback) {
  const script = document.createElement("script");

  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new error("Error"));

  document.head.appendChild(script);
}

// old school method using callbacks
loadScript("test.js", (err, script) => {
  if (err) {
    console.log(err);
  } else {
    console.log("script");
  }
});

// usage
const loadScriptNew = promisify(loadScript);
loadScriptNew("test.js")
  .then(() => console.log("Done: promise method"))
  .catch(() => console.log("Error caught!!"))(
  // using Async and await
  async () => {
    try {
      const result = await loadScriptNew("test.js");
      console.log("done with async await method");
    } catch (error) {
      console.log("error");
    }
  }
)();
