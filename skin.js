// Garden Gnome Software - Skin
// Pano2VR 6.1.15/18116
// Filename: hotspot.ggsk
// Generated 2022-11-10T11:16:38

function pano2vrSkin(player,base) {
	player.addVariable('ht_ani', 2, false);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=2500;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 10px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.ggActivate=function () {
			player.setVariableValue('ht_ani', true);
		}
		me._timer_1.ggDeactivate=function () {
			player.setVariableValue('ht_ani', false);
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_menu_story_changenode = function(){
		if(hotspotTemplates['Menu Story']) {
			var i;
			for(i = 0; i < hotspotTemplates['Menu Story'].length; i++) {
				if (hotspotTemplates['Menu Story'][i]._rectangle_12 && hotspotTemplates['Menu Story'][i]._rectangle_12.logicBlock_scaling) {
					hotspotTemplates['Menu Story'][i]._rectangle_12.logicBlock_scaling();
				}
				if (hotspotTemplates['Menu Story'][i]._rectangle_12 && hotspotTemplates['Menu Story'][i]._rectangle_12.logicBlock_alpha) {
					hotspotTemplates['Menu Story'][i]._rectangle_12.logicBlock_alpha();
				}
				if (hotspotTemplates['Menu Story'][i]._rectangle_22 && hotspotTemplates['Menu Story'][i]._rectangle_22.logicBlock_scaling) {
					hotspotTemplates['Menu Story'][i]._rectangle_22.logicBlock_scaling();
				}
				if (hotspotTemplates['Menu Story'][i]._rectangle_22 && hotspotTemplates['Menu Story'][i]._rectangle_22.logicBlock_alpha) {
					hotspotTemplates['Menu Story'][i]._rectangle_22.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_menu_story_varchanged_ht_ani = function(){
		if(hotspotTemplates['Menu Story']) {
			var i;
			for(i = 0; i < hotspotTemplates['Menu Story'].length; i++) {
				if (hotspotTemplates['Menu Story'][i]._rectangle_12 && hotspotTemplates['Menu Story'][i]._rectangle_12.logicBlock_scaling) {
					hotspotTemplates['Menu Story'][i]._rectangle_12.logicBlock_scaling();
				}
				if (hotspotTemplates['Menu Story'][i]._rectangle_12 && hotspotTemplates['Menu Story'][i]._rectangle_12.logicBlock_alpha) {
					hotspotTemplates['Menu Story'][i]._rectangle_12.logicBlock_alpha();
				}
				if (hotspotTemplates['Menu Story'][i]._rectangle_22 && hotspotTemplates['Menu Story'][i]._rectangle_22.logicBlock_scaling) {
					hotspotTemplates['Menu Story'][i]._rectangle_22.logicBlock_scaling();
				}
				if (hotspotTemplates['Menu Story'][i]._rectangle_22 && hotspotTemplates['Menu Story'][i]._rectangle_22.logicBlock_alpha) {
					hotspotTemplates['Menu Story'][i]._rectangle_22.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_changenode = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._rectangle_11 && hotspotTemplates['Hotspot 1'][i]._rectangle_11.logicBlock_scaling) {
					hotspotTemplates['Hotspot 1'][i]._rectangle_11.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 1'][i]._rectangle_11 && hotspotTemplates['Hotspot 1'][i]._rectangle_11.logicBlock_alpha) {
					hotspotTemplates['Hotspot 1'][i]._rectangle_11.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot 1'][i]._rectangle_21 && hotspotTemplates['Hotspot 1'][i]._rectangle_21.logicBlock_scaling) {
					hotspotTemplates['Hotspot 1'][i]._rectangle_21.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 1'][i]._rectangle_21 && hotspotTemplates['Hotspot 1'][i]._rectangle_21.logicBlock_alpha) {
					hotspotTemplates['Hotspot 1'][i]._rectangle_21.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_hotspot_1_varchanged_ht_ani = function(){
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				if (hotspotTemplates['Hotspot 1'][i]._rectangle_11 && hotspotTemplates['Hotspot 1'][i]._rectangle_11.logicBlock_scaling) {
					hotspotTemplates['Hotspot 1'][i]._rectangle_11.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 1'][i]._rectangle_11 && hotspotTemplates['Hotspot 1'][i]._rectangle_11.logicBlock_alpha) {
					hotspotTemplates['Hotspot 1'][i]._rectangle_11.logicBlock_alpha();
				}
				if (hotspotTemplates['Hotspot 1'][i]._rectangle_21 && hotspotTemplates['Hotspot 1'][i]._rectangle_21.logicBlock_scaling) {
					hotspotTemplates['Hotspot 1'][i]._rectangle_21.logicBlock_scaling();
				}
				if (hotspotTemplates['Hotspot 1'][i]._rectangle_21 && hotspotTemplates['Hotspot 1'][i]._rectangle_21.logicBlock_alpha) {
					hotspotTemplates['Hotspot 1'][i]._rectangle_21.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_menu_tour_changenode = function(){
		if(hotspotTemplates['Menu Tour']) {
			var i;
			for(i = 0; i < hotspotTemplates['Menu Tour'].length; i++) {
				if (hotspotTemplates['Menu Tour'][i]._rectangle_10 && hotspotTemplates['Menu Tour'][i]._rectangle_10.logicBlock_scaling) {
					hotspotTemplates['Menu Tour'][i]._rectangle_10.logicBlock_scaling();
				}
				if (hotspotTemplates['Menu Tour'][i]._rectangle_10 && hotspotTemplates['Menu Tour'][i]._rectangle_10.logicBlock_alpha) {
					hotspotTemplates['Menu Tour'][i]._rectangle_10.logicBlock_alpha();
				}
				if (hotspotTemplates['Menu Tour'][i]._rectangle_20 && hotspotTemplates['Menu Tour'][i]._rectangle_20.logicBlock_scaling) {
					hotspotTemplates['Menu Tour'][i]._rectangle_20.logicBlock_scaling();
				}
				if (hotspotTemplates['Menu Tour'][i]._rectangle_20 && hotspotTemplates['Menu Tour'][i]._rectangle_20.logicBlock_alpha) {
					hotspotTemplates['Menu Tour'][i]._rectangle_20.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_menu_tour_varchanged_ht_ani = function(){
		if(hotspotTemplates['Menu Tour']) {
			var i;
			for(i = 0; i < hotspotTemplates['Menu Tour'].length; i++) {
				if (hotspotTemplates['Menu Tour'][i]._rectangle_10 && hotspotTemplates['Menu Tour'][i]._rectangle_10.logicBlock_scaling) {
					hotspotTemplates['Menu Tour'][i]._rectangle_10.logicBlock_scaling();
				}
				if (hotspotTemplates['Menu Tour'][i]._rectangle_10 && hotspotTemplates['Menu Tour'][i]._rectangle_10.logicBlock_alpha) {
					hotspotTemplates['Menu Tour'][i]._rectangle_10.logicBlock_alpha();
				}
				if (hotspotTemplates['Menu Tour'][i]._rectangle_20 && hotspotTemplates['Menu Tour'][i]._rectangle_20.logicBlock_scaling) {
					hotspotTemplates['Menu Tour'][i]._rectangle_20.logicBlock_scaling();
				}
				if (hotspotTemplates['Menu Tour'][i]._rectangle_20 && hotspotTemplates['Menu Tour'][i]._rectangle_20.logicBlock_alpha) {
					hotspotTemplates['Menu Tour'][i]._rectangle_20.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_next_changenode = function(){
		if(hotspotTemplates['Next']) {
			var i;
			for(i = 0; i < hotspotTemplates['Next'].length; i++) {
				if (hotspotTemplates['Next'][i]._rectangle_1 && hotspotTemplates['Next'][i]._rectangle_1.logicBlock_scaling) {
					hotspotTemplates['Next'][i]._rectangle_1.logicBlock_scaling();
				}
				if (hotspotTemplates['Next'][i]._rectangle_1 && hotspotTemplates['Next'][i]._rectangle_1.logicBlock_alpha) {
					hotspotTemplates['Next'][i]._rectangle_1.logicBlock_alpha();
				}
				if (hotspotTemplates['Next'][i]._rectangle_2 && hotspotTemplates['Next'][i]._rectangle_2.logicBlock_scaling) {
					hotspotTemplates['Next'][i]._rectangle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['Next'][i]._rectangle_2 && hotspotTemplates['Next'][i]._rectangle_2.logicBlock_alpha) {
					hotspotTemplates['Next'][i]._rectangle_2.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_next_varchanged_ht_ani = function(){
		if(hotspotTemplates['Next']) {
			var i;
			for(i = 0; i < hotspotTemplates['Next'].length; i++) {
				if (hotspotTemplates['Next'][i]._rectangle_1 && hotspotTemplates['Next'][i]._rectangle_1.logicBlock_scaling) {
					hotspotTemplates['Next'][i]._rectangle_1.logicBlock_scaling();
				}
				if (hotspotTemplates['Next'][i]._rectangle_1 && hotspotTemplates['Next'][i]._rectangle_1.logicBlock_alpha) {
					hotspotTemplates['Next'][i]._rectangle_1.logicBlock_alpha();
				}
				if (hotspotTemplates['Next'][i]._rectangle_2 && hotspotTemplates['Next'][i]._rectangle_2.logicBlock_scaling) {
					hotspotTemplates['Next'][i]._rectangle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['Next'][i]._rectangle_2 && hotspotTemplates['Next'][i]._rectangle_2.logicBlock_alpha) {
					hotspotTemplates['Next'][i]._rectangle_2.logicBlock_alpha();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('ht_ani', true);
			} else {
				player.setVariableValue('ht_ani', false);
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_menu_story(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._menu_story=document.createElement('div');
		el.ggId="Menu Story";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 202px;';
		hs+='position : absolute;';
		hs+='top : 230px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_story.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._menu_story.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._menu_story.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._menu_story.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._menu_story.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._menu_story.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image1=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_12=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._rectangle_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_12.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_12.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_12.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_12.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_12.ggCurrentLogicStateScaling == 0) {
					me._rectangle_12.ggParameter.sx = 1;
					me._rectangle_12.ggParameter.sy = 1;
					me._rectangle_12.style[domTransform]=parameterToTransform(me._rectangle_12.ggParameter);
				}
				else {
					me._rectangle_12.ggParameter.sx = 0.5;
					me._rectangle_12.ggParameter.sy = 0.5;
					me._rectangle_12.style[domTransform]=parameterToTransform(me._rectangle_12.ggParameter);
				}
			}
		}
		me._rectangle_12.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_12.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_12.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_12.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_12.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rectangle_12.style.opacity == 0.0) { me._rectangle_12.style.visibility="hidden"; } }, 505);
					me._rectangle_12.style.opacity=0;
				}
				else {
					me._rectangle_12.style.visibility=me._rectangle_12.ggVisible?'inherit':'hidden';
					me._rectangle_12.style.opacity=1;
				}
			}
		}
		me._rectangle_12.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image1.appendChild(me._rectangle_12);
		el=me._rectangle_22=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_22.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_22.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_22.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_22.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_22.ggCurrentLogicStateScaling == 0) {
					me._rectangle_22.ggParameter.sx = 0.5;
					me._rectangle_22.ggParameter.sy = 0.5;
					me._rectangle_22.style[domTransform]=parameterToTransform(me._rectangle_22.ggParameter);
				}
				else {
					me._rectangle_22.ggParameter.sx = 1;
					me._rectangle_22.ggParameter.sy = 1;
					me._rectangle_22.style[domTransform]=parameterToTransform(me._rectangle_22.ggParameter);
				}
			}
		}
		me._rectangle_22.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_22.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_22.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_22.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_22.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_22.style.visibility=me._rectangle_22.ggVisible?'inherit':'hidden';
					me._rectangle_22.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._rectangle_22.style.opacity == 0.0) { me._rectangle_22.style.visibility="hidden"; } }, 505);
					me._rectangle_22.style.opacity=0;
				}
			}
		}
		me._rectangle_22.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image1.appendChild(me._rectangle_22);
		me._menu_story.appendChild(me._ht_image1);
		el=me._image_11=document.createElement('div');
		els=me._image_11__img=document.createElement('img');
		els.className='ggskin ggskin_image_11';
		hs=basePath + 'images/image_11.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/image_11__o.png';
		me._image_11__img.ggOverSrc=hs;
		hs=basePath + 'images/image_11__a.png';
		me._image_11__img.ggDownSrc=hs;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 150px;';
		hs+='left : -86px;';
		hs+='position : absolute;';
		hs+='top : -65px;';
		hs+='visibility : inherit;';
		hs+='width : 275px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_11.onmouseover=function (e) {
			me._image_11__img.src=me._image_11__img.ggOverSrc;
		}
		me._image_11.onmouseout=function (e) {
			me._image_11__img.src=me._image_11__img.ggNormalSrc;
		}
		me._image_11.onmousedown=function (e) {
			me._image_11__img.src=me._image_11__img.ggDownSrc;
		}
		me._image_11.onmouseup=function (e) {
			if (skin.player.getHasTouch()) {
				me._image_11__img.src = me._image_11__img.ggNormalSrc;
			} else {
				me._image_11__img.src = me._image_11__img.ggOverSrc;
			}
		}
		me._image_11.ggUpdatePosition=function (useTransition) {
		}
		me._menu_story.appendChild(me._image_11);
		me.__div = me._menu_story;
	};
	function SkinHotspotClass_hotspot_1(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._hotspot_1=document.createElement('div');
		el.ggId="Hotspot 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 202px;';
		hs+='position : absolute;';
		hs+='top : 230px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hotspot_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._hotspot_1.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._hotspot_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._node_1=document.createElement('div');
		el.ggId="Node_1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._node_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._node_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_11=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #bdbdbd;';
		hs+='cursor : default;';
		hs+='height : 65px;';
		hs+='left : -7px;';
		hs+='position : absolute;';
		hs+='top : -7px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._rectangle_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_11.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_11.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_11.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_11.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 3000ms ease 0ms';
				if (me._rectangle_11.ggCurrentLogicStateScaling == 0) {
					me._rectangle_11.ggParameter.sx = 1;
					me._rectangle_11.ggParameter.sy = 1;
					me._rectangle_11.style[domTransform]=parameterToTransform(me._rectangle_11.ggParameter);
				}
				else {
					me._rectangle_11.ggParameter.sx = 0.5;
					me._rectangle_11.ggParameter.sy = 0.5;
					me._rectangle_11.style[domTransform]=parameterToTransform(me._rectangle_11.ggParameter);
				}
			}
		}
		me._rectangle_11.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_11.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_11.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_11.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 3000ms ease 0ms';
				if (me._rectangle_11.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rectangle_11.style.opacity == 0.0) { me._rectangle_11.style.visibility="hidden"; } }, 3005);
					me._rectangle_11.style.opacity=0;
				}
				else {
					me._rectangle_11.style.visibility=me._rectangle_11.ggVisible?'inherit':'hidden';
					me._rectangle_11.style.opacity=1;
				}
			}
		}
		me._rectangle_11.ggUpdatePosition=function (useTransition) {
		}
		me._node_1.appendChild(me._rectangle_11);
		el=me._rectangle_21=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #bdbdbd;';
		hs+='cursor : default;';
		hs+='height : 65px;';
		hs+='left : -7px;';
		hs+='position : absolute;';
		hs+='top : -7px;';
		hs+='visibility : inherit;';
		hs+='width : 65px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_21.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_21.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_21.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_21.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 3000ms ease 0ms';
				if (me._rectangle_21.ggCurrentLogicStateScaling == 0) {
					me._rectangle_21.ggParameter.sx = 0.5;
					me._rectangle_21.ggParameter.sy = 0.5;
					me._rectangle_21.style[domTransform]=parameterToTransform(me._rectangle_21.ggParameter);
				}
				else {
					me._rectangle_21.ggParameter.sx = 1;
					me._rectangle_21.ggParameter.sy = 1;
					me._rectangle_21.style[domTransform]=parameterToTransform(me._rectangle_21.ggParameter);
				}
			}
		}
		me._rectangle_21.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_21.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_21.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_21.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 3000ms ease 0ms';
				if (me._rectangle_21.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_21.style.visibility=me._rectangle_21.ggVisible?'inherit':'hidden';
					me._rectangle_21.style.opacity=1;
				}
				else {
					me._rectangle_21.style.visibility=me._rectangle_21.ggVisible?'inherit':'hidden';
					me._rectangle_21.style.opacity=1;
				}
			}
		}
		me._rectangle_21.ggUpdatePosition=function (useTransition) {
		}
		me._node_1.appendChild(me._rectangle_21);
		el=me._nodeimage_1=document.createElement('div');
		els=me._nodeimage_1__img=document.createElement('img');
		els.className='ggskin ggskin_nodeimage';
		els.setAttribute('src',basePath + "images/nodeimage_1_" + nodeId + ".png");
		el.ggNodeId=nodeId;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_nodeimage';
		els['ondragstart']=function() { return false; };
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="NodeImage 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_nodeimage ";
		el.ggType='nodeimage';
		hs ='';
		hs+='height : 50px;';
		hs+='left : 3px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 50px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._nodeimage_1.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			return this.ggNodeId;
		}
		me._nodeimage_1.ggUpdatePosition=function (useTransition) {
		}
		me._node_1.appendChild(me._nodeimage_1);
		me._hotspot_1.appendChild(me._node_1);
		me.__div = me._hotspot_1;
	};
	function SkinHotspotClass_menu_tour(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._menu_tour=document.createElement('div');
		el.ggId="Menu Tour";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 202px;';
		hs+='position : absolute;';
		hs+='top : 230px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._menu_tour.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._menu_tour.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._menu_tour.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._menu_tour.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._menu_tour.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._menu_tour.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image0=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image0.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_10=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._rectangle_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_10.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_10.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_10.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_10.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_10.ggCurrentLogicStateScaling == 0) {
					me._rectangle_10.ggParameter.sx = 1;
					me._rectangle_10.ggParameter.sy = 1;
					me._rectangle_10.style[domTransform]=parameterToTransform(me._rectangle_10.ggParameter);
				}
				else {
					me._rectangle_10.ggParameter.sx = 0.5;
					me._rectangle_10.ggParameter.sy = 0.5;
					me._rectangle_10.style[domTransform]=parameterToTransform(me._rectangle_10.ggParameter);
				}
			}
		}
		me._rectangle_10.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_10.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_10.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_10.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_10.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rectangle_10.style.opacity == 0.0) { me._rectangle_10.style.visibility="hidden"; } }, 505);
					me._rectangle_10.style.opacity=0;
				}
				else {
					me._rectangle_10.style.visibility=me._rectangle_10.ggVisible?'inherit':'hidden';
					me._rectangle_10.style.opacity=1;
				}
			}
		}
		me._rectangle_10.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image0.appendChild(me._rectangle_10);
		el=me._rectangle_20=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_20.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_20.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_20.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_20.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_20.ggCurrentLogicStateScaling == 0) {
					me._rectangle_20.ggParameter.sx = 0.5;
					me._rectangle_20.ggParameter.sy = 0.5;
					me._rectangle_20.style[domTransform]=parameterToTransform(me._rectangle_20.ggParameter);
				}
				else {
					me._rectangle_20.ggParameter.sx = 1;
					me._rectangle_20.ggParameter.sy = 1;
					me._rectangle_20.style[domTransform]=parameterToTransform(me._rectangle_20.ggParameter);
				}
			}
		}
		me._rectangle_20.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_20.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_20.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_20.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_20.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_20.style.visibility=me._rectangle_20.ggVisible?'inherit':'hidden';
					me._rectangle_20.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._rectangle_20.style.opacity == 0.0) { me._rectangle_20.style.visibility="hidden"; } }, 505);
					me._rectangle_20.style.opacity=0;
				}
			}
		}
		me._rectangle_20.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image0.appendChild(me._rectangle_20);
		me._menu_tour.appendChild(me._ht_image0);
		el=me._image_10=document.createElement('div');
		els=me._image_10__img=document.createElement('img');
		els.className='ggskin ggskin_image_10';
		hs=basePath + 'images/image_10.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/image_10__o.png';
		me._image_10__img.ggOverSrc=hs;
		hs=basePath + 'images/image_10__a.png';
		me._image_10__img.ggDownSrc=hs;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 150px;';
		hs+='left : -133px;';
		hs+='position : absolute;';
		hs+='top : -77px;';
		hs+='visibility : inherit;';
		hs+='width : 275px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_10.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me._image_10.onmouseover=function (e) {
			me._image_10__img.src=me._image_10__img.ggOverSrc;
		}
		me._image_10.onmouseout=function (e) {
			me._image_10__img.src=me._image_10__img.ggNormalSrc;
		}
		me._image_10.onmousedown=function (e) {
			me._image_10__img.src=me._image_10__img.ggDownSrc;
		}
		me._image_10.onmouseup=function (e) {
			if (skin.player.getHasTouch()) {
				me._image_10__img.src = me._image_10__img.ggNormalSrc;
			} else {
				me._image_10__img.src = me._image_10__img.ggOverSrc;
			}
		}
		me._image_10.ggUpdatePosition=function (useTransition) {
		}
		me._menu_tour.appendChild(me._image_10);
		me.__div = me._menu_tour;
	};
	function SkinHotspotClass_next(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._next=document.createElement('div');
		el.ggId="Next";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 202px;';
		hs+='position : absolute;';
		hs+='top : 230px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._next.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._next.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._next.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._next.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._next.onmouseout=function (e) {
			player.setActiveHotspot(null);
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._next.ggUpdatePosition=function (useTransition) {
		}
		el=me._ht_image=document.createElement('div');
		el.ggId="ht_image";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -17px;';
		hs+='position : absolute;';
		hs+='top : -17px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._ht_image.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_1.ggParameter.sx = 1;
					me._rectangle_1.ggParameter.sy = 1;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
				else {
					me._rectangle_1.ggParameter.sx = 0.5;
					me._rectangle_1.ggParameter.sy = 0.5;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
			}
		}
		me._rectangle_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rectangle_1.style.opacity == 0.0) { me._rectangle_1.style.visibility="hidden"; } }, 505);
					me._rectangle_1.style.opacity=0;
				}
				else {
					me._rectangle_1.style.visibility=me._rectangle_1.ggVisible?'inherit':'hidden';
					me._rectangle_1.style.opacity=1;
				}
			}
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._rectangle_1);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 2px solid #ffffff;';
		hs+='cursor : default;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateScaling == 0) {
					me._rectangle_2.ggParameter.sx = 0.5;
					me._rectangle_2.ggParameter.sy = 0.5;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
				else {
					me._rectangle_2.ggParameter.sx = 1;
					me._rectangle_2.ggParameter.sy = 1;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
			}
		}
		me._rectangle_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_ani') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 500ms ease 0ms, opacity 500ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_2.style.visibility=me._rectangle_2.ggVisible?'inherit':'hidden';
					me._rectangle_2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._rectangle_2.style.opacity == 0.0) { me._rectangle_2.style.visibility="hidden"; } }, 505);
					me._rectangle_2.style.opacity=0;
				}
			}
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me._ht_image.appendChild(me._rectangle_2);
		me._next.appendChild(me._ht_image);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs=basePath + 'images/image_1__o.png';
		me._image_1__img.ggOverSrc=hs;
		hs=basePath + 'images/image_1__a.png';
		me._image_1__img.ggDownSrc=hs;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='height : 150px;';
		hs+='left : -133px;';
		hs+='position : absolute;';
		hs+='top : -75px;';
		hs+='visibility : inherit;';
		hs+='width : 275px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_1.onmouseover=function (e) {
			me._image_1__img.src=me._image_1__img.ggOverSrc;
		}
		me._image_1.onmouseout=function (e) {
			me._image_1__img.src=me._image_1__img.ggNormalSrc;
		}
		me._image_1.onmousedown=function (e) {
			me._image_1__img.src=me._image_1__img.ggDownSrc;
		}
		me._image_1.onmouseup=function (e) {
			if (skin.player.getHasTouch()) {
				me._image_1__img.src = me._image_1__img.ggNormalSrc;
			} else {
				me._image_1__img.src = me._image_1__img.ggOverSrc;
			}
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		me._next.appendChild(me._image_1);
		me.__div = me._next;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='Menu Story') {
			hotspot.skinid = 'Menu Story';
			hsinst = new SkinHotspotClass_menu_story(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_menu_story_changenode();;
			me.callChildLogicBlocksHotspot_menu_story_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='Hotspot 1') {
			hotspot.skinid = 'Hotspot 1';
			hsinst = new SkinHotspotClass_hotspot_1(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_hotspot_1_changenode();;
			me.callChildLogicBlocksHotspot_hotspot_1_varchanged_ht_ani();;
		} else
		if (hotspot.skinid=='Menu Tour') {
			hotspot.skinid = 'Menu Tour';
			hsinst = new SkinHotspotClass_menu_tour(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_menu_tour_changenode();;
			me.callChildLogicBlocksHotspot_menu_tour_varchanged_ht_ani();;
		} else
		{
			hotspot.skinid = 'Next';
			hsinst = new SkinHotspotClass_next(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_next_changenode();;
			me.callChildLogicBlocksHotspot_next_varchanged_ht_ani();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['Menu Story']) {
			var i;
			for(i = 0; i < hotspotTemplates['Menu Story'].length; i++) {
				hotspotTemplates['Menu Story'][i] = null;
			}
		}
		if(hotspotTemplates['Hotspot 1']) {
			var i;
			for(i = 0; i < hotspotTemplates['Hotspot 1'].length; i++) {
				hotspotTemplates['Hotspot 1'][i] = null;
			}
		}
		if(hotspotTemplates['Menu Tour']) {
			var i;
			for(i = 0; i < hotspotTemplates['Menu Tour'].length; i++) {
				hotspotTemplates['Menu Tour'][i] = null;
			}
		}
		if(hotspotTemplates['Next']) {
			var i;
			for(i = 0; i < hotspotTemplates['Next'].length; i++) {
				hotspotTemplates['Next'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_menu_story_changenode();me.callChildLogicBlocksHotspot_hotspot_1_changenode();me.callChildLogicBlocksHotspot_menu_tour_changenode();me.callChildLogicBlocksHotspot_next_changenode(); });
	player.addListener('varchanged_ht_ani', function(args) { me.callChildLogicBlocksHotspot_menu_story_varchanged_ht_ani();me.callChildLogicBlocksHotspot_hotspot_1_varchanged_ht_ani();me.callChildLogicBlocksHotspot_menu_tour_varchanged_ht_ani();me.callChildLogicBlocksHotspot_next_varchanged_ht_ani(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	me.skinTimerEvent();
};