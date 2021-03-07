<script>

    var p1 = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve("a");
      }, 4000);
    });
    var p2 = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve("b");
      }, 1000);
    });
    var p3 = new Promise((resolve, reject) => {
      setTimeout(function () {
        resolve("c");
      }, 1000);
    });

    // 手写Promise.all()
    let promiseAll = function (promisList) {
      const promisLists = Array.from(promisList);
      const promisListsLen = promisLists.length;
      let count = 0;
      const defaultList = [];
      return new Promise((resolve, reject) => {
        promisLists.forEach((p, index) => {
          // console.log(p,index)
          p.then(function (str) {
            defaultList[index] = str;
            count++;
            console.log(promisListsLen, count);
            if (count >= promisListsLen) {
              resolve(defaultList);
            }
          });
        });
      });
    };

    promiseAll([p1, p2, p3]).then(function (defaultS) {
      console.log("promiseAll then", defaultS);
    });





    //通过中央总线传值
    this.$bus.$emit("changeValue", this.b, "ddd");

</script>