const pageTemplate = /*html*/`
<header id="app-header">
    <h2>
        Cola Eleitoral {{ year }}
    </h2>
    <h3 id="watermark">Made by 
        <a target="_blank" href="https://github.com/Yuri3358">Yuri3358</a>
    </h3>
</header>

<div class="cand-box" id="candidates-form">
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

    <p>
        <button class="btn btn-warning" @click="clearInputs">Limpar</button>
    </p>
    </div>

    <div class="cand-box" id="candidates-display">
        <h2 id="card-title">Eleições {{ year }}</h2>
        <label for="pres">Presidente da Rep.</label>
        <p class="cand-number" id="pres">{{ candidates.president }}</p>

        <label for="sen">Senador da Rep.</label>
        <p class="cand-number" id="sen">{{ candidates.senator }}</p>

        <label for="sen">Senador da Rep.</label>
        <p class="cand-number" id="fed">{{ candidates.federal }}</p>

        <label for="sen">Senador da Rep.</label>
        <p class="cand-number" id="governor">{{ candidates.governor }}</p>

        <label for="sen">Senador da Rep.</label>
        <p class="cand-number" id="state">{{ candidates.state }}</p>
        <p>
            <button class="btn btn-success" @click="printCard">Imprimir</button>
        </p>
    </div>
`

exports = { pageTemplate }