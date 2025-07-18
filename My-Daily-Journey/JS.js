
//ربط القيم
var username = document.getElementById('name')
var email = document.getElementById('email')
var password = document.getElementById('password')
var messagePara = document.getElementById('message')
var button = document.getElementById('signUpbtn')

//دالة تنفيذ تسجيل الدخول
function SingnIn(){
    //ازالة الفراغات من بداية ونهاية القيم  المدخلة
    username.value.trim()
    email.value.trim()
    password.value.trim()

    if (name === '' || email === '' || password === ''){
        messagePara.textContent = '❌ Please fill in this fields.'
        messagePara.style.color = 'pink'}

    else if (email === 'sar@example.com' && password === '12345678'){
        messagePara.textContent = '✔️ Login successful. welcom!'
        messagePara.style.color = 'green'
        window.location.href = 'myDaily.html'
    }}
// صفحة تسجيل
function GoalsIHaveCompleted(){
    alert("🎉 Your day has been saved!")
}
// صفحة التواصل
function confirmationMessage(){
    alert(Your message has been receined , Thank You 😍.)
}
