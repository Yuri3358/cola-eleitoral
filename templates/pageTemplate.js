const pageTemplate = `
<header>Cola Eleitoral {{ year }}</header>
<div id="candidates-form">
    <label for="president">Pres. da República</label>
    <input class="candinput" id="president">

    <label for="senator">Senador da Rep.</label>
    <input class="candinput" id="senator">    

    <label for="depfed">Deputado Federal</label>
    <input class="candinput" id="depfed">
    
    <label for="gov">Governador</label>
    <input class="candinput" id="gov">
    
    <label for="depest">Deputado Estadual</label>
    <input class="candinput" id="depest">
</div>

<div id="candidates-display">
    <p>outro teste!</p>
</div>
`

exports = { pageTemplate }