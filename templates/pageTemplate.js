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


    <label class="candinputlabel" for="depfed">Deputado Federal</label>
    <input class="candinput" id="depfed" maxlength="4" v-model="candidates.federal" placeholder="0000">

    <label class="candinputlabel" for="depest">Deputado Estadual</label>
    <input class="candinput" id="depest" maxlength="5" v-model="candidates.state" placeholder="00000">

    <label class="candinputlabel" for="senator">Senador</label>
    <input class="candinput" id="senator" maxlength="3" v-model="candidates.senator" placeholder="000">    

    <label class="candinputlabel" for="senator">Senador 02</label>
    <input class="candinput" id="senator2" maxlength="3" v-model="candidates.senator2" placeholder="000">    

    <label class="candinputlabel" for="gov">Governador</label>
    <input class="candinput" id="gov" maxlength="2" v-model="candidates.governor" placeholder="00">

    <label class="candinputlabel" for="president">Presidente</label>
    <input class="candinput" id="president" maxlength="2" v-model="candidates.president" placeholder="00">

    <p>
        <button class="btn btn-warning" @click="clearInputs">Limpar</button>
    </p>
</div>

    <div class="cand-box" id="candidates-display">
        <h2 id="card-title">Eleições {{ year }}</h2>

        <label for="sen">Deputado Federal</label>
        <p class="cand-number" id="fed">{{ candidates.federal }}</p>
        
        <label for="sen">Deputado Estadual</label>
        <p class="cand-number" id="state">{{ candidates.state }}</p>
        
        <label for="sen">Senador</label>
        <p class="cand-number" id="sen">{{ candidates.senator }}</p>

        <label for="sen">Senador 02</label>
        <p class="cand-number" id="sen">{{ candidates.senator2}}</p>
        
        <label for="sen">Governador</label>
        <p class="cand-number" id="governor">{{ candidates.governor }}</p>

        <label for="pres">Presidente</label>
        <p class="cand-number" id="pres">{{ candidates.president }}</p>
        <p>
            <button class="btn btn-success" @click="printCard">Imprimir</button>
        </p>
    </div>
`

exports = { pageTemplate }