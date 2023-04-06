const pageTemplate = `
<header id="app-header">
    <h2>
        Cola Eleitoral {{ year }}
    </h2>
    <h3 id="watermark">Made by 
        <a target="_blank" href="https://github.com/Yuri3358">Yuri3358</a>
    </h3>
</header>

<div class="box" id="candidates-form">
    <label for="president">Pres. da República</label>
    <input class="candinput" id="president" maxlength="2" v-model="candidates.president">

    <label for="senator">Senador da Rep.</label>
    <input class="candinput" id="senator" maxlength="3" v-model="candidates.senator">    

    <label for="depfed">Deputado Federal</label>
    <input class="candinput" id="depfed" maxlength="4" v-model="candidates.federal">
    
    <label for="gov">Governador</label>
    <input class="candinput" id="gov" maxlength="2" v-model="candidates.governor">
    
    <label for="depest">Deputado Estadual</label>
    <input class="candinput" id="depest" maxlength="5" v-model="candidates.state">
</div>

<div id="candidates-display">
    <p>{{ candidates.president }}</p>
    <p>{{ candidates.senator }}</p>
    <p>{{ candidates.federal }}</p>
    <p>{{ candidates.governor }}</p>
    <p>{{ candidates.state }}</p>
</div>
`

exports = { pageTemplate }