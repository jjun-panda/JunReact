function LocalStorageTest() {
  //localStorage.setItem("lastname", "Smith");
  var lastname = localStorage.getItem("lastname");
  console.log(lastname);
  return (
    <>
        <div>ⓒ2022 JJUN Creative Inc. All Rights Reserved.</div>
    </>
  );
}

export default LocalStorageTest;