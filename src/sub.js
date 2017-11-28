// export文を使ってhello関数を定義する。
export function hello() {

  // const a = 1;
  // a = 2;

    let x = {
        dynamic: 0,
        static: 17,
        throws: "forbidden",
        class: "foo"
    };

    {
      let p = 1
    }


    x.dynamic++;
    x.static++;
    x.throws = "test";
    x.class += "bar"; 

    // not esistx es3
    [1,2,3].every(n => { return n > 0; });

    // not exists es5
    let p = new Promise(() => {
        return;
    });

    Object.entries({"foo": "baz"})

    let msg = 'helloメソッドが実行された。';
    alert(msg);


  var obj = {
    ["x" + foo]: "heh",
    ["y" + bar]: "noo",
    foo: "foo",
    bar: "bar"
  };
}
