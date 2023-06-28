function LocalStorage() {
    // localStorage.setItem("lastname", "Smith");
    var lastname = localStorage.getItem("lastname");
    console.log(lastname);

    return (
    <>
        <p className="ARR">ⓒ2022 JJUN Creative Inc. All Rights Reserved.</p>
    </>
    );
}

export default LocalStorage;
