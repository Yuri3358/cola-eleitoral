const pageTemplate = `
<header>Cola Eleitoral {{ year }}</header>
<div id="candidates-form">
    <label for="president">Pres. da República</label>
    <input class="candinput" id="president" maxlength="2">

    <label for="senator">Senador da Rep.</label>
    <input class="candinput" id="senator" maxlength="3">    

    <label for="depfed">Deputado Federal</label>
    <input class="candinput" id="depfed" maxlength="4">
    
    <label for="gov">Governador</label>
    <input class="candinput" id="gov" maxlength="2">
    
    <label for="depest">Deputado Estadual</label>
    <input class="candinput" id="depest" maxlength="5">
</div>

<div id="candidates-display">
    <p>outro teste!</p>
</div>
`

exports = { pageTemplate }