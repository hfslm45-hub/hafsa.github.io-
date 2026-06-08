const form = document.getElementById("myForm");
const output = document.getElementById("output");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const nama = document.getElementById("nama").value;
    const alamat = document.getElementById("alamat").value;
    const tempat = document.getElementById("tempat").value;
    const tanggal = document.getElementById("tanggal").value;
    const hp = document.getElementById("hp").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const gender = document.querySelector('input[name="jk"]:checked')?.value;

    const agama = document.getElementById("agama").value;

    let hobi = [];

    document.querySelectorAll('input[name="hobi"]:checked').forEach((item)=>{
        hobi.push(item.value);
    });

    hobi = hobi.join(", ");

    const card = document.createElement("div");

    card.classList.add("card");

    card.innerHTML = `
        <p><b>Nama:</b> ${nama}</p>
        <p><b>Alamat:</b> ${alamat}</p>
        <p><b>Tempat Lahir:</b> ${tempat}</p>
        <p><b>Tanggal Lahir:</b> ${tanggal}</p>
        <p><b>Nomor HP:</b> ${hp}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Password:</b> ${password}</p>
        <p><b>Jenis Kelamin:</b> ${gender}</p>
        <p><b>Agama:</b> ${agama}</p>
        <p><b>Hobi:</b> ${hobi}</p>
    `;

    output.appendChild(card);

    form.reset();
});