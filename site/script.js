const nav=document.querySelector('.nav');
const menu=document.querySelector('.menu-button');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('is-open');menu.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('is-open');menu?.setAttribute('aria-expanded','false');}));
document.querySelector('#year').textContent=new Date().getFullYear();
const creditButton=document.querySelector('.credit-toggle');
const credits=document.querySelector('.credits');
creditButton?.addEventListener('click',()=>{const open=creditButton.getAttribute('aria-expanded')==='true';creditButton.setAttribute('aria-expanded',String(!open));credits.hidden=open;});
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// ===== CANN hierarchy explorer =====
(() => {
  const map=document.getElementById('connectionsMap'); if(!map) return;
  const svg=document.getElementById('connectionsSvg');
  const cards=[...map.querySelectorAll('[data-node]')];
  const empty=document.getElementById('connectionsEmpty');
  const content=document.getElementById('connectionsDetailContent');
  const badge=document.getElementById('connectionsBadge');
  const title=document.getElementById('connectionsTitle');
  const text=document.getElementById('connectionsText');
  const chips=document.getElementById('connectionsChips');

  const N={
    'pillar-cognition':['CANN pillar','Cognition','The cognitive functions and representations that CANN aims to explain mechanistically.'],
    'pillar-anatomy':['CANN pillar','Anatomy','The organising principles of cortex, and the acute, chronic and evolutionary changes that reshape how those constraints act on neural dynamics and cognition.'],
    'pillar-networks':['CANN pillar','Neural Networks','Trainable and biophysical network models that connect anatomy to dynamics, computation and behaviour.'],
    'cog-perception':['Cognition','(Ab)normal perception','Conscious access, hallucinations and altered perceptual states, including psychedelics and psychiatric symptoms.'],
    'cog-wm':['Cognition','Working memory','How information is maintained, transformed and accessed across distributed cortical networks.'],
    'cog-decision':['Cognition','Decision-making','How choices emerge from distributed circuit dynamics across levels of organisation and species.'],
    'cog-planning':['Cognition','Planning','How future states and internally generated representations support flexible behaviour.'],
    'anat-principles':['Anatomy','Principles','Stable organising features of cortex, including receptor gradients, wiring constraints and spatial organisation.'],
    'anat-acute':['Anatomy','Acute changes · neuromodulation','Rapid changes in neuromodulatory state that reshape effective circuit dynamics over seconds to minutes.'],
    'anat-chronic':['Anatomy','Chronic changes · disease','Persistent biological changes over months to years that alter cortical dynamics, representations and cognition.'],
    'anat-evolution':['Anatomy','Evolutionary changes · cross-species','Species differences in cortical organisation used to understand how evolutionary anatomical change alters neural computation and cognition.'],
    'nn-trained':['Neural networks','Trained neural networks','Task-trained models, including Cortically Embedded RNNs, used to discover how biological constraints shape learned solutions.'],
    'nn-biophysical':['Neural networks','Biophysical models','Mechanistic large-scale models grounded in synaptic, receptor, cellular and connectomic data.'],
    'person-sean':['Person','Seán Froudist-Walsh','Principal Investigator, working across cognition, anatomy and both trained and biophysical neural-network models.'],
    'person-eva':['Person','Eva Sevenster','PhD student working on NeuroAI / CERNNs and neuromodulation.'],
    'person-ash':['Person','Aswathi Thrivikraman','PhD student working on anatomically constrained RNNs, planning and internally generated cognition.'],
    'person-tsvet':['Person','Tsvetoslav Ivanov','PhD student modelling working-memory deficits, hallucinations, neuromodulation and cross-species circuit mechanisms.'],
    'person-xiaohe':['Person','Xiaohe Yu','PhD student modelling stress, uncertainty, neuromodulation and decision-making.'],
    'person-teo':['Person','Teo Fantacci','Visiting PhD student studying the dynamics and geometry of neural activity using latent-state models, dimensionality reduction and biophysical modelling.'],
    'person-julian':['Person','Julian Kedys','Incoming Research Assistant developing biophysical models of serotonin and dopamine effects on fMRI signals.'],
    'person-yufan':['Person','Yufan Wang','Incoming postdoctoral researcher working on cortical anatomy and cross-species neuroscience.'],
    'person-james':['Person','James McAllister','Incoming postdoctoral researcher developing Cortically Embedded RNNs for cross-species modelling.'],
    'person-naomi':['Person','Naomi Curnow','Incoming PhD student developing cross-species Cortically Embedded RNNs of decision-making.'],
    'person-ulysse':['Alumnus','Ulysse Klatzmann','CANN PhD alumnus whose work developed a connectome-based biophysical account of conscious access in macaque cortex.'],
    'person-rahul':['Alumnus','Rahul Gupta','Former CANN postdoc whose work examined psilocybin and altered prefrontal cortical dynamics, and who also contributed to cross-species work on dopamine D1 receptors and distractibility.'],
    'person-dabal':['Alumnus','Dabal Pedamonti','Former short-term CANN postdoc who worked on NeuroAI and modelling the effects of psilocybin.'],
    'pub-klatzmann2025':['Publication','Klatzmann et al. · Cell Reports · 2025','A dynamic bifurcation mechanism explains cortex-wide neural correlates of conscious access.'],
    'pub-purple2025':['Publication','Purple et al. · Molecular Psychiatry · 2025','Short- and long-term modulation of rat prefrontal cortical activity following single doses of psilocybin.'],
    'pub-receptors2023':['Publication','Froudist-Walsh et al. · Nature Neuroscience · 2023','Gradients of neurotransmitter receptor expression in the macaque cortex.'],
    'pub-dopamine2021':['Publication','Froudist-Walsh et al. · Neuron · 2021','A dopamine gradient controls access to distributed working memory in the large-scale monkey cortex.'],
    'pub-ding2024':['Publication','Ding et al. · eLife · 2024','Cell type-specific connectome predicts distributed working memory activity in the mouse brain.'],
    'pub-joyce2025':['Publication','Joyce*, Ivanov* et al. · Communications Biology · 2025','Higher dopamine D1 receptor expression in prefrontal parvalbumin neurons underlies higher distractibility in marmosets versus macaques.'],
    'pub-klatzmann-visual2025':['Publication','Klatzmann et al. · bioRxiv · 2025','Spatial layout of visual specialization is shaped by competing default mode and sensory networks.'],
    'pub-magrou2024':['Publication','Magrou*, Joyce* et al. · Cerebral Cortex · 2024','The meso-connectomes of mouse, marmoset, and macaque: network organization and the emergence of higher cognition.']
  };

  const pillarDomain=[
    ['pillar-cognition','cog-perception'],['pillar-cognition','cog-wm'],['pillar-cognition','cog-decision'],['pillar-cognition','cog-planning'],
    ['pillar-anatomy','anat-principles'],['pillar-anatomy','anat-acute'],['pillar-anatomy','anat-chronic'],['pillar-anatomy','anat-evolution'],
    ['pillar-networks','nn-trained'],['pillar-networks','nn-biophysical']
  ];

  const cross=[
    ['cog-perception','anat-principles'],['cog-perception','anat-acute'],['cog-perception','anat-chronic'],['cog-perception','nn-biophysical'],
    ['cog-wm','anat-principles'],['cog-wm','anat-acute'],['cog-wm','anat-chronic'],['cog-wm','anat-evolution'],['cog-wm','nn-trained'],['cog-wm','nn-biophysical'],
    ['cog-decision','anat-acute'],['cog-decision','anat-evolution'],['cog-decision','nn-trained'],['cog-decision','nn-biophysical'],
    ['cog-planning','nn-trained'],
    ['anat-principles','nn-trained'],['anat-principles','nn-biophysical'],
    ['anat-acute','nn-trained'],['anat-acute','nn-biophysical'],
    ['anat-chronic','nn-biophysical'],
    ['anat-evolution','nn-trained'],['anat-evolution','nn-biophysical']
  ];

  const people=[
    ['cog-perception','person-sean'],['cog-perception','person-tsvet'],['cog-perception','person-ulysse'],['cog-perception','person-rahul'],['cog-perception','person-dabal'],
    ['cog-wm','person-sean'],['cog-wm','person-eva'],['cog-wm','person-tsvet'],['cog-wm','person-ash'],['cog-wm','person-teo'],
    ['cog-decision','person-sean'],['cog-decision','person-xiaohe'],['cog-decision','person-naomi'],['cog-decision','person-teo'],
    ['cog-planning','person-sean'],['cog-planning','person-ash'],

    ['anat-principles','person-sean'],['anat-principles','person-tsvet'],['anat-principles','person-eva'],['anat-principles','person-ash'],['anat-principles','person-yufan'],['anat-principles','person-ulysse'],
    ['anat-acute','person-sean'],['anat-acute','person-eva'],['anat-acute','person-tsvet'],['anat-acute','person-xiaohe'],['anat-acute','person-julian'],['anat-acute','person-rahul'],['anat-acute','person-dabal'],
    ['anat-chronic','person-sean'],['anat-chronic','person-tsvet'],
    ['anat-evolution','person-sean'],['anat-evolution','person-tsvet'],['anat-evolution','person-yufan'],['anat-evolution','person-james'],['anat-evolution','person-naomi'],['anat-evolution','person-rahul'],

    ['nn-trained','person-sean'],['nn-trained','person-eva'],['nn-trained','person-ash'],['nn-trained','person-james'],['nn-trained','person-naomi'],['nn-trained','person-dabal'],
    ['nn-biophysical','person-sean'],['nn-biophysical','person-tsvet'],['nn-biophysical','person-xiaohe'],['nn-biophysical','person-julian'],['nn-biophysical','person-teo'],['nn-biophysical','person-ulysse']
  ];

  const pubs=[
    ['cog-perception','pub-klatzmann2025'],['nn-biophysical','pub-klatzmann2025'],
    ['cog-perception','pub-purple2025'],['anat-acute','pub-purple2025'],

    ['anat-principles','pub-receptors2023'],
    ['anat-principles','pub-klatzmann-visual2025'],
    ['anat-principles','pub-ding2024'],

    ['cog-wm','pub-dopamine2021'],['anat-acute','pub-dopamine2021'],['nn-biophysical','pub-dopamine2021'],
    ['cog-wm','pub-ding2024'],['nn-biophysical','pub-ding2024'],

    ['cog-wm','pub-joyce2025'],['anat-acute','pub-joyce2025'],['anat-evolution','pub-joyce2025'],['nn-biophysical','pub-joyce2025'],
    ['cog-perception','pub-klatzmann-visual2025'],
    ['anat-evolution','pub-magrou2024'],['cog-wm','pub-magrou2024']
  ];
  const personPub=[
    ['person-ulysse','pub-klatzmann2025'],['person-rahul','pub-purple2025'],
    ['person-tsvet','pub-joyce2025'],
    ['person-sean','pub-klatzmann2025'],['person-sean','pub-purple2025'],['person-sean','pub-receptors2023'],['person-sean','pub-dopamine2021'],['person-sean','pub-ding2024'],['person-sean','pub-joyce2025'],
    ['person-ulysse','pub-klatzmann-visual2025'],['person-sean','pub-klatzmann-visual2025'],
    ['person-sean','pub-magrou2024'],
    ['person-rahul','pub-joyce2025']
  ];
  const edges=[...pillarDomain,...cross,...people,...pubs,...personPub];

  const el=id=>map.querySelector(`[data-node="${id}"]`);
  const direct=id=>{
    const s=new Set([id]);
    edges.forEach(([a,b])=>{if(a===id)s.add(b);if(b===id)s.add(a)});
    return s;
  };
  const expanded=id=>{
    const s=direct(id), type=N[id]?.[0];
    if(type==='CANN pillar'){
      [...s].forEach(x=>{
        people.forEach(([d,p])=>{if(d===x)s.add(p)});
        pubs.forEach(([d,p])=>{if(d===x)s.add(p)});
      });
    }
    if(type==='Person'||type==='Alumnus'||type==='Publication'){
      [...s].forEach(x=>pillarDomain.forEach(([p,d])=>{if(d===x)s.add(p)}));
    }
    return s;
  };
  const center=e=>{
    const r=e.getBoundingClientRect(),m=map.getBoundingClientRect();
    return{x:r.left-m.left+r.width/2,y:r.top-m.top+r.height/2};
  };
  function draw(id,rel){
    svg.innerHTML='';
    edges.forEach(([a,b])=>{
      if(!(rel.has(a)&&rel.has(b)))return;
      const A=el(a),B=el(b);if(!A||!B)return;
      const p1=center(A),p2=center(B),mid=(p1.y+p2.y)/2;
      const path=document.createElementNS('http://www.w3.org/2000/svg','path');
      path.setAttribute('d',`M ${p1.x} ${p1.y} C ${p1.x} ${mid}, ${p2.x} ${mid}, ${p2.x} ${p2.y}`);
      let color='#5c7e91';
      if(N[id]?.[0]==='Cognition'||id==='pillar-cognition')color='#7865b3';
      if(N[id]?.[0]==='Anatomy'||id==='pillar-anatomy')color='#b68148';
      if(N[id]?.[0]==='Neural networks'||id==='pillar-networks')color='#43848a';
      if(N[id]?.[0]==='Publication')color='#a87943';
      if(['Person','Alumnus'].includes(N[id]?.[0]))color='#31856b';
      path.setAttribute('fill','none');path.setAttribute('stroke',color);
      path.setAttribute('stroke-width',(a===id||b===id)?'2':'1.05');
      path.setAttribute('stroke-opacity',(a===id||b===id)?'.72':'.2');
      path.setAttribute('stroke-linecap','round');svg.appendChild(path);
    });
  }
  function show(id,rel){
    empty.hidden=true;content.hidden=false;
    badge.textContent=N[id][0];title.textContent=N[id][1];text.textContent=N[id][2];chips.innerHTML='';
    [...rel].filter(x=>x!==id&&N[x]).forEach(x=>{
      const c=document.createElement('span');c.className='connections-chip';c.textContent=N[x][1];chips.appendChild(c);
    });
  }
  function activate(id){
    const rel=expanded(id);
    cards.forEach(c=>{const n=c.dataset.node;c.classList.toggle('connect-active',rel.has(n));c.classList.toggle('connect-dim',!rel.has(n))});
    draw(id,rel);show(id,rel);
  }
  function reset(){cards.forEach(c=>c.classList.remove('connect-active','connect-dim'));svg.innerHTML='';content.hidden=true;empty.hidden=false}
  cards.forEach(c=>{c.addEventListener('mouseenter',()=>activate(c.dataset.node));c.addEventListener('focus',()=>activate(c.dataset.node))});
  map.addEventListener('mouseleave',reset);
})();
