(globalThis.wpRiseJsonp=globalThis.wpRiseJsonp||[]).push([["defaultVendors-node_modules_pnpm_articulate_design-system_1_27_1__articulate_design-system-to-b7ea07"],{68563(jl){var In="Expected a function",ga=NaN,Oa="[object Symbol]",Rn=/^\s+|\s+$/g,vi=/^[-+]0x[0-9a-f]+$/i,$o=/^0b[01]+$/i,Wr=/^0o[0-7]+$/i,Mn=parseInt,va=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,Ln=typeof self=="object"&&self&&self.Object===Object&&self,jn=va||Ln||Function("return this")(),xe=Object.prototype,ht=xe.toString,Dn=Math.max,fi=Math.min,pt=function(){return jn.Date.now()};function Rt(Tr,fe,fa){var Na,fr,me,ta,Xe,qe,vt=0,On=!1,oa=!1,na=!0;if(typeof Tr!="function")throw new TypeError(In);fe=yo(fe)||0,gt(fa)&&(On=!!fa.leading,oa="maxWait"in fa,me=oa?Dn(yo(fa.maxWait)||0,fe):me,na="trailing"in fa?!!fa.trailing:na);function i(ee){var ma=Na,ft=fr;return Na=fr=void 0,vt=ee,ta=Tr.apply(ft,ma),ta}function s(ee){return vt=ee,Xe=setTimeout(et,fe),On?i(ee):ta}function Mt(ee){var ma=ee-qe,ft=ee-vt,Fn=fe-ma;return oa?fi(Fn,me-ft):Fn}function Lt(ee){var ma=ee-qe,ft=ee-vt;return qe===void 0||ma>=fe||ma<0||oa&&ft>=me}function et(){var ee=pt();if(Lt(ee))return xo(ee);Xe=setTimeout(et,Mt(ee))}function xo(ee){return Xe=void 0,na&&Na?i(ee):(Na=fr=void 0,ta)}function Nn(){Xe!==void 0&&clearTimeout(Xe),vt=0,Na=qe=fr=Xe=void 0}function bi(){return Xe===void 0?ta:xo(pt())}function u(){var ee=pt(),ma=Lt(ee);if(Na=arguments,fr=this,qe=ee,ma){if(Xe===void 0)return s(qe);if(oa)return Xe=setTimeout(et,fe),i(qe)}return Xe===void 0&&(Xe=setTimeout(et,fe)),ta}return u.cancel=Nn,u.flush=bi,u}function gt(Tr){var fe=typeof Tr;return!!Tr&&(fe=="object"||fe=="function")}function Bn(Tr){return!!Tr&&typeof Tr=="object"}function mi(Tr){return typeof Tr=="symbol"||Bn(Tr)&&ht.call(Tr)==Oa}function yo(Tr){if(typeof Tr=="number")return Tr;if(mi(Tr))return ga;if(gt(Tr)){var fe=typeof Tr.valueOf=="function"?Tr.valueOf():Tr;Tr=gt(fe)?fe+"":fe}if(typeof Tr!="string")return Tr===0?Tr:+Tr;Tr=Tr.replace(Rn,"");var fa=$o.test(Tr);return fa||Wr.test(Tr)?Mn(Tr.slice(2),fa?2:8):vi.test(Tr)?ga:+Tr}jl.exports=Rt},51397(jl,In,ga){"use strict";ga.r(In),ga.d(In,{ARC_DROPDOWN_SUBMENU_OMIT_KEYS:()=>Hh,ARC_MENU_DELAY_MS:()=>gl,Arc:()=>ey,ArcAbstractFlexLayouts:()=>fe,ArcAbstractGapSizes:()=>Bn,ArcAbstractIconSizes:()=>gt,ArcAbstractOrientations:()=>fa,ArcAbstractPopoverActions:()=>Rt,ArcAbstractPopoverModes:()=>pt,ArcAbstractTextLayouts:()=>Tr,ArcAbstractTextOverflows:()=>yo,ArcAbstractTextSizes:()=>mi,ArcAvatar:()=>ji,ArcAvatarColors:()=>Yl,ArcAvatarColorsReserved:()=>op,ArcAvatarOverflow:()=>Ev,ArcAvatarOverflowSizes:()=>dp,ArcAvatarPile:()=>Op,ArcAvatarPileSizes:()=>lp,ArcAvatarSizes:()=>np,ArcAvatarText:()=>Wn,ArcAvatarTextGapSizes:()=>cp,ArcAvatarTextOverflows:()=>ip,ArcAvatarTextSizes:()=>sp,ArcBadge:()=>Vv,ArcBadgeColors:()=>jv,ArcBadgeContrasts:()=>Nv,ArcBadgeCount:()=>rf,ArcBadgeCountColors:()=>Dv,ArcBadgeCountContrasts:()=>Zv,ArcBadgeCountShapes:()=>Jv,ArcBadgeCountSizes:()=>qv,ArcBadgeCountVariants:()=>Yv,ArcBadgeLayouts:()=>Ov,ArcBadgeSizes:()=>Bv,ArcBadgeVariants:()=>Fv,ArcBanner:()=>bf,ArcBannerActionPlacements:()=>hf,ArcBannerAlignments:()=>pf,ArcBannerDefaults:()=>ct,ArcBannerDensities:()=>df,ArcBannerLayouts:()=>uf,ArcBannerSchemes:()=>gf,ArcBannerVariants:()=>ff,ArcButton:()=>jr,ArcButtonHierarchies:()=>Ld,ArcButtonLayouts:()=>Dg,ArcButtonPopoverActions:()=>Og,ArcButtonSchemes:()=>as,ArcButtonShadows:()=>Bg,ArcButtonShapes:()=>Lg,ArcButtonSizes:()=>jg,ArcButtonVariants:()=>Md,ArcCheckbox:()=>Zd,ArcCheckboxBar:()=>If,ArcCheckboxBarLayouts:()=>_f,ArcCheckboxBarOption:()=>Tf,ArcCheckboxBarSizes:()=>Pf,ArcCheckboxLayouts:()=>Sf,ArcCheckboxSizes:()=>Af,ArcCheckboxVariants:()=>zf,ArcChip:()=>Wf,ArcChipDefaults:()=>ks,ArcChipSizes:()=>Gf,ArcChipVariants:()=>Vf,ArcColorAllTools:()=>Jf,ArcColorGradientTools:()=>Ec,ArcColorPalette:()=>un,ArcColorPaletteAddFlows:()=>Zf,ArcColorPicker:()=>qa,ArcColorPickerDefaults:()=>Sa,ArcColorPickerModes:()=>Xf,ArcColorPickerPanels:()=>qf,ArcColorSimpleTools:()=>Jd,ArcColorSolidTools:()=>ws,ArcColorSwatch:()=>dn,ArcColorSwatchKinds:()=>Yf,ArcColorValueFormats:()=>uy,ArcDropdownMenu:()=>Qc,ArcIcon:()=>Sr,ArcIconText:()=>le,ArcIconTextVariants:()=>hg,ArcInputAction:()=>Uh,ArcLabel:()=>wt,ArcLabelContent:()=>Ct,ArcLabelLayouts:()=>yf,ArcLink:()=>D$,ArcLinkVariants:()=>j$,ArcModal:()=>o1,ArcModalAlert:()=>c1,ArcModalAlertDefaults:()=>Za,ArcModalAlertVariants:()=>F$,ArcModalBackdropColors:()=>H$,ArcModalBodyPaddings:()=>V$,ArcModalCloseReasons:()=>U$,ArcModalCommonDefaults:()=>je,ArcModalCommonVariants:()=>O$,ArcModalConfirm:()=>Jh,ArcModalConfirmDefaults:()=>ut,ArcModalConfirmVariants:()=>N$,ArcModalSchemes:()=>B$,ArcModalSizes:()=>G$,ArcPopover:()=>ka,ArcPopoverActions:()=>Np,ArcPopoverAnchors:()=>Oi,ArcPopoverBoundaries:()=>Ni,ArcPopoverButton:()=>No,ArcPopoverDefaults:()=>Ve,ArcPopoverDensities:()=>ld,ArcPopoverModes:()=>Di,ArcPopoverSchemes:()=>Bi,ArcPopoverVariants:()=>sd,ArcPopoverVariantsWithOutline:()=>Fp,ArcRadio:()=>zh,ArcRadioBar:()=>_h,ArcRadioBarLayouts:()=>Mb,ArcRadioBarOption:()=>Eh,ArcRadioBarSizes:()=>Lb,ArcRadioLayouts:()=>Tb,ArcRadioSizes:()=>Ib,ArcSVGGradientDef:()=>ed,ArcSearch:()=>i0,ArcSearchLayouts:()=>k1,ArcSearchSizes:()=>w1,ArcSearchVariants:()=>C1,ArcSelect:()=>j1,ArcSelectLayouts:()=>E1,ArcSelectSizes:()=>_1,ArcSelectVariants:()=>P1,ArcSlider:()=>ul,ArcSliderLabelPlacements:()=>Cb,ArcSliderLayouts:()=>xb,ArcSliderSizes:()=>kb,ArcSliderVariants:()=>wb,ArcSwitch:()=>N1,ArcSwitchLabelPositions:()=>go,ArcSwitchSizes:()=>D1,ArcSwitchStates:()=>ve,ArcSystemAIGradients:()=>Dn,ArcSystemAlignments:()=>Ln,ArcSystemColors:()=>ht,ArcSystemGradients:()=>fi,ArcSystemHierarchies:()=>Mn,ArcSystemLayouts:()=>va,ArcSystemLineHeights:()=>jn,ArcSystemSchemes:()=>Oa,ArcSystemShadows:()=>Rn,ArcSystemShapes:()=>$o,ArcSystemSizes:()=>xe,ArcSystemSurfaces:()=>vi,ArcSystemVariants:()=>Wr,ArcTextAlignments:()=>q1,ArcTextBodyElements:()=>f0,ArcTextBodySizes:()=>W1,ArcTextBodyVariants:()=>X1,ArcTextElements:()=>m0,ArcTextHeadingElements:()=>v0,ArcTextHeadingSizes:()=>G1,ArcTextHeadingVariants:()=>K1,ArcTextInput:()=>io,ArcTextInputLayouts:()=>mb,ArcTextInputSizes:()=>bb,ArcTextInputTypes:()=>yb,ArcTextInputVariants:()=>$b,ArcTextKinds:()=>F1,ArcTextLineHeights:()=>Y1,ArcTextSchemes:()=>H1,ArcTextSubheadingSizes:()=>U1,ArcTextTitleSizes:()=>V1,ArcToast:()=>M0,ArcToastDefaults:()=>E0,ArcToastPlacements:()=>z0,ArcToastPopoverActions:()=>ty,ArcToastPopoverModes:()=>A0,ArcToastProgressBarVariants:()=>oy,ArcToastSchemes:()=>k0,ArcToastSeverities:()=>w0,ArcToastSizes:()=>C0,ArcToastVariants:()=>S0,ArcTooltip:()=>sc,ArcTooltipDefaults:()=>$a,COLOR_DEFAULTS:()=>Ue,DEFAULT_COLOR_PICKER_LABELS:()=>ra,DeprecatedButtonVariants:()=>ts,EPS_LOOSE:()=>Jo,EPS_MID:()=>Pc,EPS_STRICT:()=>Cs,GRADIENT_DEFAULTS:()=>Q,IS_FLOATING:()=>dd,SLIDER_TOKENS:()=>vh,SLIDER_TOKENS_REGEX:()=>fh,SVGLogoArticulate:()=>zi,SVGLogoProductAI:()=>Ei,SVGLogoProductPeek:()=>_i,SVGLogoProductReach:()=>Pi,SVGLogoProductReview:()=>Ti,SVGLogoProductRise:()=>Ii,SVGLogoProductStoryline:()=>Ri,SVGLogoProductStudio:()=>Mi,StorageType:()=>Pn,adoptStyles:()=>Cr,adoptThemeTokens:()=>rp,anchorNameRegistry:()=>Po,appendGradientStop:()=>Eu,appendUniqueColorValue:()=>lm,arcGradientsEqual:()=>on,arcGradientsSemanticEqual:()=>st,arcGradientsVisuallyEqual:()=>Fs,assignRef:()=>ta,bindDelegatedEvents:()=>Td,buildDefaultGradientStops:()=>ku,buildStopFieldBackground:()=>Tu,canonicalizeToHsv:()=>jc,clamp:()=>Xe,clampIt:()=>Y,colorValueEquals:()=>eo,compositeRgbaOver:()=>Ic,computeEvenlyDistributedStopAt:()=>Cu,computeNextStopAt:()=>Hs,computeStopAtBetween:()=>nn,createEmptyRect:()=>hy,css:()=>u,cssFeatures:()=>Xn,decodeDeprecatedButtonVariant:()=>Vg,didElementRectChange:()=>On,distributeGradientStopPositions:()=>Su,encodeDeprecatedButtonVariant:()=>Gg,expandHex3To6:()=>Ts,expandShortHex:()=>Ps,extractTextFromReactNode:()=>Eo,formatAlphaCss:()=>Mc,formatAlphaPercent:()=>Zt,formatAnchorName:()=>Hi,getArcColorAs:()=>bu,getArcColorData:()=>it,getArcColorParts:()=>mu,getArcColorValue:()=>Ds,getArcContrastColor:()=>ao,getArcGradientData:()=>cn,getArcGradientMeridianColor:()=>Dc,getColorName:()=>Lc,getCssColor:()=>Lr,getElementByIdScoped:()=>na,getGradientName:()=>_u,getGradientStopKeyboardDelta:()=>Lu,getPlainLabel:()=>h0,getPreferredAnchorForTooltipId:()=>rs,getResolvedHierarchy:()=>Od,getResolvedScheme:()=>Nd,getResolvedShape:()=>jd,getResolvedVariant:()=>Bd,getSelectedColorMeta:()=>Os,getShadowRootOrDocument:()=>oa,getSortedStopEntries:()=>Ca,getSvgGradientCoords:()=>rd,handlePopover:()=>pd,handleToast:()=>_0,hasBaseSelectSupport:()=>s0,hasEmptyValueOption:()=>u0,hasMatchingColorValue:()=>Bs,hasNativeAnchorPositioning:()=>Fi,hexAfterChannelNudge:()=>vu,hslToRgbaData:()=>ou,hsvDeltaOK:()=>an,hsvToRgbaData:()=>Ie,interpolateGradientStopColor:()=>Au,isArcColorGradient:()=>Yr,isArcColorPickerGradientChange:()=>Qf,isArcColorPickerSolidChange:()=>ru,isArcColorSwatchGradientDetails:()=>Qd,isDeprecatedButtonVariant:()=>os,isDifferent:()=>qe,isGroupLegendItem:()=>l0,isHexLike:()=>hu,isHsvLike:()=>gu,isObject:()=>Ql,isRgbaLike:()=>pu,isSame:()=>vt,isSelectGroup:()=>ii,isSelectedColorMatch:()=>xu,isString:()=>Ot,joinArray:()=>_o,logError:()=>ig,logMessage:()=>cg,logSkippedTopLevelItem:()=>d0,logWarning:()=>xd,makeHtmlId:()=>vp,makeRandomColor:()=>tn,mapDeprecated:()=>Na,mergeRgbaFromHexDraft:()=>uu,noTailAnchors:()=>ud,noop:()=>Gs,normalizeAnchorName:()=>To,normalizeByte:()=>he,normalizeColorValue:()=>ro,normalizeHexInput:()=>Ua,normalizeHue:()=>Tc,normalizeUnit:()=>tu,oklchToRgbaData:()=>iu,parseAlphaInput:()=>lu,parseByte:()=>Qo,parseCssColorToRgba:()=>Gr,parseHexStringToRgba:()=>du,percentsFromValue:()=>Ss,pickFromList:()=>fr,pickFromListByKeys:()=>me,relativeLuminance:()=>su,renderableOption:()=>po,resolveColorPickerLabels:()=>_c,resolveGradientAngleFromPointerDrag:()=>Ru,resolveGradientData:()=>Pu,resolveGradientStopAtFromPointer:()=>Iu,resolveInsertedGradientStop:()=>zu,resolvePointerAngleDeg:()=>Vs,resolveTailMetrics:()=>hd,rgbaBytesEqual:()=>zs,rgbaDeltaOK:()=>Rc,rgbaEchoDeltaOK:()=>Es,rgbaToHslData:()=>nu,rgbaToHsvData:()=>rn,rgbaToOklchData:()=>cu,roundGradientStopsForCommit:()=>At,roundIt:()=>wa,shareAdoptedStyles:()=>Q0,shouldSortStopAtAdjacent:()=>hm,shouldSortStopAtNeighborPositions:()=>Ns,snapGradientAngle:()=>Mu,snapIt:()=>au,snapToStep:()=>yh,sortGradientStops:()=>wu,splitString:()=>yd,stepGradientAngleBySnap:()=>gm,stepToNextSnap:()=>xh,syncAnchorName:()=>gd,toHEX:()=>Re,toHSL:()=>Ls,toLinearChannel:()=>St,toLinearGradientCss:()=>Wa,toOKLCH:()=>js,toOpaqueRgbHexNoHash:()=>Qt,toPx:()=>Io,toRGB:()=>Ka,unbindDelegatedEvents:()=>zg,useIsoLayoutEffect:()=>tt,useShiftSnap:()=>kh,useStableId:()=>Br,useStorage:()=>dy});const Oa=["auto","light","dark","inverse"],Rn=["none","sm","md","lg","xl"],vi=["primary","secondary","inset","raised","floating"],$o=["circle","round","pill","square","narrow"],Wr=["inherit","common","disabled","neutral","outline","solid","plain","critical","ai","alpha","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","error","processing"],Mn=["primary","secondary","tertiary","plain","link-style"],va=["hug","fill","icon","gutter","inline"],Ln=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],jn=["inherit","tight","standard","loose"],xe=["inherit","xxl","xl","lg","md","sm","xs","xxs","custom","fullscreen"],ht=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black","mono","mono-inverse","overlay-light","overlay-dark","ai","brand"],Dn=["ai","ai-50","ai-100","ai-200","ai-300","ai-400","ai-500","ai-600"],fi=[...Dn],pt=["","auto","manual"],Rt=["toggle","show","hide"],gt=["inherit","xl","lg","md","sm","xs"],Bn=["inherit","lg","md","sm"],mi=["inherit","md","sm"],yo=["inherit","wrap","truncate"],Tr=["gutter","inline"],fe=["hug","fill"],fa=["horizontal","vertical"],Na=(r,e)=>e[r]||r,fr=(r,e)=>r.filter(a=>e.includes(a)),me=(r,e)=>e.filter(a=>r.includes(a)),ta=(r,e)=>{r&&(typeof r=="function"?r(e):r.current=e)},Xe=(r,e=0,a=100)=>Math.min(Math.max(r,e),a),qe=(r,e)=>r!==e,vt=(r,e)=>r===e,On=({a:r,b:e})=>qe(r?.top,e?.top)||qe(r?.left,e?.left)||qe(r?.width,e?.width)||qe(r?.height,e?.height);function oa(r){if(!(r instanceof Node))return null;const e=r.getRootNode();return e instanceof ShadowRoot||e instanceof Document?e:null}function na(r,e){if(typeof document>"u")return null;const a=e==null?document:oa(e)??document,t=a.getElementById(r);return t||(a!==document?document.getElementById(r):null)}var i=ga(69838),s=ga(82920);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Mt=globalThis,Lt=Mt.ShadowRoot&&(Mt.ShadyCSS===void 0||Mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,et=Symbol(),xo=new WeakMap;class Nn{constructor(e,a,t){if(this._$cssResult$=!0,t!==et)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=a}get styleSheet(){let e=this.o;const a=this.t;if(Lt&&e===void 0){const t=a!==void 0&&a.length===1;t&&(e=xo.get(a)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&xo.set(a,e))}return e}toString(){return this.cssText}}const bi=r=>new Nn(typeof r=="string"?r:r+"",void 0,et),u=(r,...e)=>{const a=r.length===1?r[0]:e.reduce(((t,o,n)=>t+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[n+1]),r[0]);return new Nn(a,r,et)},ee=(r,e)=>{if(Lt)r.adoptedStyleSheets=e.map((a=>a instanceof CSSStyleSheet?a:a.styleSheet));else for(const a of e){const t=document.createElement("style"),o=Mt.litNonce;o!==void 0&&t.setAttribute("nonce",o),t.textContent=a.cssText,r.appendChild(t)}},ma=Lt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let a="";for(const t of e.cssRules)a+=t.cssText;return bi(a)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ft,defineProperty:Fn,getOwnPropertyDescriptor:L0,getOwnPropertyNames:j0,getOwnPropertySymbols:D0,getPrototypeOf:B0}=Object,Hn=globalThis,Dl=Hn.trustedTypes,O0=Dl?Dl.emptyScript:"",N0=Hn.reactiveElementPolyfillSupport,ko=(r,e)=>r,$i={toAttribute(r,e){switch(e){case Boolean:r=r?O0:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let a=r;switch(e){case Boolean:a=r!==null;break;case Number:a=r===null?null:Number(r);break;case Object:case Array:try{a=JSON.parse(r)}catch{a=null}}return a}},Bl=(r,e)=>!ft(r,e),Ol={attribute:!0,type:String,converter:$i,reflect:!1,useDefault:!1,hasChanged:Bl};Symbol.metadata??=Symbol("metadata"),Hn.litPropertyMetadata??=new WeakMap;class jt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,a=Ol){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(e,a),!a.noAccessor){const t=Symbol(),o=this.getPropertyDescriptor(e,t,a);o!==void 0&&Fn(this.prototype,e,o)}}static getPropertyDescriptor(e,a,t){const{get:o,set:n}=L0(this.prototype,e)??{get(){return this[a]},set(c){this[a]=c}};return{get:o,set(c){const l=o?.call(this);n?.call(this,c),this.requestUpdate(e,l,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ol}static _$Ei(){if(this.hasOwnProperty(ko("elementProperties")))return;const e=B0(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(ko("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(ko("properties"))){const a=this.properties,t=[...j0(a),...D0(a)];for(const o of t)this.createProperty(o,a[o])}const e=this[Symbol.metadata];if(e!==null){const a=litPropertyMetadata.get(e);if(a!==void 0)for(const[t,o]of a)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[a,t]of this.elementProperties){const o=this._$Eu(a,t);o!==void 0&&this._$Eh.set(o,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const a=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const o of t)a.unshift(ma(o))}else e!==void 0&&a.push(ma(e));return a}static _$Eu(e,a){const t=a.attribute;return t===!1?void 0:typeof t=="string"?t:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,a=this.constructor.elementProperties;for(const t of a.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return ee(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,a,t){this._$AK(e,t)}_$ET(e,a){const t=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,t);if(o!==void 0&&t.reflect===!0){const n=(t.converter?.toAttribute!==void 0?t.converter:$i).toAttribute(a,t.type);this._$Em=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,a){const t=this.constructor,o=t._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const n=t.getPropertyOptions(o),c=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:$i;this._$Em=o;const l=c.fromAttribute(a,n.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(e,a,t){if(e!==void 0){const o=this.constructor,n=this[e];if(t??=o.getPropertyOptions(e),!((t.hasChanged??Bl)(n,a)||t.useDefault&&t.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,t))))return;this.C(e,a,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,a,{useDefault:t,reflect:o,wrapped:n},c){t&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,c??a??this[e]),n!==!0||c!==void 0)||(this._$AL.has(e)||(this.hasUpdated||t||(a=void 0),this._$AL.set(e,a)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[o,n]of t){const{wrapped:c}=n,l=this[o];c!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(a)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(a)}willUpdate(e){}_$AE(e){this._$EO?.forEach((a=>a.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((a=>this._$ET(a,this[a]))),this._$EM()}updated(e){}firstUpdated(e){}}jt.elementStyles=[],jt.shadowRootOptions={mode:"open"},jt[ko("elementProperties")]=new Map,jt[ko("finalized")]=new Map,N0?.({ReactiveElement:jt}),(Hn.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const yi=globalThis,Vn=yi.trustedTypes,Nl=Vn?Vn.createPolicy("lit-html",{createHTML:r=>r}):void 0,Fl="$lit$",at=`lit$${Math.random().toFixed(9).slice(2)}$`,Hl="?"+at,F0=`<${Hl}>`,mt=document,wo=()=>mt.createComment(""),Co=r=>r===null||typeof r!="object"&&typeof r!="function",xi=Array.isArray,H0=r=>xi(r)||typeof r?.[Symbol.iterator]=="function",ki=`[ 	
\f\r]`,So=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Vl=/-->/g,Gl=/>/g,bt=RegExp(`>|${ki}(?:([^\\s"'>=/]+)(${ki}*=${ki}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),Ul=/'/g,Kl=/"/g,Wl=/^(?:script|style|textarea|title)$/i,wi=r=>(e,...a)=>({_$litType$:r,strings:e,values:a}),py=wi(1),gy=wi(2),vy=wi(3),Dt=Symbol.for("lit-noChange"),ie=Symbol.for("lit-nothing"),Xl=new WeakMap,$t=mt.createTreeWalker(mt,129);function ql(r,e){if(!xi(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return Nl!==void 0?Nl.createHTML(e):e}const V0=(r,e)=>{const a=r.length-1,t=[];let o,n=e===2?"<svg>":e===3?"<math>":"",c=So;for(let l=0;l<a;l++){const d=r[l];let h,p,v=-1,g=0;for(;g<d.length&&(c.lastIndex=g,p=c.exec(d),p!==null);)g=c.lastIndex,c===So?p[1]==="!--"?c=Vl:p[1]!==void 0?c=Gl:p[2]!==void 0?(Wl.test(p[2])&&(o=RegExp("</"+p[2],"g")),c=bt):p[3]!==void 0&&(c=bt):c===bt?p[0]===">"?(c=o??So,v=-1):p[1]===void 0?v=-2:(v=c.lastIndex-p[2].length,h=p[1],c=p[3]===void 0?bt:p[3]==='"'?Kl:Ul):c===Kl||c===Ul?c=bt:c===Vl||c===Gl?c=So:(c=bt,o=void 0);const f=c===bt&&r[l+1].startsWith("/>")?" ":"";n+=c===So?d+F0:v>=0?(t.push(h),d.slice(0,v)+Fl+d.slice(v)+at+f):d+at+(v===-2?l:f)}return[ql(r,n+(r[a]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),t]};class Ao{constructor({strings:e,_$litType$:a},t){let o;this.parts=[];let n=0,c=0;const l=e.length-1,d=this.parts,[h,p]=V0(e,a);if(this.el=Ao.createElement(h,t),$t.currentNode=this.el.content,a===2||a===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(o=$t.nextNode())!==null&&d.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const v of o.getAttributeNames())if(v.endsWith(Fl)){const g=p[c++],f=o.getAttribute(v).split(at),m=/([.?@])?(.*)/.exec(g);d.push({type:1,index:n,name:m[2],strings:f,ctor:m[1]==="."?U0:m[1]==="?"?K0:m[1]==="@"?W0:Gn}),o.removeAttribute(v)}else v.startsWith(at)&&(d.push({type:6,index:n}),o.removeAttribute(v));if(Wl.test(o.tagName)){const v=o.textContent.split(at),g=v.length-1;if(g>0){o.textContent=Vn?Vn.emptyScript:"";for(let f=0;f<g;f++)o.append(v[f],wo()),$t.nextNode(),d.push({type:2,index:++n});o.append(v[g],wo())}}}else if(o.nodeType===8)if(o.data===Hl)d.push({type:2,index:n});else{let v=-1;for(;(v=o.data.indexOf(at,v+1))!==-1;)d.push({type:7,index:n}),v+=at.length-1}n++}}static createElement(e,a){const t=mt.createElement("template");return t.innerHTML=e,t}}function Bt(r,e,a=r,t){if(e===Dt)return e;let o=t!==void 0?a._$Co?.[t]:a._$Cl;const n=Co(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),n===void 0?o=void 0:(o=new n(r),o._$AT(r,a,t)),t!==void 0?(a._$Co??=[])[t]=o:a._$Cl=o),o!==void 0&&(e=Bt(r,o._$AS(r,e.values),o,t)),e}class G0{constructor(e,a){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:a},parts:t}=this._$AD,o=(e?.creationScope??mt).importNode(a,!0);$t.currentNode=o;let n=$t.nextNode(),c=0,l=0,d=t[0];for(;d!==void 0;){if(c===d.index){let h;d.type===2?h=new zo(n,n.nextSibling,this,e):d.type===1?h=new d.ctor(n,d.name,d.strings,this,e):d.type===6&&(h=new X0(n,this,e)),this._$AV.push(h),d=t[++l]}c!==d?.index&&(n=$t.nextNode(),c++)}return $t.currentNode=mt,o}p(e){let a=0;for(const t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(e,t,a),a+=t.strings.length-2):t._$AI(e[a])),a++}}class zo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,a,t,o){this.type=2,this._$AH=ie,this._$AN=void 0,this._$AA=e,this._$AB=a,this._$AM=t,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&e?.nodeType===11&&(e=a.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,a=this){e=Bt(this,e,a),Co(e)?e===ie||e==null||e===""?(this._$AH!==ie&&this._$AR(),this._$AH=ie):e!==this._$AH&&e!==Dt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):H0(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==ie&&Co(this._$AH)?this._$AA.nextSibling.data=e:this.T(mt.createTextNode(e)),this._$AH=e}$(e){const{values:a,_$litType$:t}=e,o=typeof t=="number"?this._$AC(e):(t.el===void 0&&(t.el=Ao.createElement(ql(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===o)this._$AH.p(a);else{const n=new G0(o,this),c=n.u(this.options);n.p(a),this.T(c),this._$AH=n}}_$AC(e){let a=Xl.get(e.strings);return a===void 0&&Xl.set(e.strings,a=new Ao(e)),a}k(e){xi(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let t,o=0;for(const n of e)o===a.length?a.push(t=new zo(this.O(wo()),this.O(wo()),this,this.options)):t=a[o],t._$AI(n),o++;o<a.length&&(this._$AR(t&&t._$AB.nextSibling,o),a.length=o)}_$AR(e=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class Gn{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,a,t,o,n){this.type=1,this._$AH=ie,this._$AN=void 0,this.element=e,this.name=a,this._$AM=o,this.options=n,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=ie}_$AI(e,a=this,t,o){const n=this.strings;let c=!1;if(n===void 0)e=Bt(this,e,a,0),c=!Co(e)||e!==this._$AH&&e!==Dt,c&&(this._$AH=e);else{const l=e;let d,h;for(e=n[0],d=0;d<n.length-1;d++)h=Bt(this,l[t+d],a,d),h===Dt&&(h=this._$AH[d]),c||=!Co(h)||h!==this._$AH[d],h===ie?e=ie:e!==ie&&(e+=(h??"")+n[d+1]),this._$AH[d]=h}c&&!o&&this.j(e)}j(e){e===ie?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class U0 extends Gn{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===ie?void 0:e}}class K0 extends Gn{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==ie)}}class W0 extends Gn{constructor(e,a,t,o,n){super(e,a,t,o,n),this.type=5}_$AI(e,a=this){if((e=Bt(this,e,a,0)??ie)===Dt)return;const t=this._$AH,o=e===ie&&t!==ie||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,n=e!==ie&&(t===ie||o);o&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class X0{constructor(e,a,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=a,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){Bt(this,e)}}const fy=null,q0=yi.litHtmlPolyfillSupport;q0?.(Ao,zo),(yi.litHtmlVersions??=[]).push("3.3.1");const Y0=(r,e,a)=>{const t=a?.renderBefore??e;let o=t._$litPart$;if(o===void 0){const n=a?.renderBefore??null;t._$litPart$=o=new zo(e.insertBefore(wo(),n),n,void 0,a??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ci=globalThis;class Un extends jt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Y0(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Dt}}Un._$litElement$=!0,Un.finalized=!0,Ci.litElementHydrateSupport?.({LitElement:Un});const Z0=Ci.litElementPolyfillSupport;Z0?.({LitElement:Un});const my=null;(Ci.litElementVersions??=[]).push("4.2.1");const J0=`@charset "UTF-8";
@layer arc-theme, arc-components, arc-utils;
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-color-mono-black: #000000;
    --arc-color-mono-white: #ffffff;
    --arc-color-light-neutral-0: #ffffff;
    --arc-color-light-neutral-50: #f7f7f7;
    --arc-color-light-neutral-100: #ededed;
    --arc-color-light-neutral-200: #e6e6e6;
    --arc-color-light-neutral-300: #c6c6c6;
    --arc-color-light-neutral-400: #b0b0b0;
    --arc-color-light-neutral-500: #9b9b9b;
    --arc-color-light-neutral-600: #737373;
    --arc-color-light-neutral-700: #636363;
    --arc-color-light-neutral-800: #4b4b4b;
    --arc-color-light-neutral-900: #212121;
    --arc-color-light-neutral-1000: #000000;
    --arc-color-light-blue-50: #f0fbff;
    --arc-color-light-blue-100: #ddf4fd;
    --arc-color-light-blue-200: #99e4ff;
    --arc-color-light-blue-300: #53d1ff;
    --arc-color-light-blue-400: #00aff0;
    --arc-color-light-blue-500: #0098eb;
    --arc-color-light-blue-600: #0075cf;
    --arc-color-light-blue-700: #0065b2;
    --arc-color-light-blue-800: #005394;
    --arc-color-light-blue-900: #00335b;
    --arc-color-light-purple-50: #f1f0ff;
    --arc-color-light-purple-100: #e9e7fe;
    --arc-color-light-purple-200: #b2a8ff;
    --arc-color-light-purple-300: #9789fa;
    --arc-color-light-purple-400: #8676ff;
    --arc-color-light-purple-500: #7565f1;
    --arc-color-light-purple-600: #4e3bd5;
    --arc-color-light-purple-700: #3120b4;
    --arc-color-light-purple-800: #16068e;
    --arc-color-light-purple-900: #0c0064;
    --arc-color-light-mint-50: #f0fff9;
    --arc-color-light-mint-100: #d9fdef;
    --arc-color-light-mint-200: #9df1d1;
    --arc-color-light-mint-300: #6de3b6;
    --arc-color-light-mint-400: #44bf90;
    --arc-color-light-mint-500: #0f9f68;
    --arc-color-light-mint-600: #008451;
    --arc-color-light-mint-700: #006e44;
    --arc-color-light-mint-800: #005937;
    --arc-color-light-mint-900: #00442a;
    --arc-color-light-orange-50: #fff6f0;
    --arc-color-light-orange-100: #fdeadd;
    --arc-color-light-orange-200: #fac39e;
    --arc-color-light-orange-300: #fd9e5e;
    --arc-color-light-orange-400: #ff6602;
    --arc-color-light-orange-500: #e95d00;
    --arc-color-light-orange-600: #c24e00;
    --arc-color-light-orange-700: #a84300;
    --arc-color-light-orange-800: #933b00;
    --arc-color-light-orange-900: #662900;
    --arc-color-light-maroon-50: #ffeff3;
    --arc-color-light-maroon-100: #fedde5;
    --arc-color-light-maroon-200: #ffa8be;
    --arc-color-light-maroon-300: #fe8fab;
    --arc-color-light-maroon-400: #f27195;
    --arc-color-light-maroon-500: #e05580;
    --arc-color-light-maroon-600: #c73868;
    --arc-color-light-maroon-700: #aa1a53;
    --arc-color-light-maroon-800: #841a42;
    --arc-color-light-maroon-900: #5d132d;
    --arc-color-light-green-50: #f6fff0;
    --arc-color-light-green-100: #e7fdd9;
    --arc-color-light-green-200: #bfeea0;
    --arc-color-light-green-300: #8dd65c;
    --arc-color-light-green-400: #74bb44;
    --arc-color-light-green-500: #57a225;
    --arc-color-light-green-600: #358201;
    --arc-color-light-green-700: #2c6d00;
    --arc-color-light-green-800: #235800;
    --arc-color-light-green-900: #1b4300;
    --arc-color-light-yellow-50: #fffaf0;
    --arc-color-light-yellow-100: #fdf2dd;
    --arc-color-light-yellow-200: #ffdb94;
    --arc-color-light-yellow-300: #ffc960;
    --arc-color-light-yellow-400: #ffb629;
    --arc-color-light-yellow-500: #eb9b00;
    --arc-color-light-yellow-600: #9e6900;
    --arc-color-light-yellow-700: #805400;
    --arc-color-light-yellow-800: #604000;
    --arc-color-light-yellow-900: #3e2900;
    --arc-color-light-red-50: #fff0f0;
    --arc-color-light-red-100: #fde2e2;
    --arc-color-light-red-200: #ff9999;
    --arc-color-light-red-300: #ff6161;
    --arc-color-light-red-400: #ff0000;
    --arc-color-light-red-500: #eb0000;
    --arc-color-light-red-600: #b80000;
    --arc-color-light-red-700: #990000;
    --arc-color-light-red-800: #7a0000;
    --arc-color-light-red-900: #520000;
    --arc-color-dark-neutral-0: #000000;
    --arc-color-dark-neutral-50: #1c1c1c;
    --arc-color-dark-neutral-100: #2a2a2a;
    --arc-color-dark-neutral-200: #3d3d3d;
    --arc-color-dark-neutral-300: #515151;
    --arc-color-dark-neutral-400: #666666;
    --arc-color-dark-neutral-500: #7b7b7b;
    --arc-color-dark-neutral-600: #939393;
    --arc-color-dark-neutral-700: #aeaeae;
    --arc-color-dark-neutral-800: #d0d0d0;
    --arc-color-dark-neutral-900: #ededed;
    --arc-color-dark-neutral-1000: #ffffff;
    --arc-color-dark-blue-50: #002542;
    --arc-color-dark-blue-100: #093a63;
    --arc-color-dark-blue-200: #0f4d7a;
    --arc-color-dark-blue-300: #146192;
    --arc-color-dark-blue-400: #1974aa;
    --arc-color-dark-blue-500: #1e88c7;
    --arc-color-dark-blue-600: #0ca1f7;
    --arc-color-dark-blue-700: #3ab1f5;
    --arc-color-dark-blue-800: #70cbfa;
    --arc-color-dark-blue-900: #b9e6fd;
    --arc-color-dark-purple-50: #161041;
    --arc-color-dark-purple-100: #221c5a;
    --arc-color-dark-purple-200: #2d2773;
    --arc-color-dark-purple-300: #39328c;
    --arc-color-dark-purple-400: #463da6;
    --arc-color-dark-purple-500: #5449c0;
    --arc-color-dark-purple-600: #6556da;
    --arc-color-dark-purple-700: #7a6ef0;
    --arc-color-dark-purple-800: #a193f9;
    --arc-color-dark-purple-900: #d3c9ff;
    --arc-color-dark-mint-50: #04291b;
    --arc-color-dark-mint-100: #0b3425;
    --arc-color-dark-mint-200: #134434;
    --arc-color-dark-mint-300: #1b5444;
    --arc-color-dark-mint-400: #246554;
    --arc-color-dark-mint-500: #2f7766;
    --arc-color-dark-mint-600: #14b290;
    --arc-color-dark-mint-700: #52a895;
    --arc-color-dark-mint-800: #84d0bd;
    --arc-color-dark-mint-900: #d6fff2;
    --arc-color-dark-orange-50: #251104;
    --arc-color-dark-orange-100: #3a1a08;
    --arc-color-dark-orange-200: #50240d;
    --arc-color-dark-orange-300: #672f14;
    --arc-color-dark-orange-400: #7f3c1d;
    --arc-color-dark-orange-500: #984b27;
    --arc-color-dark-orange-600: #d55913;
    --arc-color-dark-orange-700: #d1764d;
    --arc-color-dark-orange-800: #eba883;
    --arc-color-dark-orange-900: #ffdcc9;
    --arc-color-dark-maroon-50: #2a0914;
    --arc-color-dark-maroon-100: #40101f;
    --arc-color-dark-maroon-200: #56162b;
    --arc-color-dark-maroon-300: #6c1e39;
    --arc-color-dark-maroon-400: #822647;
    --arc-color-dark-maroon-500: #993057;
    --arc-color-dark-maroon-600: #b13d69;
    --arc-color-dark-maroon-700: #d05886;
    --arc-color-dark-maroon-800: #e891b5;
    --arc-color-dark-maroon-900: #ffd6e7;
    --arc-color-dark-green-50: #132904;
    --arc-color-dark-green-100: #1b340a;
    --arc-color-dark-green-200: #264411;
    --arc-color-dark-green-300: #31551a;
    --arc-color-dark-green-400: #3e6625;
    --arc-color-dark-green-500: #4c7831;
    --arc-color-dark-green-600: #55a722;
    --arc-color-dark-green-700: #72a65b;
    --arc-color-dark-green-800: #a0d092;
    --arc-color-dark-green-900: #e2fcd9;
    --arc-color-dark-yellow-50: #2e2005;
    --arc-color-dark-yellow-100: #3a2907;
    --arc-color-dark-yellow-200: #51390d;
    --arc-color-dark-yellow-300: #684a14;
    --arc-color-dark-yellow-400: #7f5c1c;
    --arc-color-dark-yellow-500: #976f25;
    --arc-color-dark-yellow-600: #d99d0f;
    --arc-color-dark-yellow-700: #d1a049;
    --arc-color-dark-yellow-800: #eccc86;
    --arc-color-dark-yellow-900: #fff7d9;
    --arc-color-dark-red-50: #250404;
    --arc-color-dark-red-100: #3a0809;
    --arc-color-dark-red-200: #500d0e;
    --arc-color-dark-red-300: #671416;
    --arc-color-dark-red-400: #7e1d1f;
    --arc-color-dark-red-500: #97292b;
    --arc-color-dark-red-600: #d4423f;
    --arc-color-dark-red-700: #d86466;
    --arc-color-dark-red-800: #e88987;
    --arc-color-dark-red-900: #ffd6d6;
    --arc-color-alpha-black-0: rgb(0 0 0 / 0%);
    --arc-color-alpha-black-3: rgb(0 0 0 / 3%);
    --arc-color-alpha-black-5: rgb(0 0 0 / 5%);
    --arc-color-alpha-black-7: rgb(0 0 0 / 7%);
    --arc-color-alpha-black-10: rgb(0 0 0 / 10%);
    --arc-color-alpha-black-15: rgb(0 0 0 / 15%);
    --arc-color-alpha-black-20: rgb(0 0 0 / 20%);
    --arc-color-alpha-black-25: rgb(0 0 0 / 25%);
    --arc-color-alpha-black-30: rgb(0 0 0 / 30%);
    --arc-color-alpha-black-40: rgb(0 0 0 / 40%);
    --arc-color-alpha-black-50: rgb(0 0 0 / 50%);
    --arc-color-alpha-black-60: rgb(0 0 0 / 60%);
    --arc-color-alpha-black-70: rgb(0 0 0 / 70%);
    --arc-color-alpha-black-80: rgb(0 0 0 / 80%);
    --arc-color-alpha-black-90: rgb(0 0 0 / 90%);
    --arc-color-alpha-black-95: rgb(0 0 0 / 95%);
    --arc-color-alpha-black-100: rgb(0 0 0 / 100%);
    --arc-color-alpha-white-0: rgb(255 255 255 / 0%);
    --arc-color-alpha-white-3: rgb(255 255 255 / 3%);
    --arc-color-alpha-white-5: rgb(255 255 255 / 5%);
    --arc-color-alpha-white-7: rgb(255 255 255 / 7%);
    --arc-color-alpha-white-10: rgb(255 255 255 / 10%);
    --arc-color-alpha-white-15: rgb(255 255 255 / 15%);
    --arc-color-alpha-white-20: rgb(255 255 255 / 20%);
    --arc-color-alpha-white-25: rgb(255 255 255 / 25%);
    --arc-color-alpha-white-30: rgb(255 255 255 / 30%);
    --arc-color-alpha-white-40: rgb(255 255 255 / 40%);
    --arc-color-alpha-white-50: rgb(255 255 255 / 50%);
    --arc-color-alpha-white-60: rgb(255 255 255 / 60%);
    --arc-color-alpha-white-70: rgb(255 255 255 / 70%);
    --arc-color-alpha-white-80: rgb(255 255 255 / 80%);
    --arc-color-alpha-white-90: rgb(255 255 255 / 90%);
    --arc-color-alpha-white-95: rgb(255 255 255 / 95%);
    --arc-color-alpha-white-100: rgb(255 255 255 / 100%);
    --arc-gradient-ai-50: linear-gradient(60deg, light-dark(#fbf2ff, #210125), light-dark(#f4fbff, #00223b));
    --arc-gradient-ai-100: linear-gradient(60deg, light-dark(#efccff, #540160), light-dark(#d2f1fe, #02497d));
    --arc-gradient-ai-200: linear-gradient(60deg, light-dark(#9c15ff, #ad44cb), light-dark(#1eb4fb, #169cfe));
    --arc-gradient-ai-300: linear-gradient(60deg, light-dark(#680278, #ad44cb), light-dark(#0179d0, #71bdfe));
    --arc-gradient-ai-400: linear-gradient(60deg, light-dark(#5d3668, #c778de), light-dark(#36648c, #84daff));
    --arc-gradient-ai-500: linear-gradient(60deg, light-dark(#37003f, #e3a7ff), light-dark(#004273, #b7eaff));
    --arc-gradient-ai-600: linear-gradient(60deg, light-dark(#27002c, #f9ebff), light-dark(#012a48, #c2edff));
    --arc-color-overlay-subtle: light-dark(var(--arc-color-alpha-white-70), var(--arc-color-alpha-black-70));
    --arc-color-overlay-stark: light-dark(var(--arc-color-alpha-black-50), var(--arc-color-alpha-black-50));
    --arc-color-shadow-sm: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-black-60));
    --arc-color-shadow-md: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-50));
    --arc-color-shadow-lg: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-shadow-xl: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-bg-primary: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-100));
    --arc-color-bg-secondary: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-bg-tertiary: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-300));
    --arc-color-bg-mono-inverse: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-mono: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-bg-disabled: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-subtle: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-bg-hover-default: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-stark: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-bg-selected-subtle: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-selected-default: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-200));
    --arc-color-bg-selected-stark: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-400));
    --arc-color-bg-theme-muted: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-5));
    --arc-color-bg-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-bg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-bg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-bg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-success-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-success-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-success-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-warning-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-warning-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-warning-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-critical-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-critical-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-critical-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-bg-info-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-info-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-info-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-brand-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-brand-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-brand-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-neutral-muted: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-neutral-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-25));
    --arc-color-bg-neutral-mid: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-bg-neutral-stark: light-dark(var(--arc-color-light-neutral-600), var(--arc-color-dark-neutral-600));
    --arc-color-bg-neutral-heavy: light-dark(var(--arc-color-light-neutral-800), var(--arc-color-dark-neutral-800));
    --arc-color-bg-orange-muted: light-dark(var(--arc-color-light-orange-50), var(--arc-color-dark-orange-50));
    --arc-color-bg-orange-subtle: light-dark(var(--arc-color-light-orange-100), var(--arc-color-dark-orange-100));
    --arc-color-bg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-bg-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-bg-orange-heavy: light-dark(var(--arc-color-light-orange-800), var(--arc-color-dark-orange-800));
    --arc-color-bg-mint-muted: light-dark(var(--arc-color-light-mint-50), var(--arc-color-dark-mint-50));
    --arc-color-bg-mint-subtle: light-dark(var(--arc-color-light-mint-100), var(--arc-color-dark-mint-100));
    --arc-color-bg-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-bg-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-bg-mint-heavy: light-dark(var(--arc-color-light-mint-800), var(--arc-color-dark-mint-800));
    --arc-color-bg-maroon-muted: light-dark(var(--arc-color-light-maroon-50), var(--arc-color-dark-maroon-50));
    --arc-color-bg-maroon-subtle: light-dark(var(--arc-color-light-maroon-100), var(--arc-color-dark-maroon-100));
    --arc-color-bg-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-bg-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-700));
    --arc-color-bg-maroon-heavy: light-dark(var(--arc-color-light-maroon-800), var(--arc-color-dark-maroon-800));
    --arc-color-bg-blue-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-blue-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-blue-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-purple-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-purple-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-purple-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-green-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-green-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-green-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-yellow-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-yellow-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-yellow-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-red-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-red-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-red-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-fg-primary: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-secondary: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-700));
    --arc-color-fg-on-hover-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-disabled: light-dark(var(--arc-color-alpha-black-40), var(--arc-color-alpha-white-40));
    --arc-color-fg-on-selected-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-mid: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-800));
    --arc-color-fg-on-theme-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-theme-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-mid: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono-inverse: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-success-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-warning-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-warning-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-critical-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-info-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-brand-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-orange-subtle: light-dark(var(--arc-color-light-orange-300), var(--arc-color-dark-orange-400));
    --arc-color-fg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-600));
    --arc-color-fg-orange-stark: light-dark(var(--arc-color-light-orange-700), var(--arc-color-dark-orange-800));
    --arc-color-fg-mint-subtle: light-dark(var(--arc-color-light-mint-300), var(--arc-color-dark-mint-400));
    --arc-color-fg-mint-mid: light-dark(var(--arc-color-light-mint-500), var(--arc-color-dark-mint-600));
    --arc-color-fg-mint-stark: light-dark(var(--arc-color-light-mint-700), var(--arc-color-dark-mint-800));
    --arc-color-fg-maroon-subtle: light-dark(var(--arc-color-light-maroon-300), var(--arc-color-dark-maroon-400));
    --arc-color-fg-maroon-mid: light-dark(var(--arc-color-light-maroon-500), var(--arc-color-dark-maroon-600));
    --arc-color-fg-maroon-stark: light-dark(var(--arc-color-light-maroon-700), var(--arc-color-dark-maroon-800));
    --arc-color-fg-neutral-subtle: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-fg-neutral-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-fg-neutral-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-800));
    --arc-color-fg-blue-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-purple-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-green-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-yellow-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-yellow-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-red-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-theme-muted: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-10));
    --arc-color-fg-theme-subtle: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-white-25));
    --arc-color-fg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-fg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-fg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-brand-heavy: light-dark(var(--arc-color-light-blue-700), var(--arc-color-dark-blue-900));
    --arc-color-border-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-5));
    --arc-color-border-subtle: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-border-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-20));
    --arc-color-border-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-30));
    --arc-color-border-on-stark: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-border-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-selected: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-focus: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-success-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-warning-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-critical-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-info-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-brand-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-border-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-orange-subtle: light-dark(var(--arc-color-light-orange-200), var(--arc-color-dark-orange-200));
    --arc-color-border-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-border-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-border-mint-subtle: light-dark(var(--arc-color-light-mint-200), var(--arc-color-dark-mint-200));
    --arc-color-border-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-border-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-border-maroon-subtle: light-dark(var(--arc-color-light-maroon-200), var(--arc-color-dark-maroon-200));
    --arc-color-border-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-border-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-600));
    --arc-color-border-blue-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-border-purple-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-green-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-yellow-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-red-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-disabled: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-25));
    --arc-color-border-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-border-hover: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-30));
    --arc-color-alpha-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-alpha-subtle: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-alpha-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-alpha-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-60));
    --arc-color-alpha-heavy: light-dark(var(--arc-color-alpha-black-60), var(--arc-color-alpha-white-70));
  }
}
/*
  A NOTE ON USING ARC TOKENS (CSS VARIABLES) --------------------------\u2022

  Tokens with \`--arc-internal-\` prefixes are internal only
    - NOT FOR CONSUMER USE
    - These are System/Internal things and are not intended to be
      access or modified by consumers of the design system.
    - Please reach out to #design-system in Slack for guidance or help,
      or to request something new.


  OVERRIDES, BE CAUTIOUS \u2022 These are available for acute adjustments,
                           but not needed in most cases.
  ---------------------------------------------------------------------\u2022
  --arc-font-size-base          \u2022 Override if your app's \`rem\` size
                                  isn't effectively 16px. For instance,
                                  set to 1 if your \`rem\` is 10px.

  --arc-font-variation-settings \u2022 Research \`font-variation-settings\`
                                  before using this token.

  --arc-font-size-mono          \u2022 Controls size of monospace fonts.
  --arc-line-height-title       \u2022 Various text adjustment overrides...
  --arc-line-height-heading
  --arc-line-height-subheading
  --arc-line-height-body
  --arc-line-height-mono
  --arc-letter-spacing-title
  --arc-letter-spacing-heading
  ---------------------------------------------------------------------\u2022
*/
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-font-size: var(--arc-font-size-base, 0.625);
    --arc-internal-font-body: Inter, system-ui, sans-serif;
    --arc-internal-font-expressive: "GT Walsheim", system-ui, sans-serif;
    --arc-internal-font-mono: "Roboto Mono", monospace;
    --arc-internal-font-size-mono: 0.875em;
    --arc-internal-letter-spacing: -0.015em;
    --arc-internal-font-vs: "opsz" 24;
    --arc-font-family-expressive: var(--arc-internal-font-expressive);
    --arc-font-family-title: var(--arc-internal-font-expressive);
    --arc-font-family-heading: var(--arc-internal-font-expressive);
    --arc-font-family-subheading: var(--arc-internal-font-body);
    --arc-font-family-body: var(--arc-internal-font-body);
    --arc-font-family-mono: var(--arc-internal-font-mono);
    --arc-line-height-tight: 1.2;
    --arc-line-height-standard: 1.4;
    --arc-line-height-loose: 1.6;
    --arc-line-height-title: var(--arc-line-height-tight);
    --arc-line-height-heading: var(--arc-line-height-tight);
    --arc-line-height-subheading: var(--arc-line-height-tight);
    --arc-line-height-body: var(--arc-line-height-standard);
    --arc-line-height-mono: var(--arc-line-height-standard);
    --arc-letter-spacing-heading: var(--arc-internal-letter-spacing);
    --arc-letter-spacing-title: var(--arc-internal-letter-spacing);
    --arc-font-weight-400: 400;
    --arc-font-weight-500: 500;
    --arc-font-weight-600: 600;
    --arc-font-weight-title: var(--arc-font-weight-600);
    --arc-font-weight-heading: var(--arc-font-weight-600);
    --arc-font-weight-subheading: var(--arc-font-weight-600);
    --arc-font-weight-bold: var(--arc-font-weight-600);
    --arc-font-weight-body: var(--arc-font-weight-400);
    --arc-font-weight-normal: var(--arc-font-weight-400);
    --arc-font-size-08: calc(0.8rem * var(--arc-internal-font-size));
    --arc-font-size-10: calc(1rem * var(--arc-internal-font-size));
    --arc-font-size-12: calc(1.2rem * var(--arc-internal-font-size));
    --arc-font-size-14: calc(1.4rem * var(--arc-internal-font-size));
    --arc-font-size-16: calc(1.6rem * var(--arc-internal-font-size));
    --arc-font-size-18: calc(1.8rem * var(--arc-internal-font-size));
    --arc-font-size-20: calc(2rem * var(--arc-internal-font-size));
    --arc-font-size-24: calc(2.4rem * var(--arc-internal-font-size));
    --arc-font-size-28: calc(2.8rem * var(--arc-internal-font-size));
    --arc-font-size-32: calc(3.2rem * var(--arc-internal-font-size));
    --arc-font-size-40: calc(4rem * var(--arc-internal-font-size));
    --arc-font-size-title-lg: var(--arc-font-size-40);
    --arc-font-size-title-md: var(--arc-font-size-32);
    --arc-font-size-title-sm: var(--arc-font-size-28);
    --arc-font-size-heading-lg: var(--arc-font-size-24);
    --arc-font-size-heading-md: var(--arc-font-size-20);
    --arc-font-size-heading-sm: var(--arc-font-size-18);
    --arc-font-size-subheading-lg: var(--arc-font-size-16);
    --arc-font-size-subheading-md: var(--arc-font-size-14);
    --arc-font-size-subheading-sm: var(--arc-font-size-12);
    --arc-font-size-body-lg: var(--arc-font-size-16);
    --arc-font-size-body-md: var(--arc-font-size-14);
    --arc-font-size-body-sm: var(--arc-font-size-12);
    --arc-font-size-body-xs: var(--arc-font-size-10);
    --arc-font-size-mono-lg: var(--arc-font-size-14);
    --arc-font-size-mono-md: var(--arc-font-size-12);
    --arc-font-size-mono-sm: var(--arc-font-size-10);
  }
  [data-arc-theme~=font-family] {
    font-family: var(--arc-font-family-body);
    font-size: var(--arc-font-size-16);
    font-weight: var(--arc-font-weight-body);
    line-height: var(--arc-line-height-body, var(--arc-line-height-standard));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1, h2, h3) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  [data-arc-theme~=font-family] :where(h4, h5, h6) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1) {
    font-size: var(--arc-font-size-24);
  }
  [data-arc-theme~=font-family] :where(h2) {
    font-size: var(--arc-font-size-20);
  }
  [data-arc-theme~=font-family] :where(h3) {
    font-size: var(--arc-font-size-18);
  }
  [data-arc-theme~=font-family] :where(h4) {
    font-size: var(--arc-font-size-16);
  }
  [data-arc-theme~=font-family] :where(h5) {
    font-size: var(--arc-font-size-14);
  }
  [data-arc-theme~=font-family] :where(h6) {
    font-size: var(--arc-font-size-12);
  }
  [data-arc-theme~=font-family] :where(b, strong) {
    font-weight: var(--arc-font-weight-600);
  }
  [data-arc-theme~=font-family] :where(i, em) {
    font-style: italic;
  }
  [data-arc-theme~=font-family] :where(u) {
    text-decoration: underline;
  }
  [data-arc-theme~=font-family] :where(pre, code) {
    font-family: var(--arc-font-family-mono);
    font-size: var(--arc-font-size-mono, var(--arc-internal-font-size-mono));
  }
}
@layer arc-utils {
  .arc-font-title-lg {
    font-size: var(--arc-font-size-40);
  }
  .arc-font-title-md {
    font-size: var(--arc-font-size-32);
  }
  .arc-font-title-sm {
    font-size: var(--arc-font-size-28);
  }
  :is(.arc-font-title, .arc-font-title-lg, .arc-font-title-md, .arc-font-title-sm) {
    font-family: var(--arc-font-family-title);
    font-weight: var(--arc-font-weight-title);
    letter-spacing: var(--arc-letter-spacing-title);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-title));
  }
  .arc-font-heading-lg {
    font-size: var(--arc-font-size-24);
  }
  .arc-font-heading-md {
    font-size: var(--arc-font-size-20);
  }
  .arc-font-heading-sm {
    font-size: var(--arc-font-size-18);
  }
  :is(.arc-font-heading, .arc-font-heading-lg, .arc-font-heading-md, .arc-font-heading-sm) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  .arc-font-subheading-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-subheading-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-subheading-sm {
    font-size: var(--arc-font-size-12);
  }
  :is(.arc-font-subheading, .arc-font-subheading-lg, .arc-font-subheading-md, .arc-font-subheading-sm) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-body-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-body-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-body-sm {
    font-size: var(--arc-font-size-12);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body-xs) {
    font-size: var(--arc-font-size-10);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body, .arc-font-body-lg, .arc-font-body-md, .arc-font-body-sm) {
    font-family: var(--arc-font-family-body);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-body));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-mono-lg {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-mono-md {
    font-size: var(--arc-font-size-12);
  }
  .arc-font-mono-sm {
    font-size: var(--arc-font-size-10);
  }
  :is(.arc-font-mono, .arc-font-mono-lg, .arc-font-mono-md, .arc-font-mono-sm) {
    font-family: var(--arc-font-family-mono);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-mono));
  }
  .arc-line-height-loose {
    --arc-internal-line-height: var(--arc-line-height-loose);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-standard {
    --arc-internal-line-height: var(--arc-line-height-standard);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-tight {
    --arc-internal-line-height: var(--arc-line-height-tight);
    line-height: var(--arc-internal-line-height);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-space: 0.8rem * var(--arc-internal-font-size);
    --arc-internal-size: 0.8rem * var(--arc-internal-font-size);
    --arc-space-0: 0;
    --arc-space-0-25: calc(0.25 * var(--arc-internal-space));
    --arc-space-0-5: calc(0.5 * var(--arc-internal-space));
    --arc-space-0-75: calc(0.75 * var(--arc-internal-space));
    --arc-space-1: calc(var(--arc-internal-space));
    --arc-space-1-25: calc(1.25 * var(--arc-internal-space));
    --arc-space-1-5: calc(1.5 * var(--arc-internal-space));
    --arc-space-2: calc(2 * var(--arc-internal-space));
    --arc-space-2-5: calc(2.5 * var(--arc-internal-space));
    --arc-space-3: calc(3 * var(--arc-internal-space));
    --arc-space-4: calc(4 * var(--arc-internal-space));
    --arc-space-5: calc(5 * var(--arc-internal-space));
    --arc-space-6: calc(6 * var(--arc-internal-space));
    --arc-space-7: calc(7 * var(--arc-internal-space));
    --arc-space-8: calc(8 * var(--arc-internal-space));
    --arc-space-9: calc(9 * var(--arc-internal-space));
    --arc-space-10: calc(10 * var(--arc-internal-space));
    --arc-space-11: calc(11 * var(--arc-internal-space));
    --arc-space-12: calc(12 * var(--arc-internal-space));
    --arc-size-0: 0;
    --arc-size-0-25: calc(0.25 * var(--arc-internal-size));
    --arc-size-0-5: calc(0.5 * var(--arc-internal-size));
    --arc-size-0-75: calc(0.75 * var(--arc-internal-size));
    --arc-size-1: calc(var(--arc-internal-size));
    --arc-size-1-25: calc(1.25 * var(--arc-internal-size));
    --arc-size-1-5: calc(1.5 * var(--arc-internal-size));
    --arc-size-1-75: calc(1.75 * var(--arc-internal-size));
    --arc-size-2: calc(2 * var(--arc-internal-size));
    --arc-size-2-25: calc(2.25 * var(--arc-internal-size));
    --arc-size-2-5: calc(2.5 * var(--arc-internal-size));
    --arc-size-2-75: calc(2.75 * var(--arc-internal-size));
    --arc-size-3: calc(3 * var(--arc-internal-size));
    --arc-size-3-25: calc(3.25 * var(--arc-internal-size));
    --arc-size-3-5: calc(3.5 * var(--arc-internal-size));
    --arc-size-3-75: calc(3.75 * var(--arc-internal-size));
    --arc-size-4: calc(4 * var(--arc-internal-size));
    --arc-size-4-25: calc(4.25 * var(--arc-internal-size));
    --arc-size-4-5: calc(4.5 * var(--arc-internal-size));
    --arc-size-4-75: calc(4.75 * var(--arc-internal-size));
    --arc-size-5: calc(5 * var(--arc-internal-size));
    --arc-size-6: calc(6 * var(--arc-internal-size));
    --arc-size-7: calc(7 * var(--arc-internal-size));
    --arc-size-8: calc(8 * var(--arc-internal-size));
    --arc-size-9: calc(9 * var(--arc-internal-size));
    --arc-size-10: calc(10 * var(--arc-internal-size));
    --arc-size-11: calc(11 * var(--arc-internal-size));
    --arc-size-12: calc(12 * var(--arc-internal-size));
    --arc-size-13: calc(13 * var(--arc-internal-size));
    --arc-size-14: calc(14 * var(--arc-internal-size));
    --arc-size-15: calc(15 * var(--arc-internal-size));
    --arc-size-16: calc(16 * var(--arc-internal-size));
    --arc-size-17: calc(17 * var(--arc-internal-size));
    --arc-size-18: calc(18 * var(--arc-internal-size));
    --arc-size-19: calc(19 * var(--arc-internal-size));
    --arc-size-20: calc(20 * var(--arc-internal-size));
    --arc\u2022space\u202216m: min(-16px, -1rem);
    --arc\u2022space\u202214m: min(-14px, -0.875rem);
    --arc\u2022space\u202212m: min(-12px, -0.75rem);
    --arc\u2022space\u202210m: min(-10px, -0.625rem);
    --arc\u2022space\u20228m: min(-8px, -0.5rem);
    --arc\u2022space\u20226m: min(-6px, -0.375rem);
    --arc\u2022space\u20225m: min(-5px, -0.3125rem);
    --arc\u2022space\u20224m: min(-4px, -0.25rem);
    --arc\u2022space\u20223m: min(-3px, -0.1875rem);
    --arc\u2022space\u20222m: min(-2px, -0.125rem);
    --arc\u2022space\u20221m: min(-1px, -0.0625rem);
    --arc\u2022space\u20220: 0px;
    --arc\u2022space\u20221: max(1px, 0.0625rem);
    --arc\u2022space\u20222: max(2px, 0.125rem);
    --arc\u2022space\u20223: max(3px, 0.1875rem);
    --arc\u2022space\u20224: max(4px, 0.25rem);
    --arc\u2022space\u20225: max(5px, 0.3125rem);
    --arc\u2022space\u20226: max(6px, 0.375rem);
    --arc\u2022space\u20228: max(8px, 0.5rem);
    --arc\u2022space\u202210: max(10px, 0.625rem);
    --arc\u2022space\u202212: max(12px, 0.75rem);
    --arc\u2022space\u202214: max(14px, 0.875rem);
    --arc\u2022space\u202216: max(16px, 1rem);
    --arc\u2022space\u202218: max(18px, 1.125rem);
    --arc\u2022space\u202220: max(20px, 1.25rem);
    --arc\u2022space\u202224: max(24px, 1.5rem);
    --arc\u2022space\u202232: max(32px, 2rem);
    --arc\u2022space\u202240: max(40px, 2.5rem);
    --arc\u2022space\u202248: max(48px, 3rem);
    --arc\u2022space\u202256: max(56px, 3.5rem);
    --arc\u2022space\u202264: max(64px, 4rem);
    --arc\u2022space\u202272: max(72px, 4.5rem);
    --arc\u2022space\u202280: max(80px, 5rem);
    --arc\u2022space\u202288: max(88px, 5.5rem);
    --arc\u2022space\u202296: max(96px, 6rem);
    --arc\u2022size\u202216m: min(-16px, -1rem);
    --arc\u2022size\u202212m: min(-12px, -0.75rem);
    --arc\u2022size\u202210m: min(-10px, -0.625rem);
    --arc\u2022size\u20228m: min(-8px, -0.5rem);
    --arc\u2022size\u20226m: min(-6px, -0.375rem);
    --arc\u2022size\u20224m: min(-4px, -0.25rem);
    --arc\u2022size\u20223m: min(-3px, -0.1875rem);
    --arc\u2022size\u20222m: min(-2px, -0.125rem);
    --arc\u2022size\u20221m: min(-1px, -0.0625rem);
    --arc\u2022size\u20220: 0px;
    --arc\u2022size\u20221: max(1px, 0.0625rem);
    --arc\u2022size\u20222: max(2px, 0.125rem);
    --arc\u2022size\u20223: max(3px, 0.1875rem);
    --arc\u2022size\u20224: max(4px, 0.25rem);
    --arc\u2022size\u20225: max(5px, 0.3125rem);
    --arc\u2022size\u20226: max(6px, 0.375rem);
    --arc\u2022size\u20228: max(8px, 0.5rem);
    --arc\u2022size\u202210: max(10px, 0.625rem);
    --arc\u2022size\u202212: max(12px, 0.75rem);
    --arc\u2022size\u202214: max(14px, 0.875rem);
    --arc\u2022size\u202215: max(15px, 0.9375rem);
    --arc\u2022size\u202216: max(16px, 1rem);
    --arc\u2022size\u202218: max(18px, 1.125rem);
    --arc\u2022size\u202220: max(20px, 1.25rem);
    --arc\u2022size\u202222: max(22px, 1.375rem);
    --arc\u2022size\u202224: max(24px, 1.5rem);
    --arc\u2022size\u202225: max(25px, 1.5625rem);
    --arc\u2022size\u202226: max(26px, 1.625rem);
    --arc\u2022size\u202228: max(28px, 1.75rem);
    --arc\u2022size\u202230: max(30px, 1.875rem);
    --arc\u2022size\u202232: max(32px, 2rem);
    --arc\u2022size\u202234: max(34px, 2.125rem);
    --arc\u2022size\u202236: max(36px, 2.25rem);
    --arc\u2022size\u202238: max(38px, 2.375rem);
    --arc\u2022size\u202240: max(40px, 2.5rem);
    --arc\u2022size\u202242: max(42px, 2.625rem);
    --arc\u2022size\u202244: max(44px, 2.75rem);
    --arc\u2022size\u202246: max(46px, 2.875rem);
    --arc\u2022size\u202248: max(48px, 3rem);
    --arc\u2022size\u202250: max(50px, 3.125rem);
    --arc\u2022size\u202252: max(52px, 3.25rem);
    --arc\u2022size\u202254: max(54px, 3.375rem);
    --arc\u2022size\u202256: max(56px, 3.5rem);
    --arc\u2022size\u202258: max(58px, 3.625rem);
    --arc\u2022size\u202260: max(60px, 3.75rem);
    --arc\u2022size\u202264: max(64px, 4rem);
    --arc\u2022size\u202268: max(68px, 4.25rem);
    --arc\u2022size\u202272: max(72px, 4.5rem);
    --arc\u2022size\u202276: max(76px, 4.75rem);
    --arc\u2022size\u202280: max(80px, 5rem);
    --arc\u2022size\u202288: max(88px, 5.5rem);
    --arc\u2022size\u202296: max(96px, 6rem);
    --arc\u2022size\u2022104: max(104px, 6.5rem);
    --arc\u2022size\u2022112: max(112px, 7rem);
    --arc\u2022size\u2022120: max(120px, 7.5rem);
    --arc\u2022size\u2022128: max(128px, 8rem);
    --arc\u2022size\u2022136: max(136px, 8.5rem);
    --arc\u2022size\u2022144: max(144px, 9rem);
    --arc\u2022size\u2022152: max(152px, 9.5rem);
    --arc\u2022size\u2022160: max(160px, 10rem);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-alpha-0: 0%;
    --arc-alpha-3: 3%;
    --arc-alpha-5: 5%;
    --arc-alpha-10: 10%;
    --arc-alpha-20: 20%;
    --arc-alpha-25: 25%;
    --arc-alpha-30: 30%;
    --arc-alpha-40: 40%;
    --arc-alpha-50: 50%;
    --arc-alpha-60: 60%;
    --arc-alpha-70: 70%;
    --arc-alpha-80: 80%;
    --arc-alpha-90: 90%;
    --arc-alpha-95: 95%;
    --arc-alpha-100: 100%;
    --arc-border-radius-none: 0px;
    --arc-border-radius-sm: max(2px, 0.125em);
    --arc-border-radius-md: max(4px, 0.25em);
    --arc-border-radius-lg: max(8px, 0.5em);
    --arc-border-radius-xl: max(16px, 1em);
    --arc-border-radius-circle: 50%;
    --arc-border-radius-pill: 100vh;
    --arc-border-width-none: 0px;
    --arc-border-width-sm: max(1px, 0.0625em);
    --arc-border-width-md: max(2px, 0.125em);
    --arc-border-width-lg: max(3px, 0.1875em);
    --arc-border-width-xl: max(4px, 0.25em);
    /* dynamic shadow tokens */
    --arc-shadow-none: none;
    --arc-shadow-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-shadow-sm);
    --arc-shadow-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-shadow-md);
    --arc-shadow-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-shadow-lg);
    --arc-shadow-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-shadow-xl);
    /* static light shadow tokens (primitive alpha colors) */
    --arc-shadow-light-none: none;
    --arc-shadow-light-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-25);
    --arc-shadow-light-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-15);
    --arc-shadow-light-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-alpha-black-15);
    --arc-shadow-light-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-15);
    /* static dark shadow tokens (primitive alpha colors) */
    --arc-shadow-dark-none: none;
    --arc-shadow-dark-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-60);
    --arc-shadow-dark-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-50);
    --arc-shadow-dark-lg: 0 max(4px, 0.25em) max(24px, 1.5em) 0 var(--arc-color-alpha-black-40);
    --arc-shadow-dark-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-40);
    /* surface shadow tokens */
    --arc-surface-raised-shadow: var(--arc-shadow-md);
    --arc-surface-floating-shadow: var(--arc-shadow-lg);
  }
}
@layer arc-utils {
  /* Gradients -----------------------------------------------------\u2022 */
  [arc-gradient] {
    background-clip: text;
    color: transparent;
    /** @note: line-height mitigation strategy for gradient icons
     * stops icon geometry clipping issues
     */
  }
  [arc-gradient][arc-icon] {
    --arc-icon-height: 1.5lh;
    --arc-icon-max-height: none;
    --arc-icon-margin-block: -0.5lh;
  }
  :is([arc-gradient], [arc-gradient=ai], [arc-gradient=ai-200]) {
    background-image: var(--arc-gradient-ai-200);
  }
  [arc-gradient=ai-50] {
    background-image: var(--arc-gradient-ai-50);
  }
  [arc-gradient=ai-100] {
    background-image: var(--arc-gradient-ai-100);
  }
  [arc-gradient=ai-300] {
    background-image: var(--arc-gradient-ai-300);
  }
  [arc-gradient=ai-400] {
    background-image: var(--arc-gradient-ai-400);
  }
  [arc-gradient=ai-500] {
    background-image: var(--arc-gradient-ai-500);
  }
  [arc-gradient=ai-600] {
    background-image: var(--arc-gradient-ai-600);
  }
  /* Shadows -------------------------------------------------------\u2022 */
  [arc-shadow=sm] {
    box-shadow: var(--arc-shadow-sm);
  }
  [arc-shadow=md] {
    box-shadow: var(--arc-shadow-md);
  }
  [arc-shadow=lg] {
    box-shadow: var(--arc-shadow-lg);
  }
  [arc-shadow=xl] {
    box-shadow: var(--arc-shadow-xl);
  }
  /* Light Shadows -------------------------------------------------\u2022 */
  [arc-shadow=light-sm] {
    box-shadow: var(--arc-shadow-light-sm);
  }
  [arc-shadow=light-md] {
    box-shadow: var(--arc-shadow-light-md);
  }
  [arc-shadow=light-lg] {
    box-shadow: var(--arc-shadow-light-lg);
  }
  [arc-shadow=light-xl] {
    box-shadow: var(--arc-shadow-light-xl);
  }
  /* Dark Shadows --------------------------------------------------\u2022 */
  [arc-shadow=dark-sm] {
    box-shadow: var(--arc-shadow-dark-sm);
  }
  [arc-shadow=dark-md] {
    box-shadow: var(--arc-shadow-dark-md);
  }
  [arc-shadow=dark-lg] {
    box-shadow: var(--arc-shadow-dark-lg);
  }
  [arc-shadow=dark-xl] {
    box-shadow: var(--arc-shadow-dark-xl);
  }
  /* Surfaces ------------------------------------------------------\u2022 */
  [arc-surface=primary] {
    color: var(--arc-surface-primary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-primary-background, var(--arc-color-bg-primary));
  }
  [arc-surface=secondary] {
    color: var(--arc-surface-secondary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-secondary-background, var(--arc-color-bg-secondary));
  }
  [arc-surface=inset] {
    color: var(--arc-surface-inset-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-inset-background, var(--arc-color-bg-tertiary));
  }
  [arc-surface=raised] {
    color: var(--arc-surface-raised-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-raised-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-raised-box-shadow, var(--arc-surface-raised-shadow));
    z-index: var(--arc-surface-raised-z-index, 1);
  }
  [arc-surface=floating] {
    color: var(--arc-surface-floating-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-floating-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-floating-box-shadow, var(--arc-surface-floating-shadow));
    z-index: var(--arc-surface-floating-z-index, 2);
  }
  /* Scheme (proximity via inheritance) ----------------------------\u2022 */
  :root:not([arc-scheme]) {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=light] {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
    --arc\u2022color\u2022scheme\u2022inverse\u2022nested: light;
  }
  [arc-scheme=dark] {
    --arc\u2022color\u2022scheme: dark;
    --arc\u2022color\u2022scheme\u2022inverse: light;
    --arc\u2022color\u2022scheme\u2022inverse\u2022nested: dark;
  }
  [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse);
  }
  [arc-scheme=inverse] [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse\u2022nested);
  }
  :root:not([arc-scheme]),
  [arc-scheme] {
    color-scheme: var(--arc\u2022color\u2022scheme, light);
  }
}
:root,
::backdrop {
  /* @deprecated background variables - please update all instances */
  --arc-color-alpha-white-03: var(--arc-color-alpha-white-3);
  --arc-color-alpha-white-05: var(--arc-color-alpha-white-5);
  --arc-color-alpha-black-03: var(--arc-color-alpha-black-3);
  --arc-color-alpha-black-05: var(--arc-color-alpha-black-5);
  --arc-color-neutral-000: var(--arc-color-light-neutral-0);
  --arc-color-neutral-050: var(--arc-color-light-neutral-50);
  --arc-color-neutral-100: var(--arc-color-light-neutral-100);
  --arc-color-neutral-200: var(--arc-color-light-neutral-200);
  --arc-color-neutral-300: var(--arc-color-light-neutral-300);
  --arc-color-neutral-400: var(--arc-color-light-neutral-400);
  --arc-color-neutral-500: var(--arc-color-light-neutral-500);
  --arc-color-neutral-600: var(--arc-color-light-neutral-600);
  --arc-color-neutral-700: var(--arc-color-light-neutral-700);
  --arc-color-neutral-800: var(--arc-color-light-neutral-800);
  --arc-color-neutral-900: var(--arc-color-light-neutral-900);
  --arc-color-blue-050: var(--arc-color-light-blue-50);
  --arc-color-blue-100: var(--arc-color-light-blue-100);
  --arc-color-blue-200: var(--arc-color-light-blue-200);
  --arc-color-blue-300: var(--arc-color-light-blue-300);
  --arc-color-blue-400: var(--arc-color-light-blue-400);
  --arc-color-blue-500: var(--arc-color-light-blue-500);
  --arc-color-blue-600: var(--arc-color-light-blue-600);
  --arc-color-blue-700: var(--arc-color-light-blue-700);
  --arc-color-blue-800: var(--arc-color-light-blue-800);
  --arc-color-blue-900: var(--arc-color-light-blue-900);
  --arc-color-purple-050: var(--arc-color-light-purple-50);
  --arc-color-purple-100: var(--arc-color-light-purple-100);
  --arc-color-purple-200: var(--arc-color-light-purple-200);
  --arc-color-purple-300: var(--arc-color-light-purple-300);
  --arc-color-purple-400: var(--arc-color-light-purple-400);
  --arc-color-purple-500: var(--arc-color-light-purple-500);
  --arc-color-purple-600: var(--arc-color-light-purple-600);
  --arc-color-purple-700: var(--arc-color-light-purple-700);
  --arc-color-purple-800: var(--arc-color-light-purple-800);
  --arc-color-purple-900: var(--arc-color-light-purple-900);
  --arc-color-maroon-050: var(--arc-color-light-maroon-50);
  --arc-color-maroon-100: var(--arc-color-light-maroon-100);
  --arc-color-maroon-200: var(--arc-color-light-maroon-200);
  --arc-color-maroon-300: var(--arc-color-light-maroon-300);
  --arc-color-maroon-400: var(--arc-color-light-maroon-400);
  --arc-color-maroon-500: var(--arc-color-light-maroon-500);
  --arc-color-maroon-600: var(--arc-color-light-maroon-600);
  --arc-color-maroon-700: var(--arc-color-light-maroon-700);
  --arc-color-maroon-800: var(--arc-color-light-maroon-800);
  --arc-color-maroon-900: var(--arc-color-light-maroon-900);
  --arc-color-red-050: var(--arc-color-light-red-50);
  --arc-color-red-100: var(--arc-color-light-red-100);
  --arc-color-red-200: var(--arc-color-light-red-200);
  --arc-color-red-300: var(--arc-color-light-red-300);
  --arc-color-red-400: var(--arc-color-light-red-400);
  --arc-color-red-500: var(--arc-color-light-red-500);
  --arc-color-red-600: var(--arc-color-light-red-600);
  --arc-color-red-700: var(--arc-color-light-red-700);
  --arc-color-red-800: var(--arc-color-light-red-800);
  --arc-color-red-900: var(--arc-color-light-red-900);
  --arc-color-orange-050: var(--arc-color-light-orange-50);
  --arc-color-orange-100: var(--arc-color-light-orange-100);
  --arc-color-orange-200: var(--arc-color-light-orange-200);
  --arc-color-orange-300: var(--arc-color-light-orange-300);
  --arc-color-orange-400: var(--arc-color-light-orange-400);
  --arc-color-orange-500: var(--arc-color-light-orange-500);
  --arc-color-orange-600: var(--arc-color-light-orange-600);
  --arc-color-orange-700: var(--arc-color-light-orange-700);
  --arc-color-orange-800: var(--arc-color-light-orange-800);
  --arc-color-orange-900: var(--arc-color-light-orange-900);
  --arc-color-yellow-050: var(--arc-color-light-yellow-50);
  --arc-color-yellow-100: var(--arc-color-light-yellow-100);
  --arc-color-yellow-200: var(--arc-color-light-yellow-200);
  --arc-color-yellow-300: var(--arc-color-light-yellow-300);
  --arc-color-yellow-400: var(--arc-color-light-yellow-400);
  --arc-color-yellow-500: var(--arc-color-light-yellow-500);
  --arc-color-yellow-600: var(--arc-color-light-yellow-600);
  --arc-color-yellow-700: var(--arc-color-light-yellow-700);
  --arc-color-yellow-800: var(--arc-color-light-yellow-800);
  --arc-color-yellow-900: var(--arc-color-light-yellow-900);
  --arc-color-green-050: var(--arc-color-light-green-50);
  --arc-color-green-100: var(--arc-color-light-green-100);
  --arc-color-green-200: var(--arc-color-light-green-200);
  --arc-color-green-300: var(--arc-color-light-green-300);
  --arc-color-green-400: var(--arc-color-light-green-400);
  --arc-color-green-500: var(--arc-color-light-green-500);
  --arc-color-green-600: var(--arc-color-light-green-600);
  --arc-color-green-700: var(--arc-color-light-green-700);
  --arc-color-green-800: var(--arc-color-light-green-800);
  --arc-color-green-900: var(--arc-color-light-green-900);
  --arc-color-mint-050: var(--arc-color-light-mint-50);
  --arc-color-mint-100: var(--arc-color-light-mint-100);
  --arc-color-mint-200: var(--arc-color-light-mint-200);
  --arc-color-mint-300: var(--arc-color-light-mint-300);
  --arc-color-mint-400: var(--arc-color-light-mint-400);
  --arc-color-mint-500: var(--arc-color-light-mint-500);
  --arc-color-mint-600: var(--arc-color-light-mint-600);
  --arc-color-mint-700: var(--arc-color-light-mint-700);
  --arc-color-mint-800: var(--arc-color-light-mint-800);
  --arc-color-mint-900: var(--arc-color-light-mint-900);
  --arc-gradient-ai-050: var(--arc-gradient-ai-50);
  --arc-color-ai-purple-050: #fbf2ff;
  --arc-color-ai-purple-100: #efccff;
  --arc-color-ai-purple-200: #9c15ff;
  --arc-color-ai-purple-300: #680278;
  --arc-color-ai-purple-400: #5d3668;
  --arc-color-ai-purple-500: #37003f;
  --arc-color-ai-purple-600: #27002c;
  --arc-color-ai-blue-050: #f4fbff;
  --arc-color-ai-blue-100: #d2f1fe;
  --arc-color-ai-blue-200: #1eb4fb;
  --arc-color-ai-blue-300: #0179d0;
  --arc-color-ai-blue-400: #36648c;
  --arc-color-ai-blue-500: #004273;
  --arc-color-ai-blue-600: #012a48;
  /* @deprecated background variables - please update all instances */
  --arc-color-background-primary: var(--arc-color-bg-primary);
  --arc-color-background-primary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-primary-selected-subtle: var(--arc-color-bg-selected-subtle);
  --arc-color-background-primary-selected: var(--arc-color-bg-selected-default);
  --arc-color-background-primary-selected-stark: var(--arc-color-bg-selected-stark);
  --arc-color-background-secondary: var(--arc-color-bg-secondary);
  --arc-color-background-secondary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-tertiary: var(--arc-color-bg-tertiary);
  --arc-color-background-inverse: var(--arc-color-light-neutral-1000);
  --arc-color-overlay-dark: var(--arc-color-overlay-stark);
  --arc-color-overlay-light: var(--arc-color-overlay-subtle);
  /* @deprecated foreground variables - please update all instances */
  --arc-color-text-primary: var(--arc-color-fg-primary);
  --arc-color-icon-primary: var(--arc-color-fg-primary);
  --arc-color-text-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-primary-hover: var(--arc-color-fg-on-hover-default);
  --arc-color-text-primary-hover: var(--arc-color-fg-on-hover-default);
  --arc-color-text-secondary-hover: var(--arc-color-fg-on-hover-stark);
  --arc-color-icon-secondary-hover: var(--arc-color-fg-on-hover-stark);
  --arc-color-text-disabled: var(--arc-color-fg-disabled);
  --arc-color-icon-disabled: var(--arc-color-fg-disabled);
  --arc-color-text-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-icon-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-text-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-icon-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-text-info: var(--arc-color-fg-info-stark);
  --arc-color-icon-info: var(--arc-color-fg-info-stark);
  --arc-color-text-brand: var(--arc-color-fg-brand-stark);
  --arc-color-icon-brand: var(--arc-color-fg-brand-mid);
  --arc-color-text-success: var(--arc-color-fg-success-stark);
  --arc-color-icon-success: var(--arc-color-fg-success-stark);
  --arc-color-text-warning: var(--arc-color-fg-warning-stark);
  --arc-color-icon-warning: var(--arc-color-fg-warning-stark);
  --arc-color-text-critical: var(--arc-color-fg-critical-mid);
  --arc-color-icon-critical: var(--arc-color-fg-critical-mid);
  /* @deprecated border variable - please update all instances */
  --arc-color-border-orange: var(--arc-color-border-orange-mid);
  --arc-color-border-mint: var(--arc-color-border-mint-mid);
  --arc-color-border-maroon: var(--arc-color-border-maroon-mid);
  --arc-color-border-standard: var(--arc-color-border-mid);
  --arc-color-border-full: var(--arc-color-border-heavy);
  --arc-color-border-focus-inverse: var(--arc-color-light-blue-300);
  --arc-border-width-standard: var(--arc-border-width-sm);
  /* @deprecated color variables - please update all instances */
  --arc-color-info-light: var(--arc-color-bg-info-muted);
  --arc-color-info-medium: var(--arc-color-bg-info-subtle);
  --arc-color-info-root: var(--arc-color-bg-info-mid);
  --arc-color-info-dark: var(--arc-color-bg-info-stark);
  --arc-color-info-heavy: var(--arc-color-bg-info-heavy);
  --arc-color-border-info: var(--arc-color-border-info-mid);
  --arc-color-brand-light: var(--arc-color-bg-brand-muted);
  --arc-color-brand-medium: var(--arc-color-bg-brand-subtle);
  --arc-color-brand-root: var(--arc-color-bg-brand-mid);
  --arc-color-brand-dark: var(--arc-color-bg-brand-stark);
  --arc-color-brand-heavy: var(--arc-color-bg-brand-heavy);
  --arc-color-border-brand: var(--arc-color-border-brand-mid);
  --arc-color-success-light: var(--arc-color-bg-success-muted);
  --arc-color-success-medium: var(--arc-color-bg-success-subtle);
  --arc-color-success-root: var(--arc-color-bg-success-mid);
  --arc-color-success-dark: var(--arc-color-bg-success-stark);
  --arc-color-success-heavy: var(--arc-color-bg-success-heavy);
  --arc-color-border-success: var(--arc-color-border-success-mid);
  --arc-color-warning-light: var(--arc-color-bg-warning-muted);
  --arc-color-warning-medium: var(--arc-color-bg-warning-subtle);
  --arc-color-warning-root: var(--arc-color-bg-warning-mid);
  --arc-color-warning-dark: var(--arc-color-bg-warning-stark);
  --arc-color-warning-heavy: var(--arc-color-bg-warning-heavy);
  --arc-color-border-warning: var(--arc-color-border-warning-mid);
  --arc-color-critical-light: var(--arc-color-bg-critical-muted);
  --arc-color-critical-medium: var(--arc-color-bg-critical-subtle);
  --arc-color-critical-root: var(--arc-color-bg-critical-mid);
  --arc-color-critical-dark: var(--arc-color-bg-critical-stark);
  --arc-color-critical-heavy: var(--arc-color-bg-critical-heavy);
  --arc-color-border-critical: var(--arc-color-border-critical-mid);
  /** @deprecated - old alpha leading zeros */
  --arc-alpha-03: var(--arc-alpha-3);
  --arc-alpha-05: var(--arc-alpha-5);
}

/*# sourceMappingURL=theme.css.map */
`,Si={};function Cr(r,e){if(typeof document<"u"&&e?.styleSheet){const a=Si[r];Si[r]=e.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(t=>t!==a),e.styleSheet]}}function Q0(r){const e=Object.values(Si),a=document.adoptedStyleSheets.filter(t=>e.includes(t));if(r.adoptedStyleSheets){const t=a.filter(o=>!r.adoptedStyleSheets.includes(o));r.adoptedStyleSheets=[...r.adoptedStyleSheets,...t]}}function rp(r){if(typeof CSSStyleSheet<"u"){const e=new CSSStyleSheet;e.replaceSync(J0),r.adoptedStyleSheets&&(r.adoptedStyleSheets.includes(e)||(r.adoptedStyleSheets=[...r.adoptedStyleSheets,e]))}}const ep=r=>r?.trim().charAt(0)??void 0,ap=(r,e)=>{let a=0;const t=Math.min(r.length,50);for(let o=0;o<t;o+=1)a=(a+r.charCodeAt(o))%(e??33);return a},tp=(r,e,a)=>e?.length?r?.trim()===""?a||e[0]:e[ap(r,e.length)]||a||e[0]:a,Yl=fr(ht,["blue","orange","mint","red","yellow","green","maroon","purple"]),op=fr(ht,["neutral","white","black"]),Kn=fr(xe,["lg","md","sm","xs"]),np=[...Kn,"profile-sm","profile-md","profile-lg"],cp=Bn,ip=yo,sp=Kn,lp=Kn,dp=Kn,G=u`--arc•input•mask`,b=u`--arc•size`,M=u`--arc•space`,Dr=u`--arc•avatar`,se=u`${Dr}•chars`,Ai=u`

  &[data-size=lg] {
    ${Dr}•font•size: var(${b}•16);
    ${Dr}•size: 2.5em; /* target: 40px @ 100% */
    ${se}•1: var(${b}•16);
    ${se}•2: var(${b}•14);
    ${se}•3: var(${b}•12);
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    ${Dr}•font•size: var(${b}•14);
    ${Dr}•size: 2.2857142857em; /* target: 32px @ 100% (32 / 14 * 1em) */
    ${se}•1: var(${b}•14);
    ${se}•2: var(${b}•12);
    ${se}•3: var(${b}•10);
  }

  &[data-size=sm] {
    ${Dr}•font•size: var(${b}•12);
    ${Dr}•size: 2em; /* target: 24px @ 100% */
    ${se}•1: var(${b}•12);
    ${se}•2: var(${b}•10);
    ${se}•3: var(${b}•8);
  }

  &[data-size=xs] {
    ${Dr}•font•size: var(${b}•10);
    ${Dr}•size: 2em; /* target: 20px @ 100% */
    ${se}•1: var(${b}•10);
    ${se}•2: var(${b}•8);
    ${se}•3: var(${b}•6);
  }

`,up=u`

  &[data-size=profile-lg] {
    ${Dr}•font•size: var(${b}•40);
    ${Dr}•size: 4em;
  }

  &[data-size=profile-md] {
    ${Dr}•font•size: var(${b}•32);
    ${Dr}•size: 3em;
  }

  &[data-size=profile-sm] {
    ${Dr}•font•size: var(${b}•28);
    ${Dr}•size: 2.2857142857em; /* target: 64px @ 100% (64 / 28 * 1em) */
  }

`,Zl=u`

  [arc-avatar] {
    ${Dr}•font•size: inherit;
    ${Dr}•size: inherit;
    ${se}•1: inherit;
    ${se}•2: inherit;
    ${se}•3: inherit;
  }

`,yt=u`${Dr}•fg`,He=u`${Dr}•bg`,hp=u`
@layer arc-components {

  [arc-avatar] {
    /* Colors --------------------------------------------------------• */
    ${yt}: var(--arc-avatar-color, var(--arc-color-mono-white));

    &:has([data-color=blue]) { /* @default color */
      ${He}: var(--arc-color-light-blue-400);
    }
    &:has([data-color=purple]) {
      ${He}: var(--arc-color-light-purple-400);
    }
    &:has([data-color=red]) {
      ${He}: var(--arc-color-light-red-400);
    }
    &:has([data-color=yellow]) {
      ${He}: var(--arc-color-light-yellow-400);
    }
    &:has([data-color=green]) {
      ${He}: var(--arc-color-light-green-400);
    }
    &:has([data-color=maroon]) {
      ${He}: var(--arc-color-light-maroon-400);
    }
    &:has([data-color=orange]) {
      ${He}: var(--arc-color-light-orange-400);
    }
    &:has([data-color=mint]) {
      ${He}: var(--arc-color-light-mint-400);
    }

    /* RESERVED COLORS -----------------------------------------------• */
    &:has([data-color=black]) {
      ${yt}: light-dark(var(--arc-color-mono-white), var(--arc-color-mono-black));
      ${He}: light-dark(var(--arc-color-mono-black), var(--arc-color-mono-white));
    }

    &:has([data-color=neutral]) { /* @default anonymous */
      ${yt}: var(--arc-color-fg-secondary);
      ${He}: var(--arc-color-alpha-subtle);
    }

    &:has([data-color=white]) {
      ${yt}: var(--arc-color-mono-black);
      ${He}: var(--arc-color-mono-white);
    }

    /* SIZES ---------------------------------------------------------• */
    ${Ai}
    ${up}
  }

  /* CORE AVATAR STYLES ----------------------------------------------• */
  [arc-avatar]:not([hidden]) {
    font-size: var(--arc-avatar-font-size, var(${Dr}•font•size));

    flex: none;
    align-self: center;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--arc-avatar-size, var(${Dr}•size));
    aspect-ratio: 1 / 1;
    line-height: normal;

    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: var(--arc-border-radius-circle);

    opacity: var(--arc-alpha-100);
    transition: opacity 200ms ease-out;

    &[data-is-inactive] {
      opacity: var(--arc-alpha-50);
    }

    [data-num-length] {
      --arc-button-font-size: var(${se}•1);
    }

    [data-num-length='2'] {
      --arc-button-font-size: var(${se}•2);
    }

    [data-num-length='3'] {
      --arc-button-font-size: var(${se}•3);
    }


    /* INNER ELEMENTS ------------------------------------------------• */

    [data-element=counter] {
      ${Dr}•pointer•events: all;

      /* Inter-Component Communication • ArcButton --------------------• */
      --arc-button-width: 100%;
      --arc-button-height: auto;
      --arc-button-aspect-ratio: 1 /1;
      --arc-button-padding: 0;
      --arc-button-background: var(--arc-avatar-background, var(${He}));
      --arc-button-color: var(--arc-avatar-color, var(${yt}));

      &:disabled {
        --arc-button-cursor: default;
      }
    }

    [data-element=image] {
      object-fit: cover;

      /* Hides problematic image */
      &:is([data-not-loaded], [data-has-error]) {
        ${Dr}•visibility: hidden;
      }

      /* Hides subsequent elements with valid image */
      &:not([data-has-error]) ~ [data-element] {
        ${yt}: transparent;
        ${He}: none;
      }
    }

    :is(
      [data-element=counter],
      [data-element=initial],
      [data-element=anonymous]
    ) {
      background: var(${He});
      color: var(${yt});
    }

    :is([data-element=initial]) {
      font-size: var(--arc-avatar-initial-font-size, inherit);
      text-transform: var(--arc-avatar-text-transform, capitalize);
    }

    [data-element] {
      flex: none;
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      border-radius: inherit;
      font-weight: var(--arc-font-weight-600);
      visibility: var(${Dr}•visibility, unset);

      transition-duration: 200ms;
      transition-behavior: allow-discrete;
      transition-timing-function: linear;
      transition-property:
        visibility,
        background-color,
        color;

      pointer-events: var(${Dr}•pointer•events, none);
      user-select: none;
      -webkit-user-select: none;
    }
  }

}
`,pp=({children:r,initial:e,color:a,...t})=>(0,i.jsx)("span",{...t,"data-element":"initial","data-color":a,children:r||e}),gp=({isLoaded:r,hasError:e,onLoad:a,onError:t,...o})=>{const n=!r&&""||void 0,c=e&&""||void 0,l=!r||e||void 0;return(0,i.jsx)("img",{...o,hidden:l,"data-element":"image","data-not-loaded":n,"data-has-error":c,onLoad:a,onError:t})},Eo=r=>typeof r=="string"?r:typeof r=="number"?r.toString():Array.isArray(r)?r.map(Eo).join(""):(0,s.isValidElement)(r)?Eo(r.props.children):"",Jl={},vp=(r="id")=>{const e=(Jl[r]??0)+1;return Jl[r]=e,`${r}-${e}`},Br=(r,e="id")=>{const a=(0,s.useId)();return r??`${e}-${a}`},Ot=r=>typeof r=="string",Ql=r=>r!==null&&typeof r=="object",fp=["#9c15ff","#1eb4fb"],rd=({angle:r=60,width:e,height:a})=>{const t=(r-90)*Math.PI/180,o=e/2,n=a/2,c=Math.sqrt(e*e+a*a)/2,l=Math.cos(t)*c,d=Math.sin(t)*c;return{x1:o-l,y1:n-d,x2:o+l,y2:n+d}},mp=(r,e)=>{const a=Ot(r)?r:r.color,t=Ot(r)?e.toString():r.offset?.toString()??e.toString();return(0,i.jsx)("stop",{offset:t,stopColor:a},`${a}-${e}`)},ed=({id:r,angle:e=60,width:a,height:t,stops:o=fp})=>{const{x1:n,y1:c,x2:l,y2:d}=rd({angle:e,width:a,height:t});return(0,i.jsx)("defs",{children:(0,i.jsx)("linearGradient",{gradientUnits:"userSpaceOnUse",id:r,x1:n,x2:l,y1:c,y2:d,children:o.map(mp)})})},zi=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),Ei=r=>{const e=Br(void 0,"arc-ai-gradient");return(0,i.jsxs)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:`url(#${e})`}),ed({id:e,width:640,height:640,stops:["var(--arc-color-logo-ai-purple, #9c15ff)","var(--arc-color-logo-ai-blue, #1eb4fb)"]})]})},_i=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),Pi=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),Ti=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),Ii=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),Ri=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),Mi=r=>(0,i.jsx)("svg",{...r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 87.3C191.5 87.3 87.3 191.5 87.3 320C87.3 448.5 191.5 552.7 320 552.7C448.5 552.7 552.7 448.5 552.7 320C552.7 191.5 448.5 87.3 320 87.3zM267.5 259C278.1 258.9 288.6 260.7 298.5 264.4C307.4 267.6 315.6 272.3 322.8 278.5L311.5 293.5C305.4 288.1 298.3 283.9 290.6 281.2C283 278.5 275 277.1 266.9 277.1C258.8 276.8 250.9 278.9 243.9 282.9C237.6 286.8 233.9 293.9 234.4 301.4C234.3 304.3 234.9 307.2 236.2 309.9C237.7 312.4 239.7 314.4 242.3 315.8C245.7 317.7 249.4 319.3 253.2 320.3C257.6 321.6 262.9 323 269.1 324.5C278.9 326.8 287.4 329.1 294.6 331.4C301 333.3 307 336.1 312.7 339.7C317.1 342.5 320.8 346.4 323.4 351C325.9 355.9 327.1 361.3 326.9 366.8C327.3 379.6 321.4 391.9 311.1 399.5C298.6 408.2 283.7 412.4 268.5 411.6C256.6 411.6 244.8 409.7 233.5 406.1C222.7 402.8 212.6 397.4 203.9 390.2L214.6 373.6C222.5 379.8 231.2 384.7 240.6 388.4C249.3 391.7 258.6 393.4 268 393.3C277 393.8 285.8 391.6 293.5 387C299.6 383.1 303.2 376.3 303 369.1C303.1 365.9 302.2 362.7 300.5 359.9C298.5 357.1 295.9 354.8 292.9 353.3C288.8 351.1 284.4 349.4 279.9 348.2C274.6 346.7 268.5 345.1 261.6 343.4C252.8 341.1 245.1 339 238.7 336.9C233.1 335.2 227.8 332.7 222.9 329.6C219 327.1 215.9 323.6 213.9 319.4C211.9 314.8 210.9 309.8 211.1 304.7C211 297.9 212.5 291.2 215.5 285.1C218.3 279.4 222.4 274.5 227.5 270.7C232.9 266.7 239 263.7 245.4 262C252.6 260 260.1 259 267.5 259zM432.5 401.5C431 402.3 429 403.1 426.6 404.2C424.2 405.3 421.4 406.3 418.3 407.3C415 408.4 411.6 409.2 408.1 409.8C404.3 410.5 400.5 410.8 396.7 410.8C388.3 411 380 408.4 373.3 403.3C366.4 397.6 362.7 388.9 363.4 380L363.4 281L343.4 281L343.4 261.5L363.4 261.5L363.4 212.4L388.2 212.4L388.2 261.5L421.2 261.5L421.2 281L388.2 281L388.2 372.4C388.2 376.9 390.1 381.3 393.6 384.2C396.8 386.7 400.8 388 404.9 387.9C409.5 388 414 387.1 418.3 385.5C421.2 384.4 424 383.2 426.6 381.7z",fill:"var(--arc-color-logo-studio, #dc424a)"})});var bp;const $p="fa-width-auto",ad="fa-fw",yp="arc-fw",td="arc-aw",xp=r=>typeof r=="number"?`calc(${r/10}rem * var(--arc-internal-font-size))`:r,kp={"arc-svg logo-articulate":(0,i.jsx)(zi,{}),"arc-svg product-ai":(0,i.jsx)(Ei,{}),"arc-svg product-peek":(0,i.jsx)(_i,{}),"arc-svg product-reach":(0,i.jsx)(Pi,{}),"arc-svg product-review":(0,i.jsx)(Ti,{}),"arc-svg product-rise":(0,i.jsx)(Ii,{}),"arc-svg product-storyline":(0,i.jsx)(Ri,{}),"arc-svg product-studio":(0,i.jsx)(Mi,{})},yy=r=>r&&r.length>0&&r?.includes("arc-svg")?kp[r]:bp("span",{className:r}),od=r=>{const e=r.includes($p),a=r.includes(ad),t=r.includes(yp),o=r.includes(td);return{hasFaAutoWidth:e,hasFaFixedWidth:a,hasArcFixedWidth:t,hasArcAutoWidth:o}},nd=r=>((0,s.isValidElement)(r)&&r.type===Sr?r.props.icon:r)??void 0,Li=r=>{const e=nd(r);if(typeof e!="string")return e;const{hasFaFixedWidth:a,hasArcFixedWidth:t,hasArcAutoWidth:o}=od(e);return!a&&!t&&!o?`${e} ${td}`:e},wp=r=>{const e=nd(r);if(typeof e!="string")return e;let a=e;const{hasArcFixedWidth:t,hasFaFixedWidth:o}=od(a);return t&&!o&&(a=`${a} ${ad}`),a},Cp=u`--arc•icon`,Fa=u`${Cp}•fg`,Sp=u`
@layer arc-components {

[arc-icon] {
  ${Fa}: currentcolor;

  color: var(--arc-icon-color, var(${Fa}));
  opacity: var(--arc-icon-opacity, 1);

  &:not([hidden]) {
    /* hand-off to actual interior FontAwesome icon node */
    --fa-display: var(--arc-icon-display, inline-flex);
    --fa-line-height: var(--arc-icon-fa-line-height, 1);

    flex: none;
    align-self: var(--arc-icon-align-self, unset);
    display: var(--fa-display);
    align-items: center;
    justify-content: center;
    height: var(--arc-icon-height, auto);
    max-height: var(--arc-icon-max-height, none);
    margin-block: var(--arc-icon-margin-block, unset);
  }

  &:has(svg) {
    align-self: var(--arc-icon-svg-align-self, center);

    svg {
      font-size: var(--arc-icon-size, 1em);
      width: 1em;
      height: 1em;
      fill: var(--arc-icon-color, var(${Fa}));
    }
  }

  [class|=fa] {
    font-size: var(--arc-icon-size, 1em);
    align-items: center;
    justify-content: center;

    /* fix for FontAwesome line-height oddities in certain cases */
    line-height: normal !important;

    &[class*='fa-stack-'] {
      font-size: var(--arc-icon-stack-size, inherit);
    }
  }

  /* Explicit opt-in via Arc’s helper class */
  .arc-aw {
    --fa-width: var(--arc-icon-fa-width, auto);
  }
}

/* utility icon colorization */
[arc-icon] {
  &[arc-icon-status=brand],
  &[arc-icon-status=announcement] {
    ${Fa}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status=info] {
    ${Fa}: var(--arc-color-fg-info-mid);
  }

  &[arc-icon-status=success] {
    ${Fa}: var(--arc-color-fg-success-mid);
  }

  &[arc-icon-status=warning] {
    ${Fa}: var(--arc-color-fg-warning-mid);
  }

  &[arc-icon-status=error],
  &[arc-icon-status=critical] {
    ${Fa}: var(--arc-color-fg-critical-mid);
  }

  &[arc-icon-status=processing] {
    ${Fa}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status] {
    --fa-primary-color: var(--arc-icon-color, currentcolor);
    --fa-secondary-color: color-mix(in srgb, currentcolor 20%, transparent);
    --fa-secondary-opacity: 1;
  }
}

}
`,Ap=r=>(0,i.jsx)(Sr,{...r,icon:"fa-kit fa-articulate arc-aw",color:r?.color||"var(--arc-color-logo-articulate, #000000)","aria-label":r?.["aria-label"]||"Articulate Logo"}),zp=r=>(0,i.jsx)(Sr,{...r,icon:"fa-kit fa-product-badge-ai arc-aw","aria-label":r?.["aria-label"]||"Articulate AI Logo",gradient:r?.gradient||"ai"}),Ep=r=>(0,i.jsx)(Sr,{...r,icon:"fa-kit fa-product-badge-peek arc-aw",color:r?.color||"var(--arc-color-logo-peek, #497add)","aria-label":r?.["aria-label"]||"Articulate Peek Logo"}),_p=r=>(0,i.jsx)(Sr,{...r,icon:"fa-kit fa-product-badge-reach arc-aw",color:r?.color||"var(--arc-color-logo-reach, #0081de)","aria-label":r?.["aria-label"]||"Articulate Reach Logo"}),Pp=r=>(0,i.jsx)(Sr,{...r,icon:"fa-kit fa-product-badge-review arc-aw",color:r?.color||"var(--arc-color-logo-review, #35b062)","aria-label":r?.["aria-label"]||"Articulate Review Logo"}),Tp=r=>(0,i.jsx)(Sr,{...r,icon:"fa-kit fa-product-badge-rise arc-aw",color:r?.color||"var(--arc-color-logo-rise, #ff6602)","aria-label":r?.["aria-label"]||"Articulate Rise Logo"}),Ip=r=>(0,i.jsx)(Sr,{...r,icon:"fa-kit fa-product-badge-storyline arc-aw",color:r?.color||"var(--arc-color-logo-storyline, #c560b3)","aria-label":r?.["aria-label"]||"Articulate Storyline Logo"}),Rp=r=>(0,i.jsx)(Sr,{...r,icon:"fa-kit fa-product-badge-studio arc-aw",color:r?.color||"var(--arc-color-logo-studio, #dc424a)","aria-label":r?.["aria-label"]||"Articulate Studio Logo"}),Sr=({children:r,icon:e="fa-regular fa-circle-dashed",color:a,size:t,style:o,gradient:n,...c})=>{const l={...o,"--arc-icon-size":xp(t),"--arc-icon-color":a},d=!!(c["aria-label"]||c["aria-labelledby"]),h=wp(e),p=typeof h=="string"&&h.length>0?(0,i.jsx)("span",{className:h}):h;return(0,i.jsx)("span",{"aria-hidden":!d||void 0,...c,"arc-icon":"",style:l,"arc-gradient":n,children:r||p})};Cr("ArcIcon",Sp),Sr.Articulate=Ap,Sr.AI=zp,Sr.Peek=Ep,Sr.Reach=_p,Sr.Review=Pp,Sr.Rise=Tp,Sr.Storyline=Ip,Sr.Studio=Rp,Sr.SVGArticulate=zi,Sr.SVGAI=Ei,Sr.SVGPeek=_i,Sr.SVGReach=Pi,Sr.SVGReview=Ti,Sr.SVGRise=Ii,Sr.SVGStoryline=Ri,Sr.SVGStudio=Mi;const Mp=({children:r,icon:e,color:a,...t})=>(0,i.jsx)("span",{...t,"data-element":"anonymous","data-color":"neutral",children:r||(0,i.jsx)(Sr,{icon:e})}),cd="blue",id="neutral",Lp="fa-solid fa-user arc-aw",ji=(0,s.forwardRef)(({children:r,size:e,color:a,isActive:t=!0,isAnonymous:o,alt:n,src:c,name:l,email:d,...h},p)=>{const[v,g]=(0,s.useState)(!1),[f,m]=(0,s.useState)(!1),y=L=>{g(!0),m(!1),h.onLoad?.(L)},w=L=>{g(!1),m(!0),h.onError?.(L)},x=ep(l||d),C=!!x,z=o||(!v||f)&&!C,k=!z&&!!c&&!f||void 0,T=(z&&id||void 0)??(a||void 0)??tp(String(d||l||void 0),Yl,cd)??cd,P={src:c,alt:n,isLoaded:v,hasError:f,onLoad:y,onError:w};return(0,s.useEffect)(()=>{z&&g(!1)},[z]),(0,i.jsx)("span",{...h,ref:p,"arc-avatar":"","data-is-inactive":!t||void 0,"data-size":e,"aria-label":(h.title??l??d)||void 0,children:r||(z?(0,i.jsx)(Mp,{icon:Lp,color:id}):(0,i.jsxs)(i.Fragment,{children:[k&&(0,i.jsx)(gp,{...P}),C&&(0,i.jsx)(pp,{initial:x,color:T})]}))})});Cr("ArcAvatar",hp);const ke=u`${Dr}•text`,xt=u`${Dr}•subtext`,Nt=u`${Dr}•gap`,jp=u`
@layer arc-components {

  [arc-avatar-text] {
    ${ke}•font•size: var(${b}•14);
    ${xt}•font•size: var(${b}•12);
    ${Nt}: var(${b}•8);

    ${ke}•overflow: unset;
    ${ke}•text•overflow: unset;
    ${ke}•white•space: unset;

    &[data-overflow=truncate] {
      ${ke}•overflow: hidden;
      ${ke}•text•overflow: ellipsis;
      ${ke}•white•space: nowrap;
    }

    &:has([data-size=inherit]) {
      ${ke}•font•size: 1em;
      ${xt}•font•size: 0.875em;
      ${Nt}: 0.5em;
    }

    &:has([data-size=lg]) {
      ${ke}•font•size: var(--arc-font-size-14);
      ${xt}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=md]) { /* @default size */
      ${ke}•font•size: var(--arc-font-size-14);
      ${xt}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=sm]) {
      ${ke}•font•size: var(--arc-font-size-14);
      ${xt}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=xs]) {
      ${ke}•font•size: var(--arc-font-size-12);
      ${xt}•font•size: var(--arc-font-size-12);
      ${Nt}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { ${Nt}: var(${b}•12); }
    &[data-gap=sm] { ${Nt}: var(${b}•4); }
  }

  [arc-avatar-text] {
    font-size: var(--arc-avatar-text-font-size, var(${ke}•font•size));
    display: inline-flex;
    align-items: center;
    gap: var(--arc-avatar-text-gap, var(${Nt}));
    line-height: normal;
    min-width: 0%; /* @note: allows truncation/ellipsis for [data-element=text] */

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-avatar-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-avatar-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    [data-element=text] {
      flex: 1;
      text-align: start;
    }

    [data-element=subtext] {
      display: var(--arc-avatar-subtext-display, block);
      font-size: var(--arc-avatar-subtext-font-size, var(${xt}•font•size));

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: var(--arc-avatar-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(${ke}•overflow);
      text-overflow: var(${ke}•text•overflow);
      white-space: var(${ke}•white•space);
    }
  }

}
`,Dp="Anonymous",Wn=({children:r,avatar:e={},subtext:a,size:t,gapSize:o,overflow:n,isStrong:c,...l})=>{const d=e.anonymousName||Dp,h=e.name||e.email||e.src,p=e.name||e.email,v=e.isAnonymous||!h,g=r||(v?d:p),f=o!=="inherit"?o:void 0,m=n!=="inherit"?n:void 0;return(0,i.jsxs)("span",{...l,"arc-avatar-text":"","data-gap":f,"data-overflow":m,"is-strong":c?"":void 0,children:[(0,i.jsx)(ji,{...e,isAnonymous:v,size:t}),(0,i.jsxs)("span",{"data-element":"text",children:[g,a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("small",{"data-element":"subtext",children:a})]})]})]})};Cr("ArcAvatarText",jp);const Bp=u`
@layer arc-components {

  [arc-avatar-pile] {
    --arc-button-inline-spacing: 0;

    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${Ai}
    ${Zl}

    /* Cutout (mask) a portion of subsequent avatars ---------------• */
    [arc-avatar]+[arc-avatar] {
      margin-left: -0.125em;

      /* magic! */
      mask: radial-gradient(
        50% 50% at -43% 50%,
        transparent 110%,
        black 110%
      ) padding-box;
    }

  }

}
`,Op=({size:r="md",...e})=>(0,i.jsx)("div",{...e,"arc-avatar-pile":"","data-size":r});Cr("ArcAvatarPile",Bp);const tt=typeof window>"u"?s.useEffect:s.useLayoutEffect,Di=[...pt],Bi=[...Oa],Np=[...Rt],sd=fr(Wr,["common"]),Fp=fr(Wr,["ai","brand"]),Oi=["nw-corner","top-start","top-center","top-end","ne-corner","left-start","right-start","left-center","center","right-center","left-end","right-end","sw-corner","bottom-start","bottom-center","bottom-end","se-corner"],Ni=["ignore","flip"],ld=["compact","comfortable"],_o=(r,e=1/0,a=" ")=>[...r].flat(e)?.filter(Boolean)?.join(a),Ve={popover:Di[0],anchorAt:Oi[13],boundary:Ni[0],tryFallbacks:!1,variant:sd[0],scheme:Bi[0],density:ld[0],isInverse:!1,hasTail:!1,tailSize:8,offset:0},Fi=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("position-anchor","--anchor-name")&&CSS.supports("container-type","anchored"),Hp=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("container-type","anchored"),Xn={canAnchor:Fi(),canAnchoredContainers:Hp()},dd=!Xn.canAnchor,ud=["center","nw-corner","ne-corner","se-corner","sw-corner"],hd=({canHaveTail:r,tailSize:e})=>{if(!r)return{cssTailVar:"",floatingTailPx:0};const a=Math.abs(Number(e||Ve.tailSize)),t=a>0?a:Ve.tailSize;return{cssTailVar:t===Ve.tailSize?"":`${t}px`,floatingTailPx:t}},pd=(r,e="toggle",a=document)=>{const t=a.getElementById(r);({toggle:()=>t?.togglePopover(),show:()=>t?.showPopover(),hide:()=>t?.hidePopover()})[e]()},Po=new WeakMap,Hi=r=>{const e=String(r??"").trim();if(e==="none")return"none";let a=e.replace(/[^\w-]/g,"-");for(;a.startsWith("-");)a=a.slice(1);for(;a.endsWith("-");)a=a.slice(0,-1);return a?`--${a}`:"--"},To=r=>{const e=Hi(r);return e==="none"?null:e},gd=(r,e)=>{const a=To(e);if(!a)return()=>{};let t=Po.get(r);return t||(t=new Set,Po.set(r,t)),t.has(a)?()=>{}:(t.add(a),r.style.setProperty("anchor-name",_o([...t],1/0,", ")),()=>{const o=Po.get(r);if(o){if(o.delete(a),o.size===0){Po.delete(r),r.style.removeProperty("anchor-name");return}r.style.setProperty("anchor-name",_o([...o],1/0,", "))}})},Io=r=>`${Math.round(r*100)/100}px`,Vp=[{test:(r,e,a)=>r==="y"&&e.includes("top")&&a.includes("top"),value:-1},{test:(r,e,a)=>r==="y"&&e.includes("top")&&a.includes("bottom"),value:-1},{test:(r,e,a)=>r==="y"&&e.includes("bottom")&&a.includes("top"),value:1},{test:(r,e,a)=>r==="x"&&e.includes("left")&&a.includes("left"),value:-1},{test:(r,e,a)=>r==="x"&&e.includes("left")&&a.includes("right"),value:-1},{test:(r,e,a)=>r==="x"&&e.includes("right")&&a.includes("left"),value:1}],Vi=(r,e,a)=>Vp.find(t=>t.test(r,e,a))?.value||0;let Gi;const Gp=()=>typeof window<"u"&&typeof CSS<"u"&&typeof CSS.supports=="function"&&!(CSS.supports("position-anchor","--anchor-name")&&CSS.supports("container-type","anchored")),Ui=()=>(Gi||(Gi=ga.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_5_node_modules_floating-ui_dom_dist_floa-04d176").then(ga.bind(ga,40153))),Gi);Gp()&&Ui().catch(()=>{});const vd=r=>r==="start"||r==="end"?r:"center",Up=r=>{const e=r.split("-")[0];return e==="top"||e==="right"||e==="bottom"||e==="left"?e:null},fd=r=>{const e=Up(r),a=vd(r.split("-")[1]);switch(e){case"top":return{block:"start",inline:a};case"bottom":return{block:"end",inline:a};case"left":return{block:a,inline:"start"};case"right":return{block:a,inline:"end"};default:return{block:"center",inline:"center"}}},md=(r,e)=>r!=="center"&&e!=="center"&&r!==e,bd=(r,e)=>{const a=fd(r),t=fd(e),o=md(a.block,t.block),n=md(a.inline,t.inline);return o&&n?"flip-block-inline":o?"flip-block":n?"flip-inline":""},Kp={...{"top-start":"top-start","top-end":"top-end","right-start":"right-start","right-end":"right-end","bottom-start":"bottom-start","bottom-end":"bottom-end","left-start":"left-start","left-end":"left-end"},...{"top-center":"top","right-center":"right","bottom-center":"bottom","left-center":"left",center:"bottom","nw-corner":"top-start","ne-corner":"top-end","sw-corner":"bottom-start","se-corner":"bottom-end"}},Ki=r=>r.split("-")[0],Wp=r=>r.split("-")[1],Xp=r=>r==="x"?"y":"x",qp=r=>r==="y"?"height":"width",Wi=r=>["top","bottom"].includes(Ki(r))?"y":"x",Yp=r=>Xp(Wi(r)),Zp=(r,e,a,t)=>{const o=Wi(a),n=Yp(a),c=qp(n),l=Ki(a),d=o==="y",h=r.x+r.width/2-e.width/2,p=r.y+r.height/2-e.height/2,v=r[c]/2-e[c]/2;let g;switch(l){case"top":g={x:h,y:r.y-e.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-e.width,y:p};break;default:g={x:r.x,y:r.y}}switch(Wp(a)){case"start":g[n]-=v*(t&&d?-1:1);break;case"end":g[n]+=v*(t&&d?-1:1);break;default:break}return g},Jp=(r,e,a,t)=>{const o=Ki(r),n=Wi(r)==="y",c=o==="left"||o==="top"?-1:1,l=a&&n?-1:1,d=e,h=0;return n?{x:t.x+h*l,y:t.y+d*c}:{x:t.x+d*c,y:t.y+h*l}},$d=r=>({x:r.x,y:r.y,width:r.width,height:r.height}),Qp=({anchorEl:r,popoverEl:e,placement:a,offsetPx:t,tailOffset:o,getTailModifier:n})=>{const c=getComputedStyle(e).direction==="rtl",l=$d(r.getBoundingClientRect()),d=$d(e.getBoundingClientRect());let h=Zp(l,d,a,c);h=Jp(a,t,c,h);const p=h.x+o*n("x",a,a),v=h.y+o*n("y",a,a);e.style.setProperty("left",Io(p)),e.style.setProperty("top",Io(v))},rg=({anchorEl:r,popoverEl:e,anchorAt:a,tryFallbacks:t,offsetPx:o,tailSizePx:n,hasTail:c,isOpen:l})=>{tt(()=>{if(!(l&&!Fi()&&!!r&&!!e))return;const h=r,p=e,v=Kp[a];let g=!0,f;const m=c?Math.max(0,n)*Math.SQRT1_2:0;return Qp({anchorEl:h,popoverEl:p,placement:v,offsetPx:o,tailOffset:m,getTailModifier:Vi}),(async()=>{try{const{autoUpdate:x,computePosition:C,flip:z,offset:k}=await Ui();if(!g)return;const T=[k(o)];t&&T.push(z({fallbackStrategy:"bestFit"}));const P=async()=>{try{const L=await C(h,p,{placement:v,strategy:"fixed",middleware:T});if(!g||!h.isConnected||!p.isConnected)return;const V=L.x+m*Vi("x",L.placement,v),I=L.y+m*Vi("y",L.placement,v);if(p.style.setProperty("left",Io(V)),p.style.setProperty("top",Io(I)),!c||!t){delete p.dataset.fallbacks;return}const D=bd(v,L.placement);D?p.dataset.fallbacks=D:delete p.dataset.fallbacks}catch{}};await P(),f=x(h,p,P)}catch{}})(),()=>{g=!1,f?.()}},[a,r,c,l,o,e,n,t])},qn=1,Ft=2,eg=[{test:(r,e)=>e.top>=r.bottom+qn,value:"bottom"},{test:(r,e)=>e.bottom<=r.top-qn,value:"top"},{test:(r,e)=>e.left>=r.right+qn,value:"right"},{test:(r,e)=>e.right<=r.left-qn,value:"left"}],Ro=r=>{delete r.dataset.fallbacks},Yn=r=>({x:r.left+r.width/2,y:r.top+r.height/2}),ag=(r,e,a,t)=>{const o=Yn(e),n=Yn(a);if(r==="top"||r==="bottom"){const h=Math.abs(t==="rtl"?a.right-e.right:a.left-e.left),p=Math.abs(t==="rtl"?a.left-e.left:a.right-e.right),v=Math.abs(n.x-o.x);return Math.abs(h-p)<=Ft&&v<=Ft||v+Ft<Math.min(h,p)?"center":h<=p?"start":"end"}const c=Math.abs(a.top-e.top),l=Math.abs(a.bottom-e.bottom),d=Math.abs(n.y-o.y);return Math.abs(c-l)<=Ft&&d<=Ft||d+Ft<Math.min(c,l)?"center":c<=l?"start":"end"},tg=(r,e,a,t)=>{const o=eg.find(d=>d.test(e,a));let n;if(o)n=o.value;else{const d=Yn(e),h=Yn(a),p=h.y-d.y,v=h.x-d.x,g=Math.min(e.height,a.height)*.1;Math.abs(p)>g?n=p>=0?"bottom":"top":n=v>=0?"right":"left"}if(vd(r.split("-")[1])==="center")return n;const l=ag(n,e,a,t);return`${n}-${l}`},og=({anchorEl:r,popoverEl:e,anchorAt:a,tryFallbacks:t,isOpen:o,hasTail:n})=>{tt(()=>{if(!e||!Xn.canAnchor)return;if(!n||!t||!o||Xn.canAnchoredContainers||!r){Ro(e);return}const c=a;if(c==="center"||c.includes("corner")){Ro(e);return}const l=r,d=e;let h=!0,p;const v=()=>{const f=l.getBoundingClientRect(),m=d.getBoundingClientRect(),y=getComputedStyle(l).direction==="rtl"?"rtl":"ltr",w=tg(c,f,m,y),x=bd(c,w);c===w?Ro(d):x?d.dataset.fallbacks=x:Ro(d)};return(async()=>{try{const{autoUpdate:m}=await Ui();if(!h)return;p=m(l,d,v),v()}catch{}})(),()=>{h=!1,p?.(),Ro(d)}},[a,r,n,o,e,t])},yd=(r,e=" ")=>r.split(e).map(a=>a.trim()).filter(Boolean),ng=u`
@layer arc-components {

  [arc-spinner] {
    flex: none;
    display: flex;

    position: var(--arc-spinner-position, relative);
    inset: var(--arc-spinner-inset, 0);
    translate: var(--arc-spinner-translate, 0);
    width: var(--arc-spinner-size, 3em);

    border-radius: var(--arc-border-radius-circle);
    aspect-ratio: 1 / 1;
    pointer-events: none;

    [arc-spinner-circle] {
      fill: none;
      stroke: var(--arc-spinner-circle-color, currentcolor);
      opacity: var(--arc-spinner-circle-opacity, var(--arc-alpha-30));
    }

    [arc-spinner-progress] {
      fill: none;
      stroke: var(--arc-spinner-progress-color, var(--arc-color-fg-brand-mid));
      stroke-dasharray: var(--arc-spinner-progress, 0.3334) 1;
      stroke-dashoffset: 0;
      stroke-linecap: round;
      opacity: var(--arc-spinner-progress-opacity, var(--arc-alpha-100));
      animation: var(--arc-spinner-animation-duration, 743ms) arc-spinner-rotate linear infinite;
      transform-origin: 50% 50%;
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }
}
`,Xi=(0,s.forwardRef)(({progress:r,...e},a)=>(0,i.jsxs)("svg",{...e,ref:a,viewBox:"0 0 100 100","arc-spinner":"",style:{"--arc-spinner-progress":r??""},children:[(0,i.jsx)("circle",{"arc-spinner-circle":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"}),(0,i.jsx)("circle",{"arc-spinner-progress":"",cx:"50%",cy:"50%",r:"45%",strokeWidth:"12.5%",pathLength:"1"})]}));Xi.displayName="ArcSpinner",Cr("ArcSpinner",ng);const cg=(...r)=>console.log(...r),xd=(...r)=>console.warn(...r),ig=(...r)=>console.error(...r),Ht=u`--arc•icon•text`,Mo=u`${Ht}•font•size`,kd=u`${Ht}•icon`,qi=u`${Ht}•text`,wd=u`${Ht}•subtext`,ba=u`${Ht}•fg`,Ha=u`${Ht}•gap`,ot=u`${kd}•size`,Cd=u`${kd}•vertical•align`,Lo=u`${qi}•overflow`,Zn=u`${qi}•text•overflow`,Jn=u`${qi}•white•space`,Qn=u`${wd}•font•size`,Sd=u`${wd}•fg`,sg=u`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    ${ba}: currentcolor;
  }

  &[data-variant=primary] {
    ${ba}: var(--arc-color-fg-primary);
  }

  &[data-variant=secondary] {
    ${ba}: var(--arc-color-fg-secondary);
  }

  &[data-variant=inverse] {
    ${ba}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant=brand] {
    ${ba}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant=info] {
    ${ba}: var(--arc-color-fg-info-stark);
  }

  &[data-variant=success] {
    ${ba}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=warning] {
    ${ba}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=critical] {
    ${ba}: var(--arc-color-fg-critical-mid);
  }

`,lg=u`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    ${Mo}: 1em;
    ${Qn}: 0.75em;
    ${ot}: 1em;
    ${Ha}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    ${Mo}: var(--arc-font-size-14);
    ${Qn}: var(--arc-font-size-12);
    ${Ha}: var(${M}•3);
  }

  &[data-size=sm] {
    ${Mo}: var(--arc-font-size-12);
    ${Qn}: var(--arc-font-size-12);
    ${Ha}: var(${M}•3);
  }

  /* Gap Sizes */

  &[data-gap=lg] { ${Ha}: var(${M}•12); } /* 12px @ 100% */
  &[data-gap=md] { ${Ha}: var(${M}•8); }  /* 8px @ 100% */
  &[data-gap=sm] { ${Ha}: var(${M}•3); }  /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { ${ot}: var(${b}•24); }
  &[icon-size=lg] { ${ot}: var(${b}•20); }
  &[icon-size=md] { ${ot}: var(${b}•16); }
  &[icon-size=sm] { ${ot}: var(${b}•14); }
  &[icon-size=xs] { ${ot}: var(${b}•12); }
`,dg=u`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${Sd}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${ba}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${ot}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: baseline;

  &[data-layout=inline] {
    ${Lo}: unset;
    ${Zn}: unset;
    ${Jn}: unset;

    ${Cd}: calc((var(${ot}) - var(${Mo})) / -2);

    &:has(svg) { ${Cd}: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    ${Lo}: visible;
    ${Zn}: unset;
    ${Jn}: normal;

    &[data-overflow=truncate] {
      ${Lo}: hidden;
      ${Zn}: ellipsis;
      ${Jn}: nowrap;
    }
  }

`,ug=u`
@layer arc-components {

  [arc-icon-text] {
    ${sg}
    ${lg}
    ${dg}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(${Mo}));
    color: var(--arc-icon-text-text-color, var(${ba}));
    line-height: var(--arc-icon-text-line-height, inherit);

    [data-element=icon] {
      display: contents;
    }

    [data-element] {
      /* @note: SVG alignment mitigation strategy; presents in multiple components
       * Badges, CheckboxBars, RadioBars, supporting IconText cases like Links, etc. when using SVG icons.
       */
      :where(svg) {
        flex: none;
        align-self: var(--arc-icon-text-svg-align-self, normal);
        display: var(--arc-icon-text-svg-display, inline-block) !important;
        width: var(--arc-icon-text-svg-width, 1.25em) !important;
        height: var(--arc-icon-text-svg-height, auto) !important;
        max-height: var(--arc-icon-text-svg-max-height, 1lh);
        fill: var(--arc-icon-text-svg-fill, currentColor);
        vertical-align: var(--arc-icon-text-svg-vertical-align, text-bottom) !important;
        overflow: var(--arc-icon-text-svg-overflow, visible) !important;
      }
    }

    [data-element=text],
    [data-element=subtext] {
      position: relative;
      hyphens: var(--arc-icon-text-hyphens, auto);
    }

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-icon-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-icon-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    /* @default • gutter layout */
    &[data-layout=gutter] {
      display: inline-flex;
      align-items: var(--arc-icon-text-align-items, first baseline);
      gap: var(--arc-icon-text-gap, var(${Ha}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(${Lo}));

      &[is-flipped] { flex-direction: row-reverse; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: var(--arc-icon-text-subtext-display, block);
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(${Qn}));
        color: var(--arc-icon-text-subtext-color, var(${Sd}));
        padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(${Lo}));
        text-overflow: var(--arc-icon-text-text-overflow, var(${Zn}));
        white-space: var(--arc-icon-text-white-space, var(${Jn}));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(${Ha})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(${Ha})); }
      [data-element=subtext] { display: contents; }
    }
  }
}

`,hg=fr(Wr,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),le=({children:r,layout:e="gutter",size:a="inherit",variant:t="inherit",tag:o="span",icon:n,iconTooltip:c,text:l,subtext:d,gradient:h,overflow:p,iconSize:v,gapSize:g,isFlipped:f=!1,isStrong:m=!1,...y})=>{const w=r||l,x=!!n,C=!!w,z=e==="gutter",k=e==="inline",T=x&&(!f||z),P=x&&C&&f&&k,L=!!v&&v!=="inherit",V=L&&gt.includes(v)?v:void 0,I=L&&!gt.includes(v)?v:void 0,D=g!=="inherit"?g:void 0,X=p!=="inherit"?p:void 0,E=Li(n),ar=typeof E=="string"?(0,i.jsx)(Sr,{icon:E,size:I,gradient:h}):E,W=c?(0,i.jsx)(sc,{text:c,children:ar}):ar;return(0,i.jsxs)(o,{...y,"arc-icon-text":"","data-variant":t,"data-layout":e,"data-overflow":X,"data-size":a,"data-gap":D,"icon-size":V,"is-flipped":f?"":void 0,"is-strong":m?"":void 0,children:[T&&(0,i.jsx)("span",{"data-element":"icon",children:W}),C&&(0,i.jsxs)("span",{"data-element":"text",children:[w,!!d&&(z?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("small",{"data-element":"subtext",children:d})]}):(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("span",{"data-element":"subtext",children:d})]}))]}),P&&(0,i.jsx)("span",{"data-element":"icon",children:W})]})};Cr("ArcIconText",ug);const $a={...Ve,popover:Di[2],anchorAt:Oi[2],boundary:Ni[1],tryFallbacks:!0,scheme:Bi[3],offset:4,isStrong:!0,hasTail:!0,isEnabled:!0},rc=new WeakSet,pg=100,gg=100;let Yi=!0,Zi=null;const vg=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(:focus-visible)"),fg=r=>r instanceof Element?vg?r.matches(":focus-visible")===!0:Yi:!1,Ji=new WeakMap,Qi=new WeakMap,jo=new Set,ec=(r,e)=>{const a=r.get(e);a!=null&&(clearTimeout(a),r.delete(e))},Ad=(r,e,a,t)=>{const o=window.setTimeout(()=>{t(),r.delete(e)},a);r.set(e,o)},zd="[aria-describedby]",mg=r=>typeof r=="object"&&r!==null&&r.hasAttribute?.("popover")===!0,Ed=r=>r instanceof HTMLElement&&r.getAttribute("role")==="tooltip"&&mg(r),bg=r=>!!r&&(r.tagName==="LABEL"||r.hasAttribute("arc-label")),$g=r=>r?.match(/\S+/g)??[],rs=(r,e)=>{const a=oa(e??document.documentElement);if(!a)return null;const t=a.querySelector(`[aria-describedby~="${r}"]`);return t?t.closest("label,[arc-label]")??t:null},yg=r=>{if(!(r instanceof Element))return null;const e=r.closest?.(zd);if(e){const t=e.getAttribute("aria-describedby")??"";if(t)return{anchor:e.closest?.("label,[arc-label]")??e,tooltipId:t}}let a=r;for(;a;){if(bg(a)){const t=a.querySelector?.(zd),o=t?.getAttribute?.("aria-describedby")??"";if(t&&o)return{anchor:a,tooltipId:o}}a=a.parentElement}return null},xg=r=>{if(!(r instanceof Element))return null;const e=r.closest?.('[role="tooltip"][popover]')??null;return e instanceof HTMLElement?e:null},kg=r=>r?.id?rs(r.id,r):null,wg=r=>{const e=xg(r),a=yg(r);if(!a&&e){const d=kg(e);return!d||!e.id?null:{anchor:d,tooltip:e}}if(!a)return null;const{anchor:t,tooltipId:o}=a;if(!o)return null;const n=oa(r);if(!n)return null;const c=$g(o),l=e??c.map(d=>n.getElementById(d)).find(d=>Ed(d))??null;return Ed(l)?{anchor:t,tooltip:l}:null},Cg=(r,e,a)=>{const t=a instanceof Element?a:null;if(!t)return!1;const o=r===t||r.contains(t),n=e===t||e.contains(t);return o||n},_d=r=>{r.isConnected&&(r.showPopover?.(),jo.add(r))},Pd=r=>{r.isConnected&&(r.hidePopover?.(),jo.delete(r))},Sg=(r,e)=>{if(ec(Qi,r),ec(Ji,r),!e){_d(r);return}Ad(Ji,r,pg,()=>_d(r))},es=(r,e)=>{if(ec(Ji,r),ec(Qi,r),!e){Pd(r);return}Ad(Qi,r,gg,()=>Pd(r))},Ag=()=>{jo.forEach(r=>{es(r,!1)})},Do=(r,e,a,t)=>{const o=wg(e);if(!o)return;const{anchor:n,tooltip:c}=o;if(r){Sg(c,t);return}Cg(n,c,a)||es(c,t)};let ac=null,tc=null,oc=null,nc=null,cc=null,ic=null,Vt=null,Bo=null;const Td=r=>{if(!r&&typeof document>"u")return;const e=r?oa(r):document;if(!e||rc.has(e))return;ic=t=>{Yi=!1,Zi=t.target},Vt=()=>{Zi=null},ac=t=>Do(!0,t.target,void 0,!0),oc=t=>Do(!1,t.target,t.relatedTarget,!0),tc=t=>{fg(t.target)&&Do(!0,t.target,void 0,!1)},nc=t=>{const o=t.relatedTarget??Zi;Do(!1,t.target,o,!1)},cc=t=>{t.key==="Tab"&&(Yi=!0),t.key==="Escape"&&(jo.size>0&&t.preventDefault(),Do(!1,t.target,void 0,!1),jo.forEach(o=>es(o,!1)))},Bo=t=>{if(t.newState!=="open")return;const{target:o}=t;if(o instanceof HTMLElement&&o.getAttribute("role")!=="tooltip"&&o.getAttribute("popover")!=="manual"){try{if(!o.matches("[popover]:popover-open"))return}catch{return}Ag()}},[["pointerdown",ic],["pointerup",Vt],["pointercancel",Vt],["pointerover",ac],["focusin",tc],["pointerout",oc],["focusout",nc],["keydown",cc]].forEach(([t,o])=>{e.addEventListener(t,o)}),e.addEventListener("toggle",Bo,!0),rc.add(e)},zg=()=>{if(!rc.has(document)||typeof document>"u")return;[["pointerdown",ic],["pointerup",Vt],["pointercancel",Vt],["pointerover",ac],["focusin",tc],["pointerout",oc],["focusout",nc],["keydown",cc]].forEach(([e,a])=>{a&&document.removeEventListener(e,a)}),Bo&&document.removeEventListener("toggle",Bo,!0),ac=null,tc=null,oc=null,nc=null,cc=null,ic=null,Vt=null,Bo=null,rc.delete(document)},ya=u`--arc•tooltip`,Id=u`${ya}•subtext`,Rd=u`${ya}•slot`,Eg=u`
@layer arc-components {
  [arc-tooltip] {
    ${ya}•width: max-content;
    ${ya}•max•width: 20em;
    ${ya}•font•size: var(${b}•12);
    ${ya}•padding: var(${M}•10);
    ${Id}•spacing: var(${M}•6);
    ${Rd}•margin•top: var(${M}•8);

    /* Communicates to Popover Engine ------------------------------• */
    --arc-popover-overflow: var(--arc-tooltip-overflow, clip);
    --arc-popover-border-radius: var(--arc-border-radius-md);
    --arc-popover-min-width: var(--arc-tooltip-min-width, auto); /** Ensure tooltip width is driven by content, not anchor width */
    --arc-popover-width: var(--arc-tooltip-width, var(${ya}•width));
    --arc-popover-max-width: var(--arc-tooltip-max-width, var(${ya}•max•width));
    --arc-popover-border: var(--arc-tooltip-border, 0);
    --arc-popover-footer-flex-direction: var(--arc-tooltip-footer-flex-direction, row);
    --arc-popover-font-size: var(--arc-tooltip-font-size, var(${ya}•font•size));
    --arc-popover-padding: var(--arc-tooltip-padding, var(${ya}•padding));
    --arc-popover-tail-x: var(--arc-tooltip-tail-x, 1.125em);
    --arc-popover-tail-y: var(--arc-tooltip-tail-y, 1.125em);
    --arc-popover-line-height: var(--arc-line-height-tight);

    /* Communicates to IconText ----------------------------------• */
    --arc-icon-text-subtext-font-size: var(--arc-tooltip-subtext-font-size, var(${ya}•font•size));
    --arc-icon-text-hyphens: none;
    --arc-icon-text-subtext-spacing: var(--arc-tooltip-subtext-spacing, var(${Id}•spacing));

    [arc-tooltip-content] {
      text-align: var(--arc-tooltip-text-align, unset);
    }

    [arc-tooltip-content] + [arc-tooltip-slot-content] {
      margin-top: var(--arc-tooltip-slot-margin-top, var(${Rd}•margin•top));
    }
  }
}
`,sc=(0,s.forwardRef)(({id:r,children:e,slot:a,isEnabled:t=$a.isEnabled,popover:o=$a.popover,variant:n=$a.variant,anchorAt:c=$a.anchorAt,alternateAnchor:l,boundary:d=$a.boundary,tryFallbacks:h=$a.tryFallbacks,hasTail:p=$a.hasTail,offset:v=$a.offset,scheme:g=$a.scheme,isStrong:f=$a.isStrong,text:m,subtext:y,icon:w,isFlipped:x,...C},z)=>{const k=Br(r,"arc-tooltip"),T=(0,s.useRef)(null);(0,s.useImperativeHandle)(z,()=>T.current);const P=E=>typeof E=="object"&&E!==null&&"tabIndex"in E,L=e,V=!!l;let I=null;(0,s.isValidElement)(L)?I=t?(0,s.cloneElement)(L,{"aria-describedby":k,...P(L.props)&&L.props.tabIndex!=null?{}:{tabIndex:0}}):L:!V&&typeof console<"u"&&xd("\u{1F6A8} ArcTooltip \u2022 expects a single ReactElement child as the trigger.");const D=(0,s.useMemo)(()=>()=>rs(k,T.current),[k]),X=g==="auto"?void 0:g;return(0,s.useEffect)(()=>{if(t)try{Td(T.current)}catch{}},[t]),(0,i.jsxs)(i.Fragment,{children:[I,t&&(0,i.jsxs)(ka,{...C,"arc-tooltip":"",scheme:C?.isInverse?"inverse":X,role:"tooltip",id:k,ref:T,popover:o,anchorAt:c,tryFallbacks:h??d==="flip",variant:n,hasTail:p,offset:v,hidePopoverButton:!0,alternateAnchor:l??D,tag:C?.tag??"span",contentTag:C?.contentTag??"span",children:[m&&(0,i.jsx)(le,{"arc-tooltip-content":"",text:m,subtext:y,icon:w,isFlipped:x,isStrong:f,size:"inherit",variant:"inherit"}),a&&(0,i.jsx)("span",{"arc-tooltip-slot-content":"",children:a})]})]})});Cr("ArcTooltip",Eg);const _g=({isFloating:r,isOnMedia:e,shadow:a})=>[{condition:!r&&e,value:"light-md"},{condition:r&&!e,value:"lg"},{condition:r&&e,value:"light-lg"},{condition:r||a===!0,value:"lg"}],Pg=({isFloating:r,isOnMedia:e,shadow:a})=>_g({isFloating:r,isOnMedia:e,shadow:a}).find(t=>t.condition)?.value??a,Tg=({layout:r,isFloating:e})=>[{condition:r==="icon",value:"icon"},{condition:e||r==="hug",value:"hug"},{condition:!e&&r==="fill",value:"fill"}],Ig=({layout:r,isFloating:e})=>Tg({layout:r,isFloating:e}).find(a=>a.condition)?.value??r,Rg=({scheme:r,isInverse:e})=>[{condition:e,value:"inverse"},{condition:r==="auto",value:void 0},{condition:!0,value:r}],Mg=({scheme:r,isInverse:e})=>{const a=Rg({scheme:r,isInverse:e}).find(t=>t.condition)?.value??r;return a==="auto"?void 0:a},Lg=fr($o,["round","square","narrow"]),jg=fr(xe,["xxl","xl","lg","md","sm"]),Dg=fr(va,["hug","fill","icon"]),Md=fr(Wr,["common","neutral","ai","critical","alpha"]),as=[...Oa],Bg=[...Rn],Ld=fr(Mn,["primary","secondary","tertiary","plain","link-style"]),Og=[...Rt],Ng={circle:"round"},jd=({shape:r})=>Na(r,Ng),ts=fr(Wr,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),Dd={primary:{variant:"common",hierarchy:"primary"},secondary:{variant:"common",hierarchy:"secondary"},tertiary:{variant:"common",hierarchy:"tertiary"},"critical-primary":{variant:"critical",hierarchy:"primary"},"critical-secondary":{variant:"critical",hierarchy:"secondary"},"ai-primary":{variant:"ai",hierarchy:"primary"},"ai-secondary":{variant:"ai",hierarchy:"secondary"},"primary-inverse":{variant:"common",hierarchy:"primary",scheme:"inverse"},"secondary-inverse":{variant:"common",hierarchy:"secondary",scheme:"inverse"},"tertiary-inverse":{variant:"common",hierarchy:"tertiary",scheme:"inverse"}},Fg=(()=>{const r=new Map;return ts.forEach(e=>{const a=Dd[e],t=a.scheme==="inverse"?"inverse":"";r.set(`${a.variant}|${a.hierarchy}|${t}`,e)}),r})(),os=r=>!!(r&&ts.includes(r)),lc=r=>r!==void 0&&os(r)?Dd[r]:void 0,Bd=({variant:r})=>lc(r)?.variant??r,Od=({variant:r,hierarchy:e})=>lc(r)?.hierarchy??e,Nd=({variant:r,isInverse:e,scheme:a})=>lc(r)?.scheme??Mg({scheme:a,isInverse:e}),Hg={variant:Md[0],hierarchy:Ld[0],scheme:as[0]},Vg=({variant:r})=>{const e=lc(r);return e?{variant:e.variant,hierarchy:e.hierarchy,scheme:e.scheme??as[0]}:Hg},Gg=({variant:r,hierarchy:e,scheme:a})=>Fg.get(`${r}|${e}|${a==="inverse"?"inverse":""}`),Ye=u`60deg`,Vr={purple:{50:u`light-dark(#fbf2ff, #210125)`,100:u`light-dark(#efccff, #540160)`,200:u`light-dark(#9c15ff, #ad44cb)`,300:u`light-dark(#680278, #ad44cb)`,400:u`light-dark(#5d3668, #c778de)`,500:u`light-dark(#37003f, #e3a7ff)`,600:u`light-dark(#27002c, #f9ebff)`},blue:{50:u`light-dark(#f4fbff, #00223b)`,100:u`light-dark(#d2f1fe, #02497d)`,200:u`light-dark(#1eb4fb, #169cfe)`,300:u`light-dark(#0179d0, #71bdfe)`,400:u`light-dark(#36648c, #84daff)`,500:u`light-dark(#004273, #b7eaff)`,600:u`light-dark(#012a48, #c2edff)`}},Oo=u`var(--arc-color-overlay-subtle)`,Ug=u`
:root {
  --arc-button-critical-bg-hover: light-dark(
    color-mix(in srgb, var(--arc-color-light-red-600), transparent 90%),
    color-mix(in srgb, var(--arc-color-dark-red-700), transparent 75%)
  );

  /* * + secondary floating button */
  --arc-button-floating-bg: ${Oo};
  --arc-button-floating-bg-processing: ${Oo};
  --arc-button-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-floating-bg-focus: ${Oo};
  --arc-button-floating-bg-hover: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-100));
  --arc-button-floating-bg-active: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-200));

  /* critical + floating button */
  --arc-button-critical-floating-bg-hover: var(--arc-color-bg-critical-subtle);
  --arc-button-critical-floating-bg-active: var(--arc-color-bg-critical-muted);

  /* ai + secondary floating button */
  --arc-button-ai-floating-bg: ${Oo} linear-gradient(${Ye}, transparent, ${Oo});

  /*
  ai variant gradients that can be slightly transitioned: 'bg-color + gradient(transparent -> color)'
  bg-color can be transitioned, gradient not so much. Result: subtle transition of the bg-color through the transparent parts of the gradient.
  */
  --arc-button-gradient-ai-transparent: transparent linear-gradient(${Ye}, transparent, transparent);
  --arc-button-gradient-ai-50: ${Vr.purple[50]} linear-gradient(${Ye}, transparent, ${Vr.blue[50]});
  --arc-button-gradient-ai-100: ${Vr.purple[100]} linear-gradient(${Ye}, transparent, ${Vr.blue[100]});
  --arc-button-gradient-ai-200: ${Vr.purple[200]} linear-gradient(${Ye}, transparent, ${Vr.blue[200]});
  --arc-button-gradient-ai-300: ${Vr.purple[300]} linear-gradient(${Ye}, transparent, ${Vr.blue[300]});
  --arc-button-gradient-ai-400: ${Vr.purple[400]} linear-gradient(${Ye}, transparent, ${Vr.blue[400]});
  --arc-button-gradient-ai-500: ${Vr.purple[500]} linear-gradient(${Ye}, transparent, ${Vr.blue[500]});
  --arc-button-gradient-ai-600: ${Vr.purple[600]} linear-gradient(${Ye}, transparent, ${Vr.blue[600]});
}
`,Kg=u`
:root {
  --arc-link-fg-hover-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 68.2%, transparent);
  --arc-link-fg-disabled-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 30%, transparent);
  --arc-link-focus-disabled-inverse: light-dark(var(--arc-color-light-blue-300), var(--arc-color-light-blue-600));
}
`,Wg=u`
:root {
  /* Tail edge colors for 'variant=ai' popovers */
  --arc-popover-ai-purple-50: ${Vr.purple[50]};
  --arc-popover-ai-purple-200: ${Vr.purple[200]};
  --arc-popover-ai-blue-50: ${Vr.blue[50]};
  --arc-popover-ai-blue-200: ${Vr.blue[200]};
}
`,Xg=u`
:root {
  --arc-progress-bar-gradient-ai-200: linear-gradient(${Ye}, ${Vr.purple[200]} -0.5em, ${Vr.blue[200]});
}
`,qg=u`
:root {
  --arc-banner-gradient-ai-50: linear-gradient(${Ye}, ${Vr.purple[50]}, ${Vr.blue[50]});
  --arc-banner-gradient-ai-100: linear-gradient(${Ye}, ${Vr.purple[100]}, ${Vr.blue[100]});
  --arc-banner-gradient-ai-300: linear-gradient(${Ye}, ${Vr.purple[300]}, ${Vr.blue[300]});
}
`,R=u`--arc•button`,B=u`${R}•fg`,A=u`${R}•bg`,pr=u`${R}•edge`,Ir=u`${R}•border`,Gt=u`${R}•outline`,Ge=u`${R}•label`,we=u`${R}•mask`,Ar=u`${R}•spinner`,ae=u`${R}•icon`,be=u`${ae}•svg`,Yg=u`
  &[data-size=xxl] {
    ${R}•font•size: var(${b}•16);
    ${R}•height: var(${b}•56);
    ${Ar}•size: var(${b}•32);
    ${ae}•size: var(${b}•20);
    ${ae}•size•large: var(${b}•24);
    ${be}•size: var(${b}•25);
    ${be}•size•large: var(${b}•24);
    ${Ge}•spacing: var(${b}•12);
    ${R}•spacing: var(${b}•16);
    ${R}•spacing•square: var(${b}•16);
    ${Ir}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=xl] {
    ${R}•font•size: var(${b}•14);
    ${R}•height: var(${b}•48);
    ${Ar}•size: var(${b}•16);
    ${ae}•size: var(${b}•16);
    ${ae}•size•large: var(${b}•20);
    ${be}•size: var(${b}•20);
    ${be}•size•large: var(${b}•25);
    ${Ge}•spacing: var(${b}•10);
    ${R}•spacing: var(${b}•14);
    ${R}•spacing•square: var(${b}•14);
    ${Ir}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=lg] { /** @default */
    ${R}•font•size: var(${b}•14);
    ${R}•height: var(${b}•40);
    ${Ar}•size: var(${b}•16);
    ${ae}•size: var(${b}•16);
    ${ae}•size•large: var(${b}•20);
    ${be}•size: var(${b}•20);
    ${be}•size•large: var(${b}•25);
    ${Ge}•spacing: var(${b}•8);
    ${R}•spacing: var(${b}•12);
    ${R}•spacing•square: var(${b}•10);
    ${Ir}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=inherit] { /* scalable • mimics default size */
    ${R}•font•size: 1em;
    ${R}•height: 2.5em;
    ${Ge}•font•size: 0.875em;
    ${Ar}•size: 1.125em;
    ${ae}•size: 1.125em;
    ${ae}•size•large: 1.25em;
    ${be}•size: 1.25em;
    ${be}•size•large: 1.375em;
    ${Ge}•spacing: max(8px, 0.5em);
    ${R}•spacing: 0.75em;
    ${R}•spacing•square: 0.625em;
    ${Ir}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=md] {
    ${R}•font•size: var(${b}•14);
    ${R}•height: var(${b}•32);
    ${Ar}•size: var(${b}•16);
    ${ae}•size: var(${b}•14);
    ${ae}•size•large: var(${b}•20);
    ${be}•size: var(${b}•18);
    ${be}•size•large: var(${b}•25);
    ${Ge}•spacing: var(${b}•6);
    ${R}•spacing: var(${b}•10);
    ${R}•spacing•square: var(${b}•8);
    ${Ir}•radius•square: var(--arc-border-radius-md);
  }

  &[data-size=sm] {
    ${R}•font•size: var(${b}•12);
    ${R}•height: var(${b}•24);
    ${Ar}•size: var(${b}•14);
    ${ae}•size: var(${b}•12);
    ${ae}•size•large: var(${b}•14);
    ${be}•size: var(${b}•15);
    ${be}•size•large: var(${b}•18);
    ${Ge}•spacing: var(${b}•4);
    ${R}•spacing: var(${b}•8);
    ${R}•spacing•square: var(${b}•6);
    ${Ir}•radius•square: var(--arc-border-radius-md);
  }

  /* Custom button overrides • metrics based on size: 'inherit' */
  &[arc-button=custom] {
    ${R}•font•weight: normal;
    ${Ir}•radius: 0.25em;
    ${R}•height: auto;
  }
`,Zg=u`
  &[data-layout=hug] {
    ${R}•width: auto;
    ${R}•content•width: fit-content;
  }

  &[data-layout=fill] {
    ${R}•display: flex;
    ${R}•width: 100%;
    ${R}•content•width: 0;
  }

  &:not([data-layout=icon]) {
    ${ae}•width: auto;
  }

  &[data-layout=icon] {
    ${R}•aspect•ratio: 1 / 1;
    ${R}•min•width: min-content;
    ${R}•max•width: none;
    ${R}•spacing: var(${b}•0);

    ${ae}•width: 1.25em;

    &[data-shape=narrow] {
      ${R}•aspect•ratio: auto;
      ${R}•spacing: var(${b}•2);
      ${ae}•width: auto;
    }
  }

  &[data-shape=square] {
    ${R}•spacing: var(${R}•spacing•square);
  }

  &:is(
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    ${Ir}•radius: var(${Ir}•radius•square);
  }

`,Jg=u`
  /** @mitigation • when no variant is set (i.e.: 'custom' buttons) */
  &:not([data-variant]) {
    ${B}: inherit;
    ${A}: transparent;
    ${pr}: transparent;
    ${B}•disabled: var(--arc-color-fg-disabled);
  }

  /** @default */
  &[data-variant=common] {
    ${Ir}•width: var(${b}•1);
    ${Ar}•progress•color: var(--arc-color-border-brand-mid);
    ${Ar}•base•color: var(--arc-color-alpha-mid);

    /** @default */
    &:where([data-hierarchy=primary]) {
      ${B}: var(--arc-color-fg-on-theme-heavy);
      ${A}: var(--arc-color-bg-theme-heavy);
      ${pr}: transparent;

      ${B}•active: var(--arc-color-fg-on-theme-mid);
      ${B}•processing: var(--arc-color-fg-on-theme-stark);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: var(--arc-color-bg-theme-stark);
      ${A}•active: var(--arc-color-bg-theme-mid);
      ${A}•processing: var(--arc-color-bg-theme-stark);
      ${A}•disabled: var(--arc-color-bg-disabled);

      ${Ar}•progress•color: var(--arc-color-mono-white);
      ${Ar}•base•color: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=secondary]) {
      ${B}: var(--arc-color-fg-primary);
      ${A}: transparent;
      ${pr}: var(--arc-color-border-theme-heavy);

      ${B}•active: var(--arc-color-fg-secondary);
      ${B}•processing: var(--arc-color-fg-secondary);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${pr}•active: var(--arc-color-border-theme-mid);
      ${pr}•processing: var(--arc-color-border-theme-subtle);
      ${pr}•disabled: var(--arc-color-border-disabled);

      ${A}•hover: var(--arc-color-bg-neutral-muted);
      ${A}•active: var(--arc-color-bg-neutral-subtle);
      ${A}•processing: transparent;
      ${A}•disabled: transparent;

      &:where([data-layout=icon]) {
        ${pr}: var(--arc-color-border-mid);
        ${pr}•hover: var(--arc-color-border-stark);
        ${pr}•focus: var(--arc-color-border-mid);
      }

      &:where([is-floating]) {
        ${A}: var(--arc-button-floating-bg);
        ${A}•processing: var(--arc-button-floating-bg-processing);
        ${A}•disabled: var(--arc-button-floating-bg-disabled);
        ${A}•focus: var(--arc-button-floating-bg-focus);
        ${A}•hover: var(--arc-button-floating-bg-hover);
        ${A}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${B}: var(--arc-color-fg-primary);
      ${A}: transparent;
      ${pr}: transparent;

      ${B}•active: var(--arc-color-fg-secondary);
      ${B}•processing: var(--arc-color-fg-secondary);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: var(--arc-color-bg-neutral-muted);
      ${A}•active: var(--arc-color-bg-neutral-muted);
      ${A}•processing: var(--arc-color-bg-neutral-muted);
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${B}: var(--arc-color-fg-primary);
      ${A}: transparent;
      ${pr}: transparent;

      ${B}•hover: var(--arc-color-alpha-heavy);
      ${B}•active: var(--arc-color-alpha-heavy);
      ${B}•processing: var(--arc-color-alpha-heavy);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: transparent;
      ${A}•active: transparent;
      ${A}•processing: transparent;
    }
  }

`,Qg=u`
  &[data-variant=neutral] {
    ${Ir}•width: var(${b}•1);
    ${Ar}•progress•color: var(--arc-color-border-brand-mid);
    ${Ar}•base•color: var(--arc-color-alpha-mid);

    &:where([data-hierarchy=primary]) {
      ${B}: var(--arc-color-fg-primary);
      ${A}: transparent;
      ${pr}: var(--arc-color-border-mid);

      ${B}•active: var(--arc-color-fg-secondary);
      ${B}•processing: var(--arc-color-fg-secondary);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: var(--arc-color-bg-neutral-muted);
      ${A}•active: var(--arc-color-bg-neutral-subtle);
      ${A}•processing: transparent;
      ${A}•disabled: transparent;

      &:where([is-floating]) {
        ${A}: var(--arc-button-floating-bg);
        ${A}•processing: var(--arc-button-floating-bg-processing);
        ${A}•disabled: var(--arc-button-floating-bg-disabled);
        ${A}•focus: var(--arc-button-floating-bg-focus);
        ${A}•hover: var(--arc-button-floating-bg-hover);
        ${A}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=secondary]) {
      ${B}: var(--arc-color-fg-neutral-stark);
      ${A}: transparent;
      ${pr}: var(--arc-color-border-mid);

      ${B}•hover: var(--arc-color-fg-primary);
      ${B}•active: var(--arc-color-fg-secondary);
      ${B}•processing: var(--arc-color-fg-secondary);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${pr}•disabled: var(--arc-color-border-disabled);

      ${A}•hover: var(--arc-color-bg-neutral-muted);
      ${A}•active: var(--arc-color-bg-neutral-subtle);
      ${A}•processing: transparent;
      ${A}•disabled: transparent;

      &:where([data-layout=icon]) {
        ${pr}: var(--arc-color-border-mid);
        ${pr}•hover: var(--arc-color-border-stark);
        ${pr}•focus: var(--arc-color-border-mid);
      }

      &:where([is-floating]) {
        ${A}: var(--arc-button-floating-bg);
        ${A}•processing: var(--arc-button-floating-bg-processing);
        ${A}•disabled: var(--arc-button-floating-bg-disabled);
        ${A}•focus: var(--arc-button-floating-bg-focus);
        ${A}•hover: var(--arc-button-floating-bg-hover);
        ${A}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${B}: var(--arc-color-fg-neutral-stark);
      ${A}: transparent;
      ${pr}: transparent;

      ${B}•active: var(--arc-color-fg-secondary);
      ${B}•processing: var(--arc-color-fg-secondary);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: var(--arc-color-bg-neutral-muted);
      ${A}•active: var(--arc-color-bg-neutral-subtle);
      ${A}•processing: var(--arc-color-bg-neutral-muted);
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${B}: var(--arc-color-fg-neutral-stark);
      ${A}: transparent;
      ${pr}: transparent;

      ${B}•hover: var(--arc-color-fg-primary);
      ${B}•active: var(--arc-color-fg-neutral-mid);
      ${B}•processing: var(--arc-color-fg-secondary);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: transparent;
      ${A}•active: transparent;
      ${A}•processing: transparent;
    }
  }

`,rv=u`
  &[data-variant=ai] {
    ${B}•disabled: var(--arc-color-fg-disabled);
    ${pr}•disabled: var(--arc-color-border-disabled);
    ${Ir}•width: var(${b}•2);

    ${we}•bg: var(--arc-gradient-ai-200);
    ${we}•disabled: var(--arc-color-border-disabled);
    ${we}•processing: var(--arc-gradient-ai-100);

    &:where([data-hierarchy=primary]) {
      ${B}: var(--arc-color-fg-on-theme-stark);
      ${A}: var(--arc-button-gradient-ai-500) padding-box;
      ${pr}: transparent;

      ${B}•active: var(--arc-color-fg-neutral-mid);
      ${B}•processing: var(--arc-color-fg-on-theme-heavy);
      ${B}•hover: var(--arc-color-fg-on-theme-heavy);

      ${A}•hover: var(--arc-button-gradient-ai-400) padding-box;
      ${A}•active: var(--arc-button-gradient-ai-600) padding-box;
      ${A}•processing: var(--arc-button-gradient-ai-400) padding-box;
      ${A}•disabled: var(--arc-color-bg-disabled) padding-box;

      ${Ar}•progress•color: var(--arc-color-mono-white);
      ${Ar}•base•color: var(--arc-color-alpha-white-30);

      ${we}•hover: var(--arc-gradient-ai-200);
      ${we}•active: var(--arc-gradient-ai-200);
    }

    &:where([data-hierarchy=secondary]) {
      ${B}: var(--arc-color-fg-primary);
      ${A}: var(--arc-button-gradient-ai-transparent) padding-box; /* allows subtle transition of bg-color through the transparent parts of the gradient */
      ${pr}: transparent;

      ${B}•active: var(--arc-color-fg-neutral-stark);
      ${B}•processing: var(--arc-color-fg-primary);

      ${A}•hover: var(--arc-button-gradient-ai-50) padding-box;
      ${A}•focus: var(--arc-button-gradient-ai-50) padding-box;
      ${A}•active: var(--arc-button-gradient-ai-50) padding-box;
      ${A}•processing: var(--arc-button-gradient-ai-50) padding-box;
      ${A}•disabled: var(--arc-color-bg-disabled) padding-box;

      ${Ar}•progress•color: var(--arc-color-border-brand-mid);

      ${we}•hover: var(--arc-gradient-ai-300);
      ${we}•active: var(--arc-gradient-ai-100);

      &:where([is-floating]) {
        ${A}: var(--arc-button-ai-floating-bg) padding-box;
      }
    }
  }

`,ev=u`
  &[data-variant=alpha] {
    ${Ir}•width: var(${b}•1);
    ${Ar}•base•color: var(--arc-color-alpha-white-30);

    &:where([data-hierarchy=primary]) {
      ${B}: var(--arc-color-mono-black);
      ${A}: var(--arc-color-mono-white);
      ${pr}: transparent;

      ${B}•focus: var(--arc-color-mono-black);
      ${B}•active: var(--arc-color-alpha-black-60);
      ${B}•processing: var(--arc-color-mono-black);
      ${B}•disabled: var(--arc-color-alpha-black-60);

      ${A}•hover: var(--arc-color-alpha-white-70);
      ${A}•active: var(--arc-color-alpha-white-40);
      ${A}•processing: var(--arc-color-alpha-white-40);
      ${A}•disabled: var(--arc-color-alpha-white-15);
    }

    &:where([data-hierarchy=secondary]) {
      ${B}: var(--arc-color-alpha-white-95);
      ${A}: transparent;
      ${pr}: var(--arc-color-alpha-white-80);

      ${B}•active: var(--arc-color-alpha-white-80);
      ${B}•processing: var(--arc-color-alpha-white-95);
      ${B}•disabled: var(--arc-color-alpha-white-50);

      ${A}•hover: var(--arc-color-alpha-white-20);
      ${A}•active: var(--arc-color-alpha-white-40);
      ${A}•processing: var(--arc-color-alpha-white-25);
      ${A}•disabled: transparent;

      ${pr}•hover: var(--arc-color-alpha-white-100);
      ${pr}•focus: var(--arc-color-alpha-white-80);
      ${pr}•active: var(--arc-color-alpha-white-50);
      ${pr}•processing: transparent;
      ${pr}•disabled: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=tertiary]) {
      ${B}: var(--arc-color-alpha-white-95);
      ${A}: transparent;
      ${pr}: transparent;

      ${B}•active: var(--arc-color-alpha-black-60);
      ${B}•processing: var(--arc-color-alpha-white-95);
      ${B}•disabled: var(--arc-color-alpha-white-50);

      ${A}•hover: var(--arc-color-alpha-white-20);
      ${A}•active: var(--arc-color-alpha-white-40);
      ${A}•processing: var(--arc-color-alpha-white-20);
      ${A}•disabled: transparent;
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${B}: var(--arc-color-alpha-white-95);
      ${A}: transparent;
      ${pr}: transparent;

      ${B}•hover: var(--arc-color-alpha-white-60);
      ${B}•active: var(--arc-color-alpha-white-40);
      ${B}•processing: var(--arc-color-alpha-white-95);
      ${B}•disabled: var(--arc-color-alpha-white-30);
    }
  }
`,av=u`
  &[data-variant=critical] {
    ${Ir}•width: var(${b}•1);
    ${Ar}•progress•color: var(--arc-color-border-brand-mid);

    &:where([data-hierarchy=primary]) {
      ${B}: var(--arc-color-fg-on-stark);
      ${A}: var(--arc-color-bg-critical-stark);
      ${pr}: transparent;

      ${B}•active: var(--arc-color-fg-critical-subtle);
      ${B}•processing: var(--arc-color-fg-on-heavy);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: var(--arc-color-bg-critical-heavy);
      ${A}•active: var(--arc-color-bg-critical-heavy);
      ${A}•processing: var(--arc-color-bg-critical-heavy);
      ${A}•disabled: var(--arc-color-bg-disabled);

      ${Ar}•progress•color: var(--arc-color-mono-white);
      ${Ar}•base•color: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=secondary]) {
      ${B}: var(--arc-color-fg-critical-stark);
      ${A}: transparent;
      ${pr}: var(--arc-color-border-critical-stark);

      ${B}•active: var(--arc-color-fg-critical-subtle);
      ${B}•processing: var(--arc-color-fg-critical-stark);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: var(--arc-button-critical-bg-hover);
      ${A}•active: var(--arc-color-bg-critical-muted);
      ${A}•disabled: transparent;

      ${pr}•active: var(--arc-color-border-critical-subtle);
      ${pr}•processing: var(--arc-color-border-critical-stark);
      ${pr}•disabled: var(--arc-color-border-disabled);

      /* "floating" button mitigation */
      &:where([is-floating]) {
        ${A}: var(--arc-button-floating-bg);
        ${A}•processing: var(--arc-button-floating-bg-processing);
        ${A}•disabled: var(--arc-button-floating-bg-disabled);
        ${A}•focus: var(--arc-button-floating-bg-focus);

        ${A}•hover: var(--arc-button-critical-floating-bg-hover);
        ${A}•active: var(--arc-button-critical-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${B}: var(--arc-color-fg-critical-stark);
      ${A}: transparent;
      ${pr}: transparent;

      ${B}•active: var(--arc-color-fg-critical-subtle);
      ${B}•processing: var(--arc-color-fg-critical-stark);
      ${B}•disabled: var(--arc-color-fg-disabled);

      ${A}•hover: var(--arc-button-critical-bg-hover);
      ${A}•active: var(--arc-color-bg-critical-subtle);
      ${A}•processing: var(--arc-color-bg-critical-muted);
      ${A}•disabled: transparent;
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${B}: var(--arc-color-fg-critical-stark);
      ${A}: transparent;
      ${pr}: transparent;

      ${B}•hover: var(--arc-color-fg-critical-mid);
      ${B}•active: var(--arc-color-fg-critical-subtle);
      ${B}•processing: var(--arc-color-fg-critical-stark);
      ${B}•disabled: var(--arc-color-fg-disabled);
    }
  }
`,tv=u`
  /**
   * @deprecated • restores solid bg for legacy \`variant="secondary"\` / \`variant="secondary-inverse"\` usage,
   * which now map to \`data-variant=common data-hierarchy=secondary\` (transparent by default).
   */
  &[is-deprecated=secondary]:not([is-floating]) {
    ${A}: var(--arc-color-mono-white);
    ${A}•hover: var(--arc-color-bg-neutral-muted);
    ${A}•active: var(--arc-color-bg-neutral-subtle);
    ${A}•processing: var(--arc-color-mono-white);
    ${A}•disabled: var(--arc-color-mono-white);
    ${A}•focus: var(--arc-color-alpha-white-3);
  }

  &[is-deprecated=secondary-inverse]:not([is-floating]) {
    ${A}: transparent;
    ${A}•hover: var(--arc-color-bg-neutral-muted);
    ${A}•active: var(--arc-color-bg-neutral-subtle);
    ${A}•processing: transparent;
    ${A}•disabled: transparent;
    ${A}•focus: var(--arc-color-alpha-white-3);
  }
`,ov=u`
  /** @overrides all variants when is onMedia (allows 'ai' gradient border) */
  &[is-on-media] {
    ${Ar}•progress•color: var(--arc-color-mono-white);
    ${Ar}•base•color: var(--arc-color-alpha-white-30);

    ${B}: var(--arc-color-mono-black);
    ${A}: var(--arc-color-alpha-white-70);
    ${pr}: var(--arc-color-alpha-black-15);

    ${B}•active: var(--arc-color-alpha-black-50);
    ${B}•processing: var(--arc-color-alpha-black-50);
    ${B}•disabled: var(--arc-color-alpha-black-40);

    ${A}•hover: var(--arc-color-alpha-white-90);
    ${A}•focus: var(--arc-color-alpha-white-70);
    ${A}•active: var(--arc-color-alpha-white-70);
    ${A}•disabled: var(--arc-color-alpha-white-60);
    ${A}•processing: var(--arc-color-alpha-white-60);

    ${pr}•active: var(--arc-color-alpha-black-10);
    ${pr}•disabled: var(--arc-color-alpha-black-10);
  }
`,nv=u`
  ${R}•color: var(${B});
  ${R}•background: var(${A});
  ${R}•font•weight: var(--arc-font-weight-600);
  ${R}•cursor: var(--arc-button-cursor, pointer);
  ${R}•padding: 0 var(${R}•spacing);
  ${R}•content•opacity: 1;

  /**
   * @note: new spacing between label and icon
   * '--arc-button-gap' is @deprecated • this was the 'gap' at the [arc-button-content] level
   * '--arc-button-inline-spacing' is @preferred over '--arc-button-gap'
   */
  ${Ge}•padding: var(--arc-button-inline-spacing, var(--arc-button-gap, var(${Ge}•spacing)));

  /**
   * @note: default is 'inherit' so it can inherit from button's size.
   * The 'size="inherit"' sets the button's font-size to 1em,
   * and sets the label font-size to 0.875em (or 14px at 100%) to
   * match the default button's text size. This allows the label
   * to still remain scalable by the parent container's font-size.
   */
  ${Ge}•font•size: inherit;

  /**
   * @note: Transforms variant-dependent '${Ir}•width' into '${Ir}•size'
   * which is also used for inset/padding on the AI Button's [arc-button-mask] sizing.
   */
  ${Ir}•size: var(--arc-button-border-width, var(${Ir}•width));

  ${Ir}•color: var(${pr});
  ${Ir}: var(${Ir}•size) solid var(${Ir}•color, transparent);
  ${Ir}•radius: var(--arc-border-radius-pill);

  ${Gt}: var(--arc-border-width-md) solid var(${Gt}•color, transparent);
  ${Gt}•offset: var(--arc-border-width-md);

  /* spinner svg style controls */
  ${Ar}•progress•color: var(--arc-button-progress-color, var(--arc-color-mono-white, currentcolor));
  ${Ar}•circle•color: var(--arc-button-color, var(${Ar}•base•color, var(--arc-color-alpha-mid)));
  ${Ar}•circle•opacity: var(--arc-alpha-100);

  ${R}•transition:
    background 0.2s ease-out,
    color 0.2s ease-out,
    height 0.2s ease-out,
    border-color 0.2s ease-out,
    outline-color 0.2s ease-out,
    opacity 0.2s ease-out,
    box-shadow 0.2s ease-out;

  &[data-hierarchy=link-style] {
    [arc-button-label] {
      text-decoration: var(--arc-link-text-decoration, underline);
      text-decoration-color: currentcolor;
    }

    [arc-button-icon] {
      text-decoration: none;
    }
  }

  /* Inter-Component Communication • ArcIcon -----------------------• */

  --arc-icon-size: var(${ae}•size);

  ${be}•width: var(${be}•size);

  &[has-large-icon] {
    --arc-icon-size: var(${ae}•size•large);

    [arc-button-icon]:has(svg) {
      ${be}•width: var(${be}•size•large);
    }
  }

  /* Inter-Component Communication • ArcSpinner --------------------• */

  --arc-spinner-size: var(${Ar}•size);
  --arc-spinner-progress-color: var(${Ar}•progress•color);
  --arc-spinner-circle-color: var(${Ar}•circle•color);
  --arc-spinner-circle-opacity: var(${Ar}•circle•opacity);
  --arc-spinner-position: var(${Ar}•position, absolute);
  --arc-spinner-inset: var(${Ar}•inset, 50% auto auto 50%);
  --arc-spinner-translate: var(${Ar}•translate, -50% -50%);

`,cv=u`
  &:is(
    [is-processing],
    [is-processing-with-text],
    :has([arc-button-mask]),
    :has(input),
  ) {
    ${R}•position: relative;
  }

  &[is-disabled] {
    ${R}•color: var(${B}•disabled, var(${B}));
    ${R}•background: var(${A}•disabled, var(${A}));
    ${Ir}•color: var(${pr}•disabled, var(${pr}));
    ${R}•opacity: var(--arc-button-disabled-opacity, unset);
    ${R}•cursor: var(--arc-button-disabled-cursor, not-allowed);
    ${we}•bg: var(${we}•disabled);
  }

  &:not(
    [is-disabled],
    [is-processing],
    [is-processing-with-text]
  ) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${R}•color: var(${B}•hover, var(${B}));
      ${R}•background: var(${A}•hover, var(${A}));
      ${Ir}•color: var(${pr}•hover, var(${pr}));
      ${we}•bg: var(${we}•hover);
    }

    &:is(
      :active,
      [is-active],
      [data-simulate=active]
    ) {
      ${R}•color: var(${B}•active, var(${B}));
      ${R}•background: var(${A}•active, var(${A}));
      ${Ir}•color: var(${pr}•active, var(${pr}));
      ${we}•bg: var(${we}•active);
    }
  }

  &[is-processing] {
    ${R}•content•visibility: hidden;
    ${R}•content•opacity: 0;

    /* spinner svg position controls */
    ${Ar}•position: absolute;
    ${Ar}•inset: 50% auto auto 50%;
    ${Ar}•translate: -50% -50%;
  }

  &[is-processing-with-text] {
    ${R}•content•visibility: visible;

    /* spinner svg position controls */
    ${Ar}•position: relative;
    ${Ar}•inset: 0;
    ${Ar}•translate: 0;
    ${Ar}•size: 1lh;
  }

  &:is(
    [is-processing],
    [is-processing-with-text]
  ) {
    ${R}•opacity: var(--arc-button-processing-opacity, unset);
    ${R}•cursor: var(--arc-button-processing-cursor, default);
    ${we}•bg: var(${we}•processing);

    ${R}•color: var(${B}•processing, var(${B}));
    ${R}•background: var(${A}•processing, var(${A}));
    ${Ir}•color: var(${pr}•processing, var(${pr}));
  }

  &:is(
    :where(:focus, :focus-within):focus-visible,
    [data-simulate=focus]
  ) {
    ${R}•color: var(${B}•focus, var(${B}));
    ${R}•background: var(${A}•focus, var(${A}));
    ${Ir}•color: var(${pr}•focus, var(${pr}));
    ${Gt}•color: var(--arc-button-outline-color, var(--arc-color-border-focus));

    * {
      outline: none;
    }
  }

`,iv=u`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${Ug}

  :where([arc-button]) {
    /* SETUP -------------------------------------------------------• */
    ${Yg}
    ${Zg}
    ${Jg}
    ${tv}
    ${Qg}
    ${rv}
    ${ev}
    ${av}
    ${ov}

    /* CORE VARIABLES ----------------------------------------------• */
    ${nv}
    ${cv}

    /* CONTEXT OVERRIDES -------------------------------------------• */
    &[is-floating] {
      ${R}•position: fixed;
      ${R}•margin: 0;
      ${R}•z-index: 1000;
    }

    /* "floating" button mitigation */
    &:where([arc-shadow], [is-floating]) {
      backdrop-filter: var(--arc-button-backdrop-filter, blur(0.375em));
    }

    /* Plain & Link-style button structural overrides */
    &:is(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${Ge}•padding: unset;
      ${R}•padding: unset;
      ${R}•height: unset;
      ${Ir}•radius: var(--arc-border-radius-md);

      [arc-button-content] {
        gap: var(--arc-button-inline-spacing, var(${Ge}•spacing));
      }
    }

    &:where([data-hierarchy=link-style]) {
      ${R}•font•weight: inherit;
      ${R}•text•decoration: none;
    }

    /* Custom button structural overrides */
    &[arc-button=custom] {
      ${R}•padding: unset;

      [arc-button-content] {
        gap: 0.5em;
      }

      [arc-button-label] {
        display: contents;
      }
    }

    /* CORE STYLES -------------------------------------------------• */
    appearance: none;
    cursor: var(--arc-button-cursor, var(${R}•cursor));
    position: var(--arc-button-position, var(${R}•position, unset));
    transition: var(--arc-button-transition, var(${R}•transition));
    z-index: var(--arc-button-z-index, var(${R}•z-index, unset));
    inset: var(--arc-button-inset, var(--js•inset, unset));

    /* FOOTPRINT */
    font: inherit;
    font-weight: var(--arc-button-font-weight, var(${R}•font•weight));
    font-size: var(--arc-button-font-size, var(${R}•font•size, inherit));
    padding: var(--arc-button-padding, var(${R}•padding));
    margin: var(--arc-button-margin, var(${R}•margin, unset));

    width: var(--arc-button-width, var(${R}•width, auto));
    min-width: var(--arc-button-min-width, var(${R}•min•width, unset));
    max-width: var(--arc-button-max-width, var(${R}•max•width, 100%));

    height: var(--arc-button-height, var(${R}•height, auto));
    min-height: var(--arc-button-min-height, var(${R}•min•height, unset));
    max-height: var(--arc-button-max-height, var(${R}•max•height, unset));

    aspect-ratio: var(--arc-button-aspect-ratio, var(${R}•aspect•ratio, unset));

    /* VARIANT THEME APPLIED ---------------------------------------• */

    color: var(--arc-button-color, var(${R}•color));
    background: var(--arc-button-background, var(${R}•background));
    border: var(--arc-button-border, var(${Ir}));
    border-radius: var(--arc-button-border-radius, var(${Ir}•radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(${Gt}));
    outline-offset: var(--arc-button-outline-offset, var(${Gt}•offset));
    overflow: var(--arc-button-overflow, unset);

    /* shadow concession for buttons not already using 'arc-shadow' util */
    &:not([arc-shadow]) {
      box-shadow: var(--arc-button-box-shadow, unset);
    }

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* INNER-ELEMENTS ----------------------------------------------• */
    [arc-button-content] {
      flex: 1;

      display: flex;
      align-items: var(--arc-button-align-items, center);
      justify-content: var(--arc-button-justify-content, center);

      opacity: var(--arc-button-content-opacity, var(${R}•content•opacity));
      visibility: var(--arc-button-content-visibility, var(${R}•content•visibility, inherit));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(${R}•content•width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, visible);

      transition: var(--arc-button-content-transition, inherit);

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      font-size: var(--arc-button-label-font-size, var(${Ge}•font•size));
      overflow: var(--arc-button-label-overflow, clip);
      text-overflow: var(--arc-button-label-text-overflow, ellipsis);
      white-space: var(--arc-button-label-white-space, nowrap);
      max-width: var(--arc-button-label-max-width, 100%);
      opacity: var(--arc-button-label-opacity, var(${R}•opacity));
      transition: var(--arc-button-label-transition, inherit);
      padding-inline: var(${Ge}•padding);
    }

    [arc-button-icon] {
      /** @note: override to ensure auto-width is applied to button icons This protects the
       * intended "gap" (now 'padding-inline' on the label) between icon and label */
      --fa-width: var(${ae}•width);

      flex: none;

      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--arc-button-icon-width, var(${ae}•width));
      min-width: 1em;

      opacity: var(--arc-button-icon-opacity, var(${R}•opacity));
      transition: var(--arc-button-icon-transition, inherit);

      &:has(svg) {
        ${ae}•width: var(--arc-button-svg-width, var(${be}•width));
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }

    [arc-button-mask] {
      pointer-events: none;
      position: absolute;
      inset: calc(var(${Ir}•size) * -1);
      padding: var(${Ir}•size);
      background: var(${we}•bg);
      mask: linear-gradient(black, black) content-box exclude, linear-gradient(black, black);
      border-radius: var(--arc-button-border-radius, var(${Ir}•radius));
      transition: var(--arc-button-transition, inherit);
    }

    input {
      position: absolute;
      opacity: 0;
      scale: 0.1;
    }
  }

  [arc-button]:not([hidden]) {
    flex: var(--arc-button-flex, unset);
    display: var(--arc-button-display, var(${R}•display, inline-flex));
    align-items: center;
    justify-content: center;
  }

}
`,Fd=(0,i.jsx)(Xi,{}),sv=(0,i.jsx)("span",{"arc-button-mask":""}),lv=!!s.version.startsWith("18"),dv=r=>r===void 0||r===!1?{isFloating:!1}:r===!0?{isFloating:!0}:{isFloating:!0,inset:r.inset},uv=({popoverTarget:r,popoverTargetAction:e})=>lv?{popovertarget:r??void 0,popovertargetaction:e??void 0}:{popoverTarget:r??void 0,popoverTargetAction:e??void 0},jr=(0,s.forwardRef)(({children:r,disabled:e,...a},t)=>{const o=(0,s.useRef)(null),{_isCustom:n,iconEnd:c,iconStart:l,icon:d,text:h,isActive:p,isDisabled:v,isProcessing:g,isProcessingWithText:f,hasLargeIcon:m,tag:y,href:w,type:x,title:C,layout:z,shape:k,size:T="lg",variant:P="common",hierarchy:L="primary",scheme:V="auto",shadow:I,onMedia:D,isOnMedia:X,floating:E,isInverse:ar=!1,...W}=a,{isFloating:rr,inset:F}=dv(E),Z=X??D,tr=y??(w?"a":"button"),lr=tr==="button"?x||"button":void 0,yr=z==="icon",H=f||g||v||e,ir=W?.["aria-disabled"]||H||void 0,Rr=n?void 0:Bd({variant:P}),sr=n?void 0:Od({variant:P,hierarchy:L}),br=!n&&os(P)?P:void 0,ur=n?void 0:jd({shape:k}),hr=n?"inherit":T,gr=Ig({layout:z,isFloating:rr}),xr=Pg({isFloating:rr,isOnMedia:Z,shadow:I}),U=Nd({variant:P,isInverse:ar,scheme:V}),er=!yr&&(r||h),S=f&&Fd||l||d,$=!yr&&(f&&!(l||d)?void 0:c),O=(g||f&&yr)&&Fd,K=Rr==="ai"?sv:void 0,{tooltip:_,...N}=W,or=Ot(_)?_:void 0,cr=a.tooltip??or,wr=!!cr,Mr=Ot(cr)?{text:cr}:cr,Qr=W["aria-describedby"],De=Br(void 0,"arc-tooltip"),Ae=a.id?`${a.id}-tooltip`:De,oe=wr?Ae:void 0,ze=wr?_o([Qr,oe]):Qr,{anchorName:Be,style:aa,popoverTarget:ne,popoverTargetAction:Ee,...re}=N,Oe=ne?To(String(Be||a?.id)):void 0,Ne=wr?To(String(oe)):void 0,Fe=Ql(aa)?aa:void 0,Tt=Fe&&"anchorName"in Fe&&Fe.anchorName,di=[...(Ot(Tt)?yd(Tt,", "):[]).map(To),...Oe?[Oe]:[],...Ne?[Ne]:[]],It=_o(di,1/0,", "),mo=Fe!=null&&"inset"in Fe&&Fe.inset!==void 0&&Fe.inset!==null&&Fe.inset!=="",Tn={...Fe??{},...It?{anchorName:It}:{},...F!==void 0&&!mo?{"--js\u2022inset":F}:{}},Ba=uv({popoverTarget:ne||void 0,popoverTargetAction:Ee||void 0}),ui=(0,s.useCallback)(bo=>{o.current=bo,ta(t,bo)},[t]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(tr,{...re,...Ba,ref:ui,"arc-button":n?"custom":"","arc-scheme":U,"arc-shadow":xr||void 0,disabled:!w&&H||void 0,href:w||void 0,title:wr?void 0:C||void 0,type:lr,"data-layout":gr,"data-shape":ur,"data-size":hr,"data-variant":Rr,"data-hierarchy":sr,"has-large-icon":m?"":void 0,"is-deprecated":br,"is-floating":rr?"":void 0,"is-on-media":Z?"":void 0,"is-active":p?"":void 0,"is-processing":g||f&&yr?"":void 0,"is-processing-with-text":f&&!yr?"":void 0,"is-disabled":H||ir?"":void 0,"aria-disabled":ir,"aria-describedby":ze||void 0,style:Tn,children:[(0,i.jsxs)("span",{"arc-button-content":"",children:[!!S&&(0,i.jsx)("span",{"arc-button-icon":"",children:typeof S=="string"?(0,i.jsx)(Sr,{icon:S}):S}),!!er&&(0,i.jsx)("span",{"arc-button-label":"",children:er}),!!$&&(0,i.jsx)("span",{"arc-button-icon":"",children:typeof $=="string"?(0,i.jsx)(Sr,{icon:$}):$})]}),O,K]}),wr&&(0,i.jsx)(sc,{...Mr,id:oe,alternateAnchor:Mr?.alternateAnchor??(()=>o.current),anchorName:Ne})]})});jr.displayName="ArcButton",Cr("ArcButton",iv);const No=(0,s.forwardRef)((r,e)=>(0,i.jsx)(jr,{...r,ref:e,"arc-popover-button":""})),Hd=({isInverse:r=!1,isOpen:e,...a})=>(0,i.jsx)(jr,{icon:"fa-regular fa-xmark",text:"Dismiss",...a,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-dismiss":""}),hv=({isInverse:r=!1,...e})=>(0,i.jsx)(jr,{icon:"fa-regular fa-arrow-left",text:"Go Back",...e,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-go-back":""}),pv=({children:r,isSticky:e,showDivider:a,showDismiss:t,dismissProps:o,showGoBack:n,goBackProps:c,headerSlotEnd:l,tag:d="header",...h})=>(0,i.jsx)(d,{...h,"arc-popover-header":"","has-divider":a?"":void 0,"is-sticky":e?"":void 0,children:(0,i.jsxs)("div",{"arc-popover-display":"",children:[(0,i.jsxs)("div",{"arc-popover-header-slot":"start",children:[n&&(0,i.jsx)(hv,{...c}),r]}),(0,i.jsxs)("div",{"arc-popover-header-slot":"end",children:[l,t&&(0,i.jsx)(Hd,{...o})]})]})}),gv=({children:r,tag:e="article",...a})=>(0,i.jsx)(e,{...a,"arc-popover-body":"",children:(0,i.jsx)("div",{"arc-popover-display":"",children:r})}),vv=({children:r,isSticky:e,showDivider:a,tag:t="footer",...o})=>(0,i.jsx)(t,{...o,"arc-popover-footer":"","has-divider":a?"":void 0,"is-sticky":e?"":void 0,children:(0,i.jsx)("div",{"arc-popover-display":"",children:r})});No.displayName="ArcPopoverButton";const q=u`--arc-popover`,$e=u`--arc•popover`,$r=u`--arc•trail•mix`,ns=u`${$e}•radius`,fv=u`${$e}•content`,dc=u`${$e}•outline`,_e=u`${$e}•offset`,Ea=u`${$e}•header`,mv=u`${$e}•body`,cs=u`${$e}•divider`,uc=u`${$e}•footer`,xa=u`${$e}•tail`,Or=u`${xa}•top`,Nr=u`${xa}•left`,Fo=u`${xa}•size`,Ze=u`${xa}•x`,Je=u`${xa}•y`,is=u`${$e}•font•size`,hc=u`${$e}•padding`,Pe=u`${$e}•margin`,Ut=u`${Ea}•padding`,ca=u`${mv}•padding`,_a=u`${uc}•padding`,Vd=u`${$e}•fg`,pc=u`${$e}•bg`,gc=u`${fv}•bg`,vc=u`${xa}•fill•a`,fc=u`${xa}•fill•b`,mc=u`${xa}•edge•a`,bc=u`${xa}•edge•b`,bv=u`

  ${$e}•fallback: none;
  ${dc}: var(${q}-outline-size, var(--arc-border-width-md));
  ${ns}: var(${q}-border-radius, var(--arc-border-radius-lg));
  ${_e}: var(${q}-offset, var(--js•offset, 0px));

  /* space & padding */
  ${hc}: 0.875em;

  /* tail metrics - starts at defaults for anchor-at='bottom-start' */
  ${$r}: 47.5%; /* mix-ratio for tail to match gradient outline for: 'popover[variant=ai]' */
  ${Ze}: var(${q}-tail-x, 1.75em);
  ${Je}: var(${q}-tail-y, 1.125em);
  ${Fo}: 0px;

  &:where([has-tail]) {
    ${Fo}: var(${q}-tail-size, var(--js•tail, 8px));

    /* offset calculation magic number - 'sqrt(2) / 2' for half of 45° rotated tailSize */
    ${_e}: calc(var(${q}-offset, var(--js•offset, 0px)) + var(${Fo}) * (sqrt(2) / 2));
  }

  &:has([arc-popover-body]) {
    ${hc}: 0;
    &:has([arc-popover-header]:not([has-divider])) { ${ca}•block•start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { ${ca}•block•end: 0; }
  }

`,$v=u`

  /* default variant: common */
  &[variant] {
    ${Vd}: var(--arc-color-fg-primary);
    ${pc}: var(${q}-background, var(--arc-color-bg-mono)) border-box;
    ${gc}: var(${q}-background, var(--arc-color-bg-mono)) padding-box;
    ${vc}: var(${q}-background, var(--arc-color-bg-mono));
    ${fc}: var(${q}-background, var(--arc-color-bg-mono));
    ${mc}: var(${q}-background, var(--arc-color-bg-mono));
    ${bc}: var(${q}-background, var(--arc-color-bg-mono));
    ${$e}•shadow: var(--arc-shadow-lg);
    ${cs}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &[variant=brand] {
    ${pc}: var(--arc-color-border-brand-mid) border-box;
    ${gc}: var(--arc-color-bg-brand-muted) padding-box;
    ${vc}: var(--arc-color-bg-brand-muted);
    ${fc}: var(--arc-color-bg-brand-muted);
    ${mc}: var(--arc-color-border-brand-mid);
    ${bc}: var(--arc-color-border-brand-mid);
  }

  &[variant=ai] {
    ${pc}: var(--arc-gradient-ai-200) border-box;
    ${gc}: var(--arc-gradient-ai-50) padding-box;
    ${vc}: var(${q}-ai-purple-50);
    ${fc}: var(${q}-ai-blue-50);
    ${mc}: var(${q}-ai-purple-200);
    ${bc}: var(${q}-ai-blue-200);
  }

`,yv=u`

  /* default density: compact */
  &:not([density=comfortable]) {
    ${is}: 0.75em;
    ${Ea}•gap: 0.75em;
    ${Ut}•block: 0.75em;
    ${Ut}•inline: 0.75em;

    ${ca}•block: 0.75em;
    ${ca}•inline: 0.75em;

    ${uc}•gap: 0.75em;
    ${_a}•inline: 0.75em;
    ${_a}•block•start: 0.75em;
    ${_a}•block•end: 0.75em;
  }

  &[density=comfortable] {
    ${is}: 0.875em;
    ${Ea}•gap: 1.125em;
    ${Ut}•block: 1em;
    ${Ut}•inline: 1.25em;

    ${ca}•block: 1.25em;
    ${ca}•inline: 1.25em;

    ${uc}•gap: 1.125em;
    ${_a}•inline: 1.25em;
    ${_a}•block•start: 1em;
    ${_a}•block•end: 1.25em;

    &:not(:has([arc-popover-body])) {
      ${hc}: 1.25em;
    }
  }

`,Ho={TOP:u`
    &[anchor-at*='top-'] {
      ${Pe}: 0 0 var(${_e}) 0;
      ${Or}: 100%;
    }
    &[anchor-at='top-start'] {
      position-area: block-start span-inline-end;
      ${$r}: 95%;
      ${Nr}: calc(0% + var(${Ze}));
    }
    &[anchor-at='top-center'] {
      position-area: block-start;
      ${$r}: 75%;
      ${Nr}: 50%;
    }
    &[anchor-at='top-end'] {
      position-area: block-start span-inline-start;
      ${$r}: 53.5%;
      ${Nr}: calc(100% - var(${Ze}));
    }
  `,RIGHT:u`
    &[anchor-at*='right-'] {
      ${Pe}: 0 0 0 var(${_e});
      ${Nr}: 0%;
    }
    &[anchor-at='right-start'] {
      position-area: inline-end span-block-end;
      ${$r}: 53.5%;
      ${Or}: calc(0% + var(${Je}));
    }
    &[anchor-at='right-center'] {
      position-area: inline-end;
      ${$r}: 75%;
      ${Or}: 50%;
    }
    &[anchor-at='right-end'] {
      position-area: inline-end span-block-start;
      ${$r}: 95%;
      ${Or}: calc(100% - var(${Je}));
    }
  `,BOTTOM:u`
    &[anchor-at*='bottom-'] {
      ${Pe}: var(${_e}) 0 0 0;
      ${Or}: 0%;
    }
    &[anchor-at='bottom-end'] {
      position-area: block-end span-inline-start;
      ${$r}: 5%;
      ${Nr}: calc(100% - var(${Ze}));
    }
    &[anchor-at='bottom-center'] {
      position-area: block-end;
      ${$r}: 25%;
      ${Nr}: 50%;
    }
    &[anchor-at='bottom-start'] {
      position-area: block-end span-inline-end;
      ${$r}: 47.5%;
      ${Nr}: calc(0% + var(${Ze}));
    }
  `,LEFT:u`
    &[anchor-at*='left-'] {
      ${Pe}: 0 var(${_e}) 0 0;
      ${Nr}: 100%;
    }
    &[anchor-at='left-end'] {
      position-area: inline-start span-block-start;
      ${$r}: 47.5%;
      ${Or}: calc(100% - var(${Je}));
    }
    &[anchor-at='left-center'] {
      position-area: inline-start;
      ${$r}: 25%;
      ${Or}: 50%;
    }
    &[anchor-at='left-start'] {
      position-area: inline-start span-block-end;
      ${$r}: 5%;
      ${Or}: calc(0% + var(${Je}));
    }
  `,CENTER_AND_CORNERS:u`
    &:is([anchor-at='center'], [anchor-at*='corner']) { ${xa}•display: none; }
    &[anchor-at='center'] { position-area: center center; ${Pe}: 0; }
    &[anchor-at*='corner'] { ${Pe}: var(${_e}); }
    &[anchor-at='nw-corner'] { position-area: top left; }
    &[anchor-at='ne-corner'] { position-area: top right; }
    &[anchor-at='se-corner'] { position-area: bottom right; }
    &[anchor-at='sw-corner'] { position-area: bottom left; }
  `},Kt={FLIP_BLOCK:u`
    &[anchor-at*='top-'] { ${Pe}: 0 0 var(${_e}) 0; }
    &[anchor-at='top-start']::before { ${$r}: 47.5%; ${Or}: 0%; }
    &[anchor-at='top-center']::before { ${$r}: 25%; ${Or}: 0%; }
    &[anchor-at='top-end']::before { ${$r}: 5%; ${Or}: 0%; }

    &[anchor-at='right-start']::before { ${$r}: 95%; ${Or}: calc(100% - var(${Je})); }
    &[anchor-at='right-end']::before { ${$r}: 53.5%; ${Or}: calc(0% + var(${Je})); }

    &[anchor-at*='bottom-'] { ${Pe}: var(${_e}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${$r}: 53.5%; ${Or}: 100%; }
    &[anchor-at='bottom-center']::before { ${$r}: 75%; ${Or}: 100%; }
    &[anchor-at='bottom-start']::before { ${$r}: 95%; ${Or}: 100%; }

    &[anchor-at='left-end']::before { ${$r}: 5%; ${Or}: calc(0% + var(${Je})); }
    &[anchor-at='left-start']::before { ${$r}: 47.5%; ${Or}: calc(100% - var(${Je})); }
  `,FLIP_INLINE:u`
    &[anchor-at='top-start']::before { ${$r}: 53.5%; ${Nr}: calc(100% - var(${Ze})); }
    &[anchor-at='top-end']::before { ${$r}: 95%; ${Nr}: calc(0% + var(${Ze})); }

    &[anchor-at*='right-'] { ${Pe}: 0 var(${_e}) 0 0; }
    &[anchor-at='right-start']::before { ${$r}: 5%; ${Nr}: 100%; }
    &[anchor-at='right-center']::before { ${$r}: 25%; ${Nr}: 100%; }
    &[anchor-at='right-end']::before { ${$r}: 47.5%; ${Nr}: 100%; }

    &[anchor-at='bottom-end']::before { ${$r}: 47.5%; ${Nr}: calc(0% + var(${Ze})); }
    &[anchor-at='bottom-start']::before { ${$r}: 5%; ${Nr}: calc(100% - var(${Ze})); }

    &[anchor-at*='left-'] { ${Pe}: 0 0 0 var(${_e}); }
    &[anchor-at='left-end']::before { ${$r}: 95%; ${Nr}: 0%; }
    &[anchor-at='left-center']::before { ${$r}: 75%; ${Nr}: 0%; }
    &[anchor-at='left-start']::before { ${$r}: 53.5%; ${Nr}: 0%; }
  `,FLIP_BLOCK_INLINE:u`
    &[anchor-at*='top-'] { ${Pe}: 0 0 var(${_e}) 0; }
    &[anchor-at='top-start']::before { ${$r}: 5%; ${Or}: 0%; ${Nr}: calc(100% - var(${Ze})); }
    &[anchor-at='top-end']::before { ${$r}: 47.5%; ${Or}: 0%; ${Nr}: calc(0% + var(${Ze})); }

    &[anchor-at*='right-'] { ${Pe}: 0 var(${_e}) 0 0; }
    &[anchor-at='right-start']::before { ${$r}: 47.5%; ${Or}: calc(100% - var(${Je})); ${Nr}: 100%; }
    &[anchor-at='right-end']::before { ${$r}: 5%; ${Or}: calc(0% + var(${Je})); ${Nr}: 100%; }

    &[anchor-at*='bottom-'] { ${Pe}: var(${_e}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${$r}: 95%; ${Or}: 100%; ${Nr}: calc(0% + var(${Ze})); }
    &[anchor-at='bottom-start']::before { ${$r}: 53.5%; ${Or}: 100%; ${Nr}: calc(100% - var(${Ze})); }

    &[anchor-at*='left-'] { ${Pe}: 0 0 0 var(${_e}); }
    &[anchor-at='left-end']::before { ${$r}: 53.5%; ${Or}: calc(0% + var(${Je})); ${Nr}: 0%; }
    &[anchor-at='left-start']::before { ${$r}: 95%; ${Or}: calc(100% - var(${Je})); ${Nr}: 0%; }
  `},xv=u`
  [arc-popover] {
    position: fixed;
    inset: auto;
    padding: 0;
    margin: var(${Pe});

    container-type: anchored;
    position-anchor: var(${q}-anchor-name, var(--js•anchor));

    ${Ho.TOP}
    ${Ho.RIGHT}
    ${Ho.BOTTOM}
    ${Ho.LEFT}
    ${Ho.CENTER_AND_CORNERS}

    &[try-fallbacks] {
      position-try-fallbacks: flip-block, flip-inline, flip-block flip-inline;
    }
  }

  @supports (container-type: anchored) {
    @container anchored(fallback: flip-block) {
      [arc-popover][try-fallbacks][has-tail] {
        ${Kt.FLIP_BLOCK}
      }
    }

    @container anchored(fallback: flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${Kt.FLIP_INLINE}
      }
    }

    @container anchored(fallback: flip-block flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${Kt.FLIP_BLOCK_INLINE}
      }
    }
  }

  /* @note – tail fallback mitigation */
  @supports not (container-type: anchored) {
    /* @note – inline center anchor placement mitigation for Firefox */
    [arc-popover] {
      &[anchor-at='right-center'] {
        position-area: inline-end center;
      }
      &[anchor-at='left-center'] {
        position-area: inline-start center;
      }
    }

    [arc-popover][try-fallbacks][has-tail] {
        &[data-fallbacks='flip-block'] {
          ${Kt.FLIP_BLOCK}
        }
        &[data-fallbacks='flip-inline'] {
          ${Kt.FLIP_INLINE}
        }
        &[data-fallbacks='flip-block-inline'] {
          ${Kt.FLIP_BLOCK_INLINE}
        }
      }
    }
`,Wt={BACKDROP:u`
    [arc-popover]::backdrop {
      background: var(${q}-backdrop, transparent);
    }
  `,CONTENT:u`
    [arc-popover-content] {
      flex: var(${q}-flex, 1);
      position: relative;
      display: var(${q}-content-display, flex);
      flex-direction: var(${q}-content-flex-direction, column);
      gap: var(${q}-content-gap, 0);

      overflow: var(${q}-overflow, auto);
      overscroll-behavior: var(${q}-overscroll-behavior, contain);

      color: var(${q}-color, var(${Vd}));
      padding: var(${q}-padding, var(${hc}));
      margin: var(${q}-margin, unset);
      background: var(${q}-content-background, var(${gc}));
      border-radius: calc(var(${ns}) - var(${dc}));
      border: var(${q}-border, none);

      height: var(${q}-height, auto);
      min-height: var(${q}-min-height, auto);
      max-height: var(${q}-max-height, 65vh);
      resize: var(${q}-resize, none);
    }
  `,HEADER:u`
    [arc-popover-header] {
      flex: var(${q}-header-flex, none);
      display: var(${q}-header-display, flex);
      justify-content: var(${q}-header-justify-content, space-between);
      align-items: var(${q}-header-align-items, baseline);
      gap: var(${q}-header-gap, var(${Ea}•gap));

      padding: var(${q}-header-padding,
        var(${Ut}•block)
        var(${Ut}•inline)
      );

      color: var(${q}-header-color, inherit);
      background: var(${q}-header-background, none);

      &[is-sticky] {
        position: sticky;
        z-index: var(${q}-header-z-index, 2);
        top: var(${q}-header-top, 0);
      }

      &:has([arc-popover-go-back]) {
        padding-inline-start: 0.875em;
      }

      &:has([arc-popover-dismiss]) {
        padding-inline-end: 0.875em;
      }

      &:where([has-divider]) {
        border-bottom: var(${q}-header-border-bottom, var(${cs}));
      }

      :where([arc-button]) {
        margin: var(${q}-header-button-margin, -0.5em);
      }
    }

    [arc-popover-header-slot='start'] {
      ${Ea}•slot•flex: 1;
      ${Ea}•slot•gap: 1em;
    }

    [arc-popover-header-slot='end'] {
      ${Ea}•slot•flex: none;
      ${Ea}•slot•gap: 1.5em;
    }

    [arc-popover-header-slot] {
      min-width: 0%;
      flex: var(${Ea}•slot•flex);
      display: var(${q}-header-display, flex);
      justify-content: var(${q}-header-justify-content, unset);
      align-items: var(${q}-header-align-items, baseline);
      gap: var(${q}-header-slot-gap, var(${Ea}•slot•gap));
    }

    /* Header-less Popover: DismissButton typical starting spot */
    [arc-popover]:not([arc-popover-header]) > [arc-popover-dismiss] {
      --arc-button-position: absolute;
      --arc-button-z-index: var(${q}-dismiss-z-index, 2);
      inset: var(${q}-dismiss-inset, 0.5em 0.5em auto auto);
      margin: var(${q}-dismiss-margin, 0);
    }
  `,BODY:u`
    [arc-popover-body] {
      flex: var(${q}-body-flex, 1);
      display: var(${q}-body-display, block);
      flex-direction: var(${q}-body-flex-direction, unset);

      padding: var(${q}-body-padding,
        var(${ca}•block•start, var(${ca}•block))
        var(${ca}•inline)
        var(${ca}•block•end, var(${ca}•block))
        var(${ca}•inline)
      );
    }
  `,FOOTER:u`
    [arc-popover-footer] {
      flex: var(${q}-footer-flex, none);
      display: var(${q}-footer-display, flex);
      flex-direction: var(${q}-footer-flex-direction, row-reverse);
      justify-content: var(${q}-footer-justify-content, space-between);
      align-items: var(${q}-footer-align-items, center);
      gap: var(${q}-footer-gap, var(${uc}•gap));

      padding: var(${q}-footer-padding,
        var(${_a}•block•start)
        var(${_a}•inline)
        var(${_a}•block•end)
        var(${_a}•inline)
      );

      background: var(${q}-footer-background, none);
      color: var(${q}-footer-color, inherit);

      &[is-sticky] {
        position: sticky;
        z-index: var(${q}-footer-z-index, 2);
        bottom: var(${q}-footer-bottom, 0);
      }

      &:where([has-divider]) {
        border-top: var(${q}-footer-border-top, var(${cs}));
      }
    }
  `,TAIL:u`
    [arc-popover][has-tail]::before {
      content: '';
      box-sizing: content-box;
      position: absolute;
      display: var(${xa}•display, block);

      inset: auto;
      top: var(${Or}, auto);
      left: var(${Nr}, auto);

      translate: -50% -50%;
      rotate: 45deg;

      width: var(${Fo});
      height: var(${Fo});
      border-radius: 0.125em;

      background: color-mix(in srgb,
        var(${vc}) var(${$r}),
        var(${fc}) clamp(0%, 100% - var(${$r}), 100%)
      );

      border: var(${dc}) solid color-mix(in srgb,
        var(${mc}) var(${$r}),
        var(${bc}) clamp(0%, 100% - var(${$r}), 100%)
      );
    }
  `},kv=u`
  [arc-popover] {
    will-change: opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    /* @note – this line-height magic number fixes asymmetrical outline/border issues with certain placements
    on low DPI displays. It's based on the default (--arc-line-height-standard) of 1.4 */
    line-height: var(${q}-line-height, 1.395);

    /* @note – this font-size is intended NOT to be altered; it is locked in as a reset (browser baseline)
    for various popover calculations. The effective popover font size is set on '[arc-popover-display]'. */
    font-size: initial;

    background: var(${q}-background, var(${pc}));
    border: var(${dc}) solid transparent;
    border-radius: var(${ns});
    box-shadow: var(${q}-shadow, var(${$e}•shadow));
    width: var(${q}-width, auto);
    height: var(${q}-height, auto);
    min-width: var(${q}-min-width, auto);
    min-height: var(${q}-min-height, auto);
    max-width: var(${q}-max-width, 100vw);
    max-height: var(${q}-max-height, 65vh);
  }

  /* @note – font-size control for header|footer|body padding calculations */
  [arc-popover-display] {
    display: contents;
    font-size: var(${q}-font-size, var(${is}));
  }

  ${Wt.CONTENT}
  ${Wt.HEADER}
  ${Wt.BODY}
  ${Wt.FOOTER}
  ${Wt.TAIL}
  ${Wt.BACKDROP}
`,Vo={SETUP:bv,ANCHORS:xv,VARIANTS:$v,DENSITIES:yv,ELEMENT:kv},wv=u`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${Wg}

  [arc-popover] {
    ${Vo.SETUP}
    ${Vo.VARIANTS}
    ${Vo.DENSITIES}
  }

  ${Vo.ANCHORS}
  ${Vo.ELEMENT}

  /* POPOVER anchoring mitigation ----------------------------------• */

  [arc-popover][is-floating] {
    position-area: none;
    position-try-fallbacks: none;
  }

  /* POPOVER transition --------------------------------------------• */

  [arc-popover] {
    z-index: var(--arc-popover-z-index, 10000); /* default for floating-ui fallback */
    transition-timing-function: ease-out;
    transition-duration: var(--arc-popover-transition-duration, 240ms);
    transition-behavior: allow-discrete;
    transition-property: display, opacity;

    @supports (overlay: auto) {
      transition-property: display, overlay, opacity;
    }

    opacity: 0;
    &:popover-open { opacity: 1; }

    &::backdrop { transition: inherit; opacity: 0; }
    &:popover-open::backdrop { opacity: 1; }
  }

  @starting-style {
    [arc-popover]:popover-open { opacity: 0; }
    [arc-popover]:popover-open::backdrop { opacity: 0; }
  }
}

`,Gd=(0,s.forwardRef)(({children:r,popover:e=Ve.popover,anchorAt:a=Ve.anchorAt,anchorName:t,anchorProps:o,alternateAnchorId:n,alternateAnchor:c,boundary:l=Ve.boundary,tryFallbacks:d=Ve.tryFallbacks,density:h=Ve.density,variant:p=Ve.variant,scheme:v=Ve.scheme,isInverse:g,hasTail:f,tailSize:m=Ve.tailSize,offset:y=Ve.offset,hidePopoverButton:w,headerSlot:x,showHeaderDivider:C,isHeaderSticky:z,showDismiss:k,dismissProps:T,showGoBack:P,goBackProps:L,headerSlotEnd:V,footerSlot:I,isFooterSticky:D,showFooterDivider:X,tag:E="div",contentTag:ar="div",onToggle:W,...rr},F)=>{const Z=(0,s.useRef)(null),tr=(0,s.useRef)(null),lr=(0,s.useRef)(null),yr=(0,s.useRef)(W);(0,s.useImperativeHandle)(F,()=>tr.current);const[H,ir]=(0,s.useState)(!1),Rr=(0,s.useMemo)(()=>v==="auto"?void 0:g?"inverse":v,[g,v]),sr=(0,s.useCallback)(()=>{if(typeof document>"u")return Z.current??null;const K=oa(Z.current??tr.current)??document;return n?K.getElementById(n):typeof c=="string"?K.getElementById(c):c instanceof HTMLElement?c:typeof c=="function"?c():c&&typeof c=="object"&&"current"in c?c.current:Z.current??null},[c,n]),br=d||l==="flip",ur=!!f&&!ud.includes(a),hr=hd({canHaveTail:ur,tailSize:m}),gr=(0,s.useMemo)(()=>{const K=t||n||(typeof c=="string"?c:void 0)||o?.id||rr.id||void 0;return Hi(String(K))},[t,o?.id,rr.id,c,n]),xr=(0,s.useMemo)(()=>({popoverTarget:rr.id,"aria-haspopup":!0,"aria-controls":rr.id,"aria-expanded":H}),[rr.id,H]),U=(0,s.useMemo)(()=>({isOpen:H,"aria-label":"Dismiss",...xr,...T}),[T,H,xr]),er=(0,s.useMemo)(()=>({ref:Z,...xr,...o,tooltip:H?void 0:o?.tooltip,anchorName:gr||""}),[o,xr,gr,H]),S=(0,s.useMemo)(()=>({"--js\u2022anchor":er?.anchorName||"","--js\u2022offset":Number(y)===0?"":`${y}px`,"--js\u2022tail":hr.cssTailVar}),[er?.anchorName,y,hr.cssTailVar]);tt(()=>{const K=sr();if(lr.current=K,!!K)return gd(K,er.anchorName)},[sr,er.anchorName,H]),(0,s.useEffect)(()=>{yr.current=W},[W]),(0,s.useEffect)(()=>{const K=tr.current;if(!K)return;const _=N=>{const{newState:or}=N,nr=or==="open";ir(nr),nr&&(lr.current=sr()),yr.current?.(N)};return K.addEventListener("toggle",_),()=>K.removeEventListener("toggle",_)},[sr]),rg({anchorEl:lr.current,popoverEl:tr.current,anchorAt:a,tryFallbacks:br,offsetPx:Number(y)||0,tailSizePx:hr.floatingTailPx,hasTail:ur,isOpen:H}),og({anchorEl:lr.current,popoverEl:tr.current,anchorAt:a,tryFallbacks:br,hasTail:ur,isOpen:H});const $=!!(x||P||V),O=!!I;return(0,i.jsxs)(i.Fragment,{children:[!((n||c)&&w)&&(0,i.jsx)(No,{...er}),(0,i.jsxs)(E,{...rr,ref:tr,"arc-popover":"","arc-scheme":Rr,"anchor-at":a,"is-floating":dd?"":void 0,"try-fallbacks":br?"":void 0,popover:e,variant:p,density:h,"has-tail":ur?"":void 0,role:rr.role??"dialog",style:{...rr.style,...S},children:[(0,i.jsxs)(ar,{"arc-popover-content":"",children:[$&&(0,i.jsx)(pv,{showDivider:C,showGoBack:P,goBackProps:L,headerSlotEnd:V,showDismiss:k,dismissProps:U,isSticky:z,children:x}),$||O?(0,i.jsx)(gv,{children:r}):(0,i.jsx)(ar,{"arc-popover-display":"",children:r}),O&&(0,i.jsx)(vv,{showDivider:X,isSticky:D,children:I})]}),k&&!$&&(0,i.jsx)(Hd,{...U})]})]})});Gd.displayName="ArcPopover";const ss=Gd;ss.handlePopover=pd,ss.Button=No;const ka=ss;Cr("ArcPopover",wv);const Cv=u`
@layer arc-components {

  [arc-avatar-overflow] {
    /* Inter-Component Communication • ArcPopover ------------------• */
    --arc-popover-font-size: var(--arc-font-size-body-md);
    --arc-popover-translate: -100% 0.5em;
    --arc-popover-width: max-content;
    --arc-popover-max-width: 18em;
    --arc-popover-padding: 0;

    /* For Neutral/Anonymous avatars -------------------------------• */
    [data-element=list] {
      margin: 0;
      padding: var(${b}•4) var(${b}•0);
    }

    [data-element=list-item] {
      display: flex;
      align-items: center;
      gap: var(${b}•6);
      padding: var(${b}•4) var(${b}•8);
    }

    ${Ai}
    ${Zl}
  }

}
`,Sv=r=>(0,i.jsx)("ul",{...r,"data-element":"list"}),Av=r=>(0,i.jsx)("li",{...r,"data-element":"list-item"}),zv=({count:r,anchorId:e,overflowId:a,shouldShowOverflow:t,...o})=>(0,i.jsx)(ji,{title:`+${r}`,children:(0,i.jsx)(ka.Button,{...o,id:e,popoverTarget:a,text:`+${r}`,variant:"common",hierarchy:"primary",disabled:!t,"data-element":"counter","data-color":"black","data-num-length":r?.toString().length})}),Ev=({children:r,id:e,size:a="sm",overflowCount:t=0,shouldShowOverflow:o=!1,anchorAt:n="bottom-end",tryFallbacks:c=!0,...l})=>{const d=Math.min(t,999),h=Br(e,"arc-avatar-overflow"),p=(0,s.useMemo)(()=>`${h}-anchor`,[h]),v=(0,s.useMemo)(()=>s.Children.toArray(r),[r]);return(0,i.jsxs)(i.Fragment,{children:[d>0&&(0,i.jsx)(zv,{count:d,anchorId:p,overflowId:h,shouldShowOverflow:o}),o&&d>0&&(0,i.jsx)(ka,{...l,scheme:"inverse","arc-avatar-overflow":"",id:h,anchorAt:n,tryFallbacks:c,alternateAnchorId:p,hidePopoverButton:!0,variant:"common","data-size":a,children:(0,i.jsx)(Sv,{children:v.map((g,f)=>(0,i.jsx)(Av,{children:g},f))})})]})};Cr("ArcAvatarOverflow",Cv);const Ud=({fg:r,bg:e})=>u`
  &:has(>[data-color=mono-inverse]) {
    ${r}•high: var(--arc-color-fg-on-mono-inverse);
    ${e}•high: var(--arc-color-bg-mono-inverse);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${e}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=brand]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-brand-stark);
    ${r}•low: var(--arc-color-fg-brand-stark);
    ${e}•low: var(--arc-color-bg-brand-subtle);
  }

  &:has(>[data-color=mono]) {
    ${r}•high: var(--arc-color-fg-on-mono);
    ${e}•high: var(--arc-color-bg-mono);
    ${r}•low: var(--arc-color-fg-on-mono);
    ${e}•low: var(--arc-color-bg-mono);
  }

  &:has(>[data-color=blue]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-blue-stark);
    ${r}•low: var(--arc-color-fg-blue-stark);
    ${e}•low: var(--arc-color-bg-blue-subtle);
  }

  &:has(>[data-color=neutral]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${e}•high: var(--arc-color-bg-neutral-heavy);
    ${r}•low: var(--arc-color-fg-neutral-stark);
    ${e}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=purple]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-purple-stark);
    ${r}•low: var(--arc-color-fg-purple-stark);
    ${e}•low: var(--arc-color-bg-purple-subtle);
  }

  &:has(>[data-color=green]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-green-stark);
    ${r}•low: var(--arc-color-fg-green-stark);
    ${e}•low: var(--arc-color-bg-green-subtle);
  }

  &:has(>[data-color=yellow]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-yellow-stark);
    ${r}•low: var(--arc-color-fg-yellow-stark);
    ${e}•low: var(--arc-color-bg-yellow-subtle);
  }

  &:has(>[data-color=red]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-red-stark);
    ${r}•low: var(--arc-color-fg-red-stark);
    ${e}•low: var(--arc-color-bg-red-subtle);
  }

  &:has(>[data-color=maroon]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-maroon-stark);
    ${r}•low: var(--arc-color-fg-maroon-stark);
    ${e}•low: var(--arc-color-bg-maroon-subtle);
  }

  &:has(>[data-color=mint]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-mint-stark);
    ${r}•low: var(--arc-color-fg-mint-stark);
    ${e}•low: var(--arc-color-bg-mint-subtle);
  }

  &:has(>[data-color=orange]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-orange-stark);
    ${r}•low: var(--arc-color-fg-orange-stark);
    ${e}•low: var(--arc-color-bg-orange-subtle);
  }

  &:has(>[data-color=ai]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${e}•high: var(--arc-gradient-ai-300);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${e}•low: var(--arc-gradient-ai-100);
  }

  &:has(>[data-color=overlay-light]) {
    ${r}•high: var(--arc-color-mono-black);
    ${e}•high: var(--arc-color-alpha-white-80);
    ${r}•low: var(--arc-color-alpha-heavy);
    ${e}•low: var(--arc-color-alpha-white-20);
  }

  &:has(>[data-color=overlay-dark]) {
    ${r}•high: var(--arc-color-mono-white);
    ${e}•high: var(--arc-color-alpha-black-70);
    ${r}•low: var(--arc-color-mono-white);
    ${e}•low: var(--arc-color-alpha-black-40);
  }
`,Kd=({fg:r,bg:e})=>u`
  &:has(>[data-contrast=high]) {
    ${r}: var(${r}•high);
    ${e}: var(${e}•high);
  }

  &:has(>[data-contrast=low]) {
    ${r}: var(${r}•low);
    ${e}: var(${e}•low);
  }
`,vr=u`--arc•badge`,ls=u`${vr}•fg`,ds=u`${vr}•bg`,_v=Ud({fg:ls,bg:ds}),Pv=Kd({fg:ls,bg:ds}),Tv=u`
  &:has(>[data-size=lg]) {
    ${vr}•font•size: var(${b}•14);
    ${vr}•font•size•caps: var(${b}•12);
    ${vr}•size: var(${b}•24);
    ${vr}•min•size: var(${b}•30);
    ${vr}•padding•inline: var(${b}•8);
    ${vr}•border•radius: var(${b}•4);
    ${vr}•gap: var(${b}•4);
  }

  &:has(>[data-size=md]) {
    ${vr}•font•size: var(${b}•12);
    ${vr}•font•size•caps: var(${b}•10);
    ${vr}•size: var(${b}•20);
    ${vr}•min•size: var(${b}•24);
    ${vr}•padding•inline: var(${b}•6);
    ${vr}•border•radius: var(${b}•4);
    ${vr}•gap: var(${b}•4);
  }

  &:has(>[data-size=sm]) {
    ${vr}•font•size: var(${b}•10);
    ${vr}•font•size•caps: var(${b}•8);
    ${vr}•size: var(${b}•16);
    ${vr}•min•size: var(${b}•18);
    ${vr}•padding•inline: var(${b}•4);
    ${vr}•border•radius: var(${b}•4);
    ${vr}•gap: var(${b}•4);
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    ${vr}•font•size: 1em;
    ${vr}•font•size•text: 0.75em;
    ${vr}•font•size•caps: 0.625em;
    ${vr}•size: 1.25em;
    ${vr}•min•size: 1.5em;
    ${vr}•padding•inline: 0.375em;
    ${vr}•border•radius: 0.25em;
    ${vr}•gap: 0.25em;
  }
`,Iv=u`
  &:has(>[data-layout=fill]) {
    ${vr}•flex: auto; /* same as 1 (1 1 auto) but with clearer intent */
    ${vr}•display: flex;
    ${vr}•min•width: var(${vr}•min•size);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }

  &:has(>[data-layout=hug]) {
    ${vr}•flex: none; /* same as 0 0 auto but with clearer intent */
    ${vr}•display: inline-flex;
    ${vr}•min•width: min-content;
  }
`,Rv=u`
@layer arc-components {

  [arc-badge-wrapper] {
    ${_v}
    ${Pv}
    ${Tv}
    ${Iv}

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-height: 1lh;
    --arc-icon-text-align-items: center;
    --arc-icon-text-gap: var(${vr}•gap);
    --arc-icon-text-svg-width: var(--arc-badge-svg-width, 1em);
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-wrapper]:not([hidden]) {
    flex: var(--arc-badge-flex, var(${vr}•flex, unset));
    align-self: var(--arc-badge-align-self, flex-start);
    display: var(${vr}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;

    &:has(>[data-is-flexible]) {
      min-width: var(--arc-badge-min-width, var(${vr}•min•width));
    }
  }

  [arc-badge] {
    font-size: var(--arc-badge-font-size, var(${vr}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: var(${vr}•flex);
    display: var(${vr}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: var(${vr}•size);
    padding-inline: var(${vr}•padding•inline);

    overflow: hidden;
    white-space: nowrap;
    line-height: 1;

    color: var(--arc-badge-color, var(${ls}));
    background: var(--arc-badge-background, var(${ds}));
    border-radius: var(${vr}•border•radius);
    mix-blend-mode: var(--arc-badge-mix-blend-mode, unset);

    :is([data-element=icon], [data-element=text]) {
      font-size: var(${vr}•font•size•text, 1em);
    }

    &[data-is-uppercase] [data-element=text] {
      text-transform: uppercase;
      font-size: var(${vr}•font•size•caps);
    }
  }

}
`,Wd=["brand","blue","neutral","purple","green","yellow","red","orange","mint","maroon","mono","mono-inverse","ai","overlay-light","overlay-dark"],Mv=["brand",...Wd.filter(r=>r!=="brand")],Lv=["neutral",...Wd.filter(r=>r!=="neutral")],jv=me(ht,Mv),Dv=me(ht,Lv),Bv=me(xe,["inherit","lg","md","sm"]),Ov=me(va,["hug","fill"]),Nv=["high","low"],Fv=me(Wr,["brand-blue","brand-black","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),Hv={"brand-blue":"brand","brand-black":"mono-inverse",neutral:"neutral",info:"purple",success:"green",warning:"yellow",critical:"red",ai:"ai","overlay-light":"overlay-light","overlay-dark":"overlay-dark"},Vv=({children:r,icon:e,text:a,isFlipped:t,isFlexible:o,isUppercase:n,color:c,variant:l,size:d="inherit",layout:h="hug",contrast:p="high",...v})=>{const g=c??Hv[l??"brand-blue"],f=r||(0,i.jsx)(le,{icon:e,text:a,isFlipped:t,layout:"gutter"}),m=h==="fill"&&o;return(0,i.jsx)("span",{...v,"arc-badge-wrapper":"",children:(0,i.jsx)("span",{"arc-badge":"","data-contrast":p,"data-color":g,"data-layout":h,"data-size":d,"data-is-flexible":m?"":void 0,"data-is-uppercase":n?"":void 0,children:f})})};Cr("ArcBadge",Rv);const Xr=u`--arc•badge•count`,us=u`${Xr}•fg`,hs=u`${Xr}•bg`,Gv=Ud({fg:us,bg:hs}),Uv=Kd({fg:us,bg:hs}),Kv=u`
  &:has(>[data-size=lg]) {
    ${Xr}•font•size: var(${b}•14);
    ${Xr}•size: var(${b}•24);
    ${Xr}•padding•inline: var(${b}•4);
  }

  &:has(>[data-size=md]) {
    ${Xr}•font•size: var(${b}•12);
    ${Xr}•size: var(${b}•20);
    ${Xr}•padding•inline: var(${b}•4);
  }

  &:has(>[data-size=sm]) {
    ${Xr}•font•size: var(${b}•10);
    ${Xr}•size: var(${b}•16);
    ${Xr}•padding•inline: var(${b}•4);
  }

  &:has(>[data-size=inherit]) { /** @default • scalable based on 'md' size */
    ${Xr}•font•size: 1em;
    ${Xr}•font•size•text: 0.75em;
    ${Xr}•size: 1.25em;
    ${Xr}•padding•inline: 0.25em;
  }
`,Wv=u`
  &:has(>[data-shape=square]) {
    ${Xr}•border•radius: var(${b}•4);
  }

  &:has(>[data-shape=circle]) {
    ${Xr}•border•radius: var(--arc-border-radius-pill);
  }
`,Xv=u`
@layer arc-components {

[arc-badge-count-wrapper] {
  ${Gv}
  ${Uv}
  ${Kv}
  ${Wv}
}

/* CORE ------------------------------------------------------------• */

[arc-badge-count-wrapper]:not([hidden]) {
  flex: none;
  align-self: var(--arc-badge-count-align-self, flex-start);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 1lh;
  max-height: 1lh;
  vertical-align: bottom;
}

[arc-badge-count] {
  font-size: var(--arc-badge-count-font-size, var(${Xr}•font•size));
  font-weight: var(--arc-font-weight-600);

  flex: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: var(${Xr}•size);
  min-width: var(${Xr}•size);
  padding-inline: var(${Xr}•padding•inline);

  white-space: nowrap;
  line-height: normal;

  color: var(--arc-badge-count-color, var(${us}));
  background: var(--arc-badge-count-background, var(${hs}));
  border-radius: var(${Xr}•border•radius);
  mix-blend-mode: var(--arc-badge-count-mix-blend-mode, unset);

  [data-element=text] {
    font-size: var(${Xr}•font•size•text, 1em);
  }
}

`,qv=me(xe,["inherit","lg","md","sm"]),Yv=me(Wr,["neutral","brand","critical","warning","success","inverse"]),Zv=["low","high"],Jv=me($o,["square","circle"]),Qv={neutral:"neutral",brand:"brand",critical:"red",warning:"yellow",success:"green",inverse:"mono"},rf=({children:r,text:e,color:a,variant:t,contrast:o,size:n="inherit",shape:c="square",...l})=>{const d=r||(0,i.jsx)("span",{"data-element":"text",children:e}),h=a??Qv[t??"neutral"],p=t==="critical"?"high":o??"low";return(0,i.jsx)("span",{...l,"arc-badge-count-wrapper":"",children:(0,i.jsx)("span",{"arc-badge-count":"","data-color":h,"data-contrast":p,"data-shape":c,"data-size":n,children:d})})};Cr("ArcBadgeCount",Xv);const ia=u`--arc•banner`,Te=u`${ia}•bg`,Ce=u`${ia}•fg`,Qe=u`${ia}•columns`,Va=u`${ia}•border`,ps=u`${ia}•border•radius`,Go=u`${ia}•padding`,kt=u`${ia}•min•height`,$c=u`${ia}•body`,Xt=u`${$c}•font•size`,yc=u`${$c}•gap`,Xd=u`${$c}•flex•direction`,qd=u`${$c}•min•width`,gs=u`${ia}•icon`,qt=u`${gs}•font•size`,vs=u`${gs}•padding`,nt=u`${gs}•color`,Yd=u`${ia}•action`,fs=u`${Yd}•justify`,ms=u`${Yd}•gap`,Uo=u`${ia}•column•gap`,bs=u`${ia}•row•gap`,ef=u`
  &:where([variant=ai]) {
    ${Ce}: var(--arc-color-fg-primary);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${Te}: var(--arc-banner-gradient-ai-50) padding-box, var(--arc-banner-gradient-ai-100) border-box;
    ${Va}: var(--arc-border-width-sm) solid transparent;
  }

  &:where([variant=announcement]) {
    ${Ce}: var(--arc-color-fg-primary);
    ${nt}: var(--arc-color-fg-brand-mid);
    ${Te}: var(--arc-color-bg-blue-muted);
    ${Va}: var(--arc-border-width-sm) solid var(--arc-color-border-blue-subtle);
  }

  &:where([variant=critical]) {
    ${Ce}: var(--arc-color-fg-primary);
    ${nt}: var(--arc-color-fg-critical-mid);
    ${Te}: var(--arc-color-bg-critical-muted);
    ${Va}: var(--arc-border-width-sm) solid var(--arc-color-border-critical-subtle);
  }

  &:where([variant=info]) {
    ${Ce}: var(--arc-color-fg-primary);
    ${nt}: var(--arc-color-fg-info-mid);
    ${Te}: var(--arc-color-bg-info-muted);
    ${Va}: var(--arc-border-width-sm) solid var(--arc-color-border-info-subtle);
  }

  &:where([variant=neutral]) {
    ${Ce}: var(--arc-color-fg-secondary);
    ${nt}: var(--arc-color-fg-secondary);
    ${Te}: var(--arc-color-alpha-muted);
    ${Va}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &:where([variant=success]) {
    ${Ce}: var(--arc-color-fg-primary);
    ${nt}: var(--arc-color-fg-success-mid);
    ${Te}: var(--arc-color-bg-success-muted);
    ${Va}: var(--arc-border-width-sm) solid var(--arc-color-border-success-subtle);
  }

  &:where([variant=warning]) {
    ${Ce}: var(--arc-color-fg-primary);
    ${nt}: var(--arc-color-fg-warning-mid);
    ${Te}: var(--arc-color-bg-warning-muted);
    ${Va}: var(--arc-border-width-sm) solid var(--arc-color-border-warning-subtle);
  }
`,af=u`
  &:where([variant=ai]) {
    ${Ce}: var(--arc-color-fg-on-stark);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${Te}: var(--arc-banner-gradient-ai-300);
  }

  &:where([variant=announcement]) {
    ${Ce}: var(--arc-color-fg-on-stark);
    ${Te}: var(--arc-color-bg-blue-stark);
  }

  &:where([variant=critical]) {
    ${Ce}: var(--arc-color-fg-on-stark);
    ${Te}: var(--arc-color-bg-critical-mid);
  }

  &:where([variant=info]) {
    ${Ce}: var(--arc-color-fg-on-stark);
    ${Te}: var(--arc-color-bg-info-stark);
  }

  &:where([variant=neutral]) {
    ${Ce}: var(--arc-color-fg-on-stark);
    ${Te}: var(--arc-color-bg-neutral-stark);
  }

  &:where([variant=success]) {
    ${Ce}: var(--arc-color-fg-on-stark);
    ${Te}: var(--arc-color-bg-success-stark);
  }

  &:where([variant=warning]) {
    ${Ce}: var(--arc-color-fg-on-mid);
    ${Te}: var(--arc-color-bg-warning-mid);
  }
`,tf=u`
  ${yc}: 0.375em;
  ${Xd}: column;
  ${qd}: 7em;
  ${ms}: 0.75em;
  ${Uo}: 0.75em;
  ${bs}: 0.75em;

  /* INSET SETUP ---------------------------------------------------• */

  &[layout=inset] {
    ${ef}

    ${Go}: 0 0.75em 0 1em;
    ${ps}: var(--arc-border-radius-lg);
    ${yc}: 0.125em;
    ${vs}: 0.0625em;
    ${Uo}: 0.625em;

    ${kt}: 5em;

    &:where([density=comfortable]) {
      &:not(:has([arc-banner-actions], [arc-banner-dismiss]))) {
        ${kt}: 4.75em;
      }
      &:has([arc-banner-heading]):not(:has([arc-banner-message])),
      &:has([arc-banner-message]):not(:has([arc-banner-heading])),
      &:not(:has([arc-banner-message], [arc-banner-heading])) {
        ${kt}: 3.5em;
        ${bs}: 0.25em;

        &:has([arc-banner-actions]) {
          ${kt}: 3.75em;
        }
      }
    }

    &[action-placement=bottom] {
      ${fs}: flex-start;

      &[density=compact] {
        ${Go}: 0 0.25em 0 0.5em;
      }
    }

    &[density=compact]:where([action-placement=inline]) {
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${Xt});
      }
    }
  }

  /* BLEED SETUP ---------------------------------------------------• */

  &[layout=bleed] {
    ${af}

    ${kt}: 4em;
    ${Go}: 0 0.75em 0 1em;
    ${Va}: none;
    ${ps}: 0;
    ${yc}: 0.125em;
    ${Uo}: 1em;
    ${fs}: flex-end;
    ${vs}: 0.125em;

    &[density=compact],
    &[alignment=center] {
      ${qt}: 1.125em;
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${Xt});
      }
    }
  }

  /* DENSITIES -----------------------------------------------------• */

  &[density=comfortable] {
    ${qt}: 1em;
    ${Xt}: 0.875em;
  }

  &[density=compact] {
    ${kt}: 2em;
    ${Go}: 0 0.25em 0 0.5em;
    ${Xt}: 0.75em;
    ${ms}: 0.5em;
    ${Uo}: 0.5em;

    &[action-placement=inline] {
      ${qt}: 1em;
    }

    &[action-placement=bottom] {
      ${qt}: 0.875em;
    }

    [arc-banner-grid] {
      align-self: center;
    }
  }

  /* Inter-component communication • ArcIcon/ArcIconText/ArcLink ---• */

  &[layout=inset] {
    &[density=compact]:where([action-placement=inline]) {
      --arc-icon-text-icon-color: var(--arc-banner-icon-color, var(${nt}));
      --arc-icon-text-gap: 0.375em;
    }

    [arc-banner-icon] {
      --arc-icon-color: var(--arc-banner-icon-color, var(${nt}));
    }
  }

  &[layout=bleed] {
    &:where([density=compact], [alignment=center]) {
      --arc-icon-text-gap: 0.375em;
    }

    &[alignment=center] [arc-banner-grid] {
      --arc-icon-height: 100%;
      --arc-icon-max-height: 100%;
      --arc-icon-text-icon-size: var(${qt});
    }
  }

  &[density=compact] [arc-banner-body] {
    --arc-icon-height: 100%;
    --arc-icon-max-height: 100%;
    --arc-icon-text-icon-size: 1.125em;
  }

`,of=u`
  &[layout=inset] {
    [arc-banner-grid] {
      margin-block: 0.75em;
    }

    &[density=compact] {
      &[action-placement=bottom] {
        [arc-banner-grid] {
          margin-block: 0.25em 0.625em;
        }
      }

      &:not([action-placement=bottom]) {
        [arc-banner-grid] {
          margin-block: 0.25em;
          line-height: normal;
        }

        [arc-banner-icon],
        [arc-banner-body] {
          align-self: center;
        }
      }
    }

    &[action-placement=bottom] {
      [arc-banner-actions] { grid-row: 2; }
      &:has([arc-banner-icon]) [arc-banner-actions] { grid-column: 2 / -1; }
      &:not(:has([arc-banner-icon])) [arc-banner-actions] { grid-column: 1 / -1; }
    }
  }
`,nf=u`
  &[layout=bleed] {
    &[density=compact] {
      [arc-banner-grid] {
        margin-block: 0.25em;
      }
    }

    [arc-banner-grid] {
      margin-block: 0.5em;
      align-self: center;
      align-items: center;
    }

    &[alignment=center] {
      [arc-banner-grid] {
        font-size: var(${Xt});
        place-items: center;
        line-height: normal;
      }
    }
  }
`,cf=u`
  &:where([action-placement=inline]) {
    align-items: flex-start;

    &[density=compact] {
      ${Qe}: 1fr auto auto;

      &:not(:has([arc-banner-actions])):has([arc-banner-dismiss]),
      &:not(:has([arc-banner-dismiss])):has([arc-banner-actions]) {
        ${Qe}: 1fr auto;
      }
    }

    &[density=comfortable] {
      ${Qe}: auto 1fr auto auto;

      &:has([arc-banner-icon]):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:has([arc-banner-icon]):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${Qe}: auto 1fr auto;
      }

      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):has([arc-banner-dismiss]) {
        ${Qe}: 1fr auto auto;
      }

      &:has([arc-banner-icon]):not(:has([arc-banner-actions])):not(:has([arc-banner-dismiss])) {
        ${Qe}: auto 1fr;
      }
      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:not(:has([arc-banner-icon])):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${Qe}: 1fr auto;
      }
    }

    &:not(:has([arc-banner-icon], [arc-banner-dismiss], [arc-banner-actions])) {
      ${Qe}: 1fr;
    }
  }

  &:where([action-placement=bottom]) {
    ${Qe}: auto 1fr auto;

    &:not(:has([arc-banner-icon])) {
      ${Qe}: 1fr auto;
    }

    &:not(:has([arc-banner-dismiss])) {
      ${Qe}: auto 1fr;
    }

    &:not(:has([arc-banner-icon])):not(:has([arc-banner-dismiss])) {
      ${Qe}: 1fr;
    }
  }
`,sf=u`
  width: var(--arc-banner-width, 100%);
  max-width: 100%;
  border: var(--arc-banner-border, var(${Va}));
  background: var(--arc-banner-background, var(${Te}));
  border-radius: var(--arc-banner-border-radius, var(${ps}));
  padding: var(--arc-banner-padding, var(${Go}));
  min-height: var(--arc-banner-min-height, var(${kt}, auto));
  font-size: var(--arc-banner-font-size, initial);
  line-height: var(--arc-line-height-loose);
  overflow: var(--arc-banner-overflow, unset);

  &:not([hidden]) {
    display: flex;
    align-items: center;
  }

  ${cf}

  [arc-banner-grid] {
    color: var(--arc-banner-color, var(${Ce}));
    flex: 1;

    display: grid;
    align-items: baseline;
    grid-template-columns: var(${Qe});
    column-gap: var(${Uo});
    row-gap: var(${bs});
  }

  [arc-banner-body] {
    color: var(--arc-banner-color, var(${Ce}));
    flex: 1;
    min-width: var(--arc-banner-body-min-width, var(${qd}));

    display: flex;
    flex-direction: var(${Xd});
    gap: var(${yc});
  }

  [arc-banner-icon] {
    font-size: var(${qt});
    padding-inline: var(${vs});
  }

  [arc-banner-heading],
  [arc-banner-message] {
    flex: none;
  }

  [arc-banner-heading],
  [arc-banner-message],
  [arc-banner-actions] {
    font-size: var(${Xt});
    margin: 0;
  }

  [arc-banner-actions] {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: var(--arc-banner-action-justify, var(${fs}));
    gap: var(--arc-banner-action-gap, var(${ms}));
  }

`,lf=u`
@layer arc-components {
  ${qg}

  [arc-banner] {
    /* CORE VARIABLES -----------------------------------------------• */
    ${tf}

    /* CORE STYLES --------------------------------------------------• */
    ${sf}

    /* INSET LAYOUT -------------------------------------------------• */
    ${of}

    /* BLEED LAYOUT -------------------------------------------------• */
    ${nf}
  }

}
`,df=["comfortable","compact"],uf=["inset","bleed"],hf=["inline","bottom"],pf=["left","center"],gf=[...Oa],vf=[...Wr,"announcement"],ff=me(vf,["ai","announcement","critical","info","neutral","success","warning"]),ct={layout:"inset",variant:"neutral",density:"comfortable",actionPlacement:"inline",alignment:"left",showDismiss:!0},mf=r=>r==="critical"||r==="warning"?"alert":"status",bf=({children:r,id:e,icon:a,dismissProps:t,heading:o,density:n=ct.density,layout:c=ct.layout,actionPlacement:l=ct.actionPlacement,alignment:d=ct.alignment,actionSlot:h,showDismiss:p=ct.showDismiss,message:v,variant:g=ct.variant,onClose:f,...m})=>{const y=Br(e,"arc-banner"),w=Li(a),x=d==="center",C=c==="bleed",z=c==="inset",k=n==="compact",T=l==="inline",P=!!w,V=z&&g==="ai"?"ai-200":void 0,I={variant:g,layout:c,density:n,alignment:d,"action-placement":l},D=()=>(0,i.jsx)(Sr,{icon:w,gradient:V}),X=()=>(0,i.jsx)(i.Fragment,{children:!!h&&(0,i.jsx)("span",{"arc-banner-actions":"",children:h})}),E=()=>(0,i.jsx)("div",{"arc-banner-dismiss":"",children:(0,i.jsx)(jr,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:z||C&&g==="warning"?"common":"alpha",hierarchy:"tertiary",shape:"square","aria-label":"Dismiss",size:k?"sm":"md",...t,onClick:rr=>{t?.onClick?.(rr),f?.()}})}),ar=({showActions:rr=!0})=>(0,i.jsx)("div",{"arc-banner-body":"",children:r||(0,i.jsxs)(le,{icon:(0,i.jsx)(D,{}),children:[!!o&&(0,i.jsx)("strong",{children:o})," ",v," ",rr&&h]})}),W=()=>(0,i.jsxs)(i.Fragment,{children:[P&&(0,i.jsx)("span",{"arc-banner-icon":"",children:(0,i.jsx)(D,{})}),(0,i.jsx)("div",{"arc-banner-body":"",children:r||(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("strong",{"arc-banner-heading":"",children:o}),v&&(0,i.jsx)("span",{"arc-banner-message":"",children:v})]})})]});return(0,i.jsx)("div",{role:mf(g??ct.variant),...m,...I,"arc-banner":"",id:y,children:(0,i.jsxs)("div",{"arc-banner-grid":"",children:[x?(0,i.jsx)(ar,{}):(0,i.jsxs)(i.Fragment,{children:[k&&T?(0,i.jsx)(ar,{showActions:!1}):(0,i.jsx)(W,{}),(0,i.jsx)(X,{})]}),p&&(0,i.jsx)(E,{})]})})};Cr("ArcBanner",lf);const Ga=u`--arc•label`,Ko=u`${Ga}•cursor`,Wo=u`${Ga}•opacity`,$f=u`
@layer arc-components {

  [arc-label] {
    /* Inter-Component Communication -------------------------------• */
    /* also applies to nested ArcLabelContent */
    ${Wo}: var(--arc-label-opacity, unset);
    ${Wo}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

    /* Internal STYLES ---------------------------------------------• */
    ${Ga}•display: var(--arc-label-display, inline-flex);
    ${Ga}•gap: var(--arc-label-gap, var(${b}•8));
    ${Ga}•align•items: var(--arc-label-align-items, baseline);

    ${Ko}: var(--arc-label-cursor, pointer);
    ${Ko}•disabled: var(--arc-label-cursor-disabled, not-allowed);

    &:has(:disabled) {
      ${Ko}: var(${Ko}•disabled);
      ${Wo}: var(${Wo}•disabled);
    }

    &[data-layout=fill] {
      ${Ga}•display: flex;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-label]:not([hidden]) {
    display: var(${Ga}•display);
    align-items: var(${Ga}•align•items);
    gap: var(${Ga}•gap);
    cursor: var(${Ko});
  }

}
`,yf=fr(va,["hug","fill"]),wt=({layout:r,...e})=>(0,i.jsx)("label",{...e,"arc-label":"","data-layout":r});Cr("ArcLabel",$f);const xf=u`
@layer arc-components {

  [arc-label-content] {
    opacity: var(--arc-label-opacity, var(${Wo}, unset));
    transition: var(--arc-label-transition, opacity 100ms ease-out);
    user-select: var(--arc-label-user-select, none);
    -webkit-user-select: var(--arc-label-user-select, none);
  }

}
`,Ct=r=>(0,i.jsx)("span",{...r,"arc-label-content":""});Cr("LabelContent",xf);const kf={checkbox:"checkbox",radio:"radio",switch:"radio"},Xo=({id:r,indeterminate:e,type:a,onChange:t,...o})=>{const n=a==="checkbox"&&!!e,c=(0,s.useRef)(null),l=Br(r,`arc-${a}`),d=h=>p=>{if(!(p?.target instanceof HTMLInputElement))return;const v={checked:p?.target.checked,indeterminate:p?.target?.indeterminate,name:p?.target?.name,value:o?.value};h?.(v,p)};return(0,s.useEffect)(()=>{c.current?.type==="checkbox"&&(c.current.indeterminate=!!e)},[e]),(0,i.jsx)("input",{...o,id:l,ref:c,type:kf[a],"arc-input-type":a,"aria-disabled":o?.disabled||void 0,"data-is-disabled":o?.disabled||void 0,"data-is-checked":o?.checked||void 0,"data-is-indeterminate":n||void 0,onChange:d(t)})},wf=u`
@layer arc-components {

  [arc-input-mask] {
    ${G}•border•width: var(--arc-border-width-sm);
    ${G}•border: var(${G}•border•width) solid var(${G}•border•color);

    /* Inter-Component Communication ---------------------------------• */

    /* for: ArcIcon */
    --arc-icon-size: var(${G}•icon•size); /* ArcIcon */

    /* STATES --------------------------------------------------------• */

    &:has(:disabled) {
      ${G}•cursor: not-allowed;
    }

    &:has(:focus:focus-visible) {
      ${G}•outline: var(${G}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES -----------------------------------------------------• */

  [arc-input-mask-wrapper] {
    align-self: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 1lh;
  }

  [arc-input-mask] {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(${G}•width);
    height: var(${G}•height);
    opacity: var(${G}•opacity, var(--arc-alpha-100));

    color: var(${G}•color, transparent);
    background: var(${G}•background);
    border: var(${G}•border);
    border-radius: var(${G}•border•radius);
    translate: var(${G}•translate, unset);

    outline: var(${G}•outline, none);
    outline-offset: var(${G}•border•width);

    transition-duration: 100ms;
    transition-behavior: allow-discrete;
    transition-timing-function: ease-in-out;
    transition-property:
      opacity,
      background,
      color,
      border-color,
      outline;

    [arc-input-type] {
      flex: none;
      outline: none;
      appearance: none;
      position: absolute;
      inset: calc(var(${G}•border•width) * -1);
      cursor: var(${G}•cursor, pointer);
      margin: 0;
      padding: 0;
      border: 0;
      z-index: var(${G}•z•index, unset);
    }
  }

}
`,xc=({type:r,...e})=>(0,i.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,i.jsx)("span",{...e,"arc-input-mask":r})});Cr("ArcBooleanInputMask",wf);const de=u`--arc•checkbox`,Cf=u`
@layer arc-components {

  [arc-checkbox] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${de}•font•size: 1em;
      ${de}•icon•size: 0.625em;
      ${de}•size: 1.125em;
      ${de}•gap: 0.5em;
    }

    &[data-size=md] {
      ${de}•font•size: var(${b}•14);
      ${de}•icon•size: var(${b}•10);
      ${de}•size: var(${b}•18);
      ${de}•gap: var(${b}•8);
    }

    &[data-size=sm] {
      ${de}•font•size: var(${b}•12);
      ${de}•icon•size: var(${b}•10);
      ${de}•size: var(${b}•16);
      ${de}•gap: var(${b}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: ArcBooleanInputMask */
    ${G}•border•radius: var(${b}•4);
    ${G}•size: var(${de}•size);
    ${G}•icon•size: var(${de}•icon•size);
    ${G}•width: var(${de}•size);
    ${G}•height: var(${de}•size);
    ${G}•translate: 0 var(${b}•1m);•

    /* for: ArcLabel */
    --arc-label-gap: var(${de}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-checkbox]:not([hidden]) {
    font-size: var(${de}•font•size);
    display: var(--arc-checkbox-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked, :indeterminate)) {
      ${G}•color: transparent;
      ${G}•border•color: var(--arc-color-border-stark);
      ${G}•background: transparent;

      &:hover {
        ${G}•border•color: var(--arc-color-border-theme-heavy);
        ${G}•background: var(--arc-color-bg-theme-subtle);
      }

      &:has(:disabled) {
        ${G}•border•color: var(--arc-color-border-disabled);
        ${G}•background: var(--arc-color-bg-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* PRIMARY, +DISABLED */
    &[data-variant=primary] {
      &:has(:checked, :indeterminate) {
        ${G}•color: var(--arc-color-fg-on-theme-heavy);
        ${G}•border•color: transparent;
        ${G}•background: var(--arc-color-bg-theme-heavy);

        &:not(:has(:disabled)):hover {
          ${G}•color: var(--arc-color-fg-on-theme-stark);
          ${G}•background: var(--arc-color-bg-theme-stark);
        }

        &:has(:disabled) {
          ${G}•color: var(--arc-color-fg-on-theme-mid);
          ${G}•background: var(--arc-color-bg-theme-mid);
        }
      }
    }

    /* SECONDARY, +DISABLED */
    &[data-variant=secondary] {
      &:has(:checked, :indeterminate) {
        ${G}•color: var(--arc-color-fg-theme-heavy);
        ${G}•border•color: var(--arc-color-border-theme-heavy);
        ${G}•background: transparent;

        &:not(:has(:disabled)):hover {
          ${G}•color: var(--arc-color-fg-theme-stark);
          ${G}•border•color: var(--arc-color-border-theme-stark);
        }

        &:has(:disabled) {
          ${G}•color: var(--arc-color-fg-theme-subtle);
          ${G}•border•color: var(--arc-color-border-theme-mid);
        }
      }
    }
  }

}
`,Sf=fr(va,["hug","fill"]),Af=fr(xe,["inherit","md","sm"]),zf=fr(Wr,["primary","secondary"]),Zd=({children:r,label:e,layout:a,size:t="md",variant:o="primary",useMask:n=!0,...c})=>{const{className:l,title:d,...h}=c,p={className:l,title:d},v=r??e,g=(0,i.jsx)(Xo,{...h,type:"checkbox"}),f=n&&(0,i.jsxs)(xc,{type:"checkbox",children:[g,(0,i.jsx)(Sr,{icon:h?.indeterminate?"fa-solid fa-minus arc-fw":"fa-solid fa-check arc-fw"})]}),m=!!v&&(0,i.jsxs)(wt,{layout:a,children:[f||g,(0,i.jsx)(Ct,{children:v})]});return(0,i.jsx)("span",{...p,"arc-checkbox":"","data-size":t,"data-variant":o,children:m||f||g})};Cr("ArcCheckbox",Cf);const sa=u`--arc•cb`,qr=u`${sa}•o`,la=u`${qr}•border`,$s=u`${qr}•icon`,ys=u`${qr}•text`,Ef=u`
@layer arc-components {

  [arc-checkbox-bar] {
    ${sa}•font•size: var(${b}•14);
    ${sa}•border•radius: var(${b}•6);
    ${sa}•background: var(--arc-color-alpha-black-0);
    ${sa}•padding: 0px;
    ${sa}•gap: var(${b}•2);

    ${qr}•color: var(--arc-color-fg-secondary);
    ${qr}•background: var(--arc-color-alpha-white-0);

    ${la}•color: var(--arc-color-alpha-black-0);
    ${la}•width: var(${b}•1);
    ${la}•radius: var(${b}•6); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------- */
    &[data-size=lg] { /* @default */
      ${qr}•size: var(${b}•40);
      ${qr}•line•height: var(${b}•38); /* • -2px to account for border-width (top/bottom) */
      ${$s}•padding: var(${b}•8);
      ${ys}•padding: var(${b}•12);
    }

    &[data-size=md] {
      ${qr}•size: var(${b}•32);
      ${qr}•line•height: var(${b}•30); /* • -2px to account for border-width (top/bottom) */
      ${$s}•padding: var(${b}•6);
      ${ys}•padding: var(${b}•8);
    }

    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    /* LAYOUTS ------------------------------------------------------ */
    &[data-layout=hug] { /* @default */
      ${sa}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${sa}•display: flex;
    }
  }

  /* STATES --------------------------------------------------------- */
  [arc-checkbox-bar-option] {
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${qr}•color: var(--arc-color-fg-on-hover-default);
        ${qr}•background: var(--arc-color-bg-hover-default);
        ${la}•color: var(--arc-color-alpha-black-0);
      }
    }

    &:has(:checked) {
      ${qr}•color: var(--arc-color-fg-primary);
      ${qr}•background: var(--arc-color-bg-secondary);
      ${la}•color: var(--arc-color-alpha-black-0);
      ${qr}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${qr}•color: var(--arc-color-fg-disabled);
    }

    &:has(:focus-within:focus-visible) {
      ${qr}•outline: var(${la}•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------- */
  [arc-checkbox-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-checkbox-bar]:not([hidden]) {
    font-size: var(--arc-checkbox-bar-font-size, var(${sa}•font•size));
    display: var(${sa}•display);
    gap: var(${sa}•gap);
    background: var(${sa}•background);
    border-radius: var(${la}•radius);
    padding: 0;
    margin: 0;

    [arc-checkbox] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${la}•radius);
      outline: var(${qr}•outline, none);
      outline-offset: var(${la}•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=checkbox] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${qr}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${qr}•size);
      min-width: var(${qr}•size);

      border-radius: var(${la}•radius);
      border: var(${la}•width) solid var(${la}•color);
      background: var(${qr}•background);
      color: var(${qr}•color);
      font-weight: var(${qr}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${ys}•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${$s}•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,_f=fr(va,["hug","fill"]),Pf=fr(xe,["lg","md"]),Tf=({children:r,label:e,icon:a,...t})=>{const o=r||(0,i.jsx)(le,{icon:a,text:e});return(0,i.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":t?.checked||void 0,children:(0,i.jsx)(Zd,{...t,label:o,layout:"fill",useMask:!1})})},If=({children:r,size:e="lg",layout:a="hug",...t})=>(0,i.jsx)("ul",{...t,"arc-checkbox-bar":"","data-size":e,"data-layout":a,role:"group",children:r});Cr("ArcCheckboxBar",Ef);const ue=r=>u`max(${r}px, ${r/16}em)`,Pa=u`--arc•chip`,qo=u`${Pa}•fg`,Yo=u`${Pa}•bg`,Zo=u`${Pa}•border`,kc=u`${Pa}•height`,wc=u`${Pa}•padding`,Cc=u`${Pa}•leading•edge`,Sc=u`${Pa}•dismiss•edge`,xs=u`${Pa}•avatar•gap`,Ac=u`${Pa}•icon•gap`,zc=u`${Pa}•dismiss•gap`,Rf=u`:where(:hover, [data-simulate=hover], :has([data-simulate=hover]))`,Mf=u`:not([is-selected], [is-disabled])`,Lf=u`
  ${qo}: var(--arc-chip-color, var(--arc-color-fg-primary));
  ${Yo}: var(--arc-chip-background, var(--arc-color-bg-primary));
  ${Zo}: var(--arc-chip-border-color, var(--arc-color-border-mid));
  ${xs}: ${ue(6)};
`,jf=u`
  &[data-size=sm] {
    ${kc}: ${ue(24)};
    ${wc}: ${ue(8)};
    ${Cc}: ${ue(1)};
    ${Sc}: 0;
    ${Ac}: ${ue(4)};
    ${zc}: 0;
  }

  &[data-size=md] {
    ${kc}: ${ue(32)};
    ${wc}: ${ue(12)};
    ${Cc}: ${ue(3)};
    ${Sc}: ${ue(3)};
    ${Ac}: ${ue(8)};
    ${zc}: ${ue(2)};
  }

  &[data-size=lg] {
    ${kc}: ${ue(40)};
    ${wc}: ${ue(16)};
    ${Cc}: ${ue(3)};
    ${Sc}: ${ue(7)};
    ${Ac}: ${ue(8)};
    ${zc}: ${ue(4)};

    &[has-dismiss] {
      ${xs}: ${ue(8)};
    }
  }
`,Df=u`
  /* WRAPPER — visible pill ----------------------------------------• */
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  gap: var(${zc});
  height: var(${kc});
  border-radius: var(--arc-border-radius-pill);
  border: var(--arc-border-width-sm) solid var(${Zo});
  background: var(${Yo});
  color: var(${qo});
  font-family: var(--arc-font-family-body);
  font-size: var(--arc-chip-font-size, initial);
  transition:
    background-color 200ms ease-out,
    border-color 200ms ease-out,
    color 200ms ease-out;

  &:has([arc-chip-body]:focus-visible) {
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: var(--arc-border-width-md);

    [arc-chip-body]:focus-visible { outline: none; }
  }
`,Bf=u`
  /* BODY — content surface + inner slots --------------------------• */
  [arc-chip-body] {
    flex: 1;
    appearance: none;
    display: inline-flex;
    align-items: center;
    height: 100%;
    padding: 0 var(${wc});
    margin: 0;
    background: transparent;
    border: none;

    /* Asymmetric left padding when an avatar is present — matches the avatar's vertical inset. */
    &:has([arc-avatar-text]) {
      padding-inline-start: var(${Cc});
    }

    /* Inter-Component Communication • ArcAvatarText ------------• */
    --arc-avatar-text-gap: var(${xs});

    /* Inter-Component Communication • ArcIconText --------------• */
    --arc-icon-text-gap: var(${Ac});
    --arc-icon-text-line-height: var(--arc-line-height-tight);
  }

  /* When a dismiss sibling is present, pull body flush right and reserve outer space for it. */
  &[has-dismiss] {
    padding-inline-end: var(${Sc});
    [arc-chip-body] { padding-inline-end: 0; }
  }
`,Of=u`
  /* DISMISS — sibling of body -------------------------------------• */
  [data-slot=dismiss]:where(:hover, [data-simulate=hover]) {
    background: var(--arc-color-alpha-subtle);
  }
`,Nf=u`
  /* INTERACTIVE — only set on interactive wrappers ----------------• */
  &[is-interactive] {
    cursor: pointer;
    user-select: none;

    [arc-chip-body] {
      color: inherit;
      cursor: inherit;
    }

    &${Rf}${Mf} {
      ${Yo}: var(--arc-color-bg-hover-default);
      ${Zo}: var(--arc-color-border-hover);
    }
  }

  /* SELECTED ------------------------------------------------------• */
  &[is-selected] {
    ${Yo}: var(--arc-color-bg-blue-muted);
    ${Zo}: var(--arc-color-border-selected);
    ${qo}: var(--arc-color-fg-brand-heavy);
  }

  /* DISABLED ------------------------------------------------------• */
  &[is-disabled] {
    ${Yo}: transparent;
    ${Zo}: var(--arc-color-border-disabled);
    ${qo}: var(--arc-color-fg-disabled);
    cursor: not-allowed;
  }
`,Ff=u`
  &:where([data-variant=ai]) {
    background: var(--arc-gradient-ai-50);

    &[is-selected] {
      background: var(--arc-gradient-ai-100) padding-box, var(--arc-gradient-ai-200) border-box;
      border-color: transparent;
      ${qo}: var(--arc-color-fg-primary);
    }
  }
`,Hf=u`
@layer arc-components {

  [arc-chip]:not([hidden]) {
    /* SETUP --------------------------------------------------------• */
    ${Lf}

    /* SIZES --------------------------------------------------------• */
    ${jf}

    /* CORE STYLES --------------------------------------------------• */
    ${Df}

    /* BODY ---------------------------------------------------------• */
    ${Bf}

    /* DISMISS ------------------------------------------------------• */
    ${Of}

    /* STATES -------------------------------------------------------• */
    ${Nf}

    /* VARIANTS -----------------------------------------------------• */
    ${Ff}
  }

}
`,Vf=fr(Wr,["common","ai"]),Gf=me(xe,["sm","md","lg"]),Uf={sm:"xs",md:"sm",lg:"md"},Kf={sm:"sm",md:"md",lg:"md"},ks={variant:"common",size:"md"},Wf=({children:r,text:e,variant:a=ks.variant,size:t=ks.size,isSelected:o,isDisabled:n,isStrong:c,icon:l,isFlipped:d,avatar:h,onClick:p,onDismiss:v,dismissProps:g,...f})=>{const m=p!==void 0||o!==void 0,y=m?"button":"span",w=r||e,x=!!h,C=!!l;return(0,i.jsxs)("span",{...f,"arc-chip":"","data-size":t,"data-variant":a,"is-selected":o?"":void 0,"is-disabled":n?"":void 0,"is-interactive":m?"":void 0,"has-dismiss":v?"":void 0,children:[(0,i.jsx)(y,{"arc-chip-body":"",...m&&{type:"button",disabled:n,"aria-pressed":o,"aria-disabled":n||void 0,onClick:n?void 0:p},children:x?(0,i.jsx)(Wn,{avatar:{...h,isActive:!n},isStrong:c,size:Uf[t],overflow:"truncate",children:w}):(C||w)&&(0,i.jsx)(le,{icon:l,isFlipped:d,isStrong:c,size:Kf[t],overflow:"truncate",children:w})}),v&&(0,i.jsx)(jr,{"aria-label":typeof e=="string"?`Remove ${e}`:"Dismiss",icon:"fa-regular fa-xmark",...g,layout:"icon",hierarchy:"tertiary",shape:"round",size:"sm","data-slot":"dismiss",disabled:n,onClick:z=>{g?.onClick?.(z),v()}})]})};Cr("ArcChip",Hf);const Xf=["normal","simple","add","edit"],qf=["solid","gradient"],Yf=["swatch","gradient-stop","gradient"],Zf=["standalone","embedded"],Ec=["gradient-field","gradient-stops","angle-slider","angle-presets"],ws=["color-field","eye-dropper","hue-slider","alpha-slider","alpha-input","hex-input","palettes"],Jd=["eye-dropper","alpha-slider","hex-input","palettes"],Jf=[...ws,...Ec],Qd=r=>r.kind==="gradient",ru=r=>r.activePanel==="solid",Qf=r=>r.activePanel==="gradient",ra={colorField:"Color Saturation and Value",saturation:"Saturation",value:"Value",colorFieldReadout:(r,e)=>`Saturation ${r}%. Value ${e}%.`,hue:"Hue",hueValue:r=>`Hue ${r}\xB0`,opacity:"Opacity",opacityValue:r=>`Opacity ${r}%`,hex:"Hex",eyeDropper:"Dropper",eyeDropperTooltip:"Pick a color",colorPalette:"Color palette",addSwatch:"Add Swatch",addCurrentColor:"Add Current Color",saveColor:"Save Color",save:"Save",cancel:"Cancel",done:"Done",removeColor:"Remove color",removeGradient:"Remove gradient",gradient:"Gradient",gradientStops:"Stops",stopPosition:r=>`Stop ${r} position`,addColorStop:"Add Color Stop",editColorStop:"Edit Color Stop",insertColorStop:"Insert Color Stop",removeColorStop:"Remove Color Stop",distributeColorStops:"Distribute Color Stops",angle:"Angle",gradientAngle:"Gradient angle",gradientAngleOption:r=>`${r}\xB0`},_c=r=>r?{...ra,...r}:ra,Cs=1e-10,Pc=1e-6,Jo=1e-4,eu=2,Y=(r,e,a)=>Math.min(a,Math.max(e,r)),wa=(r,e)=>{const a=10**e;return Math.round(r*a)/a},au=(r,e=Pc)=>Math.abs(r)<e?0:Math.abs(1-r)<e?1:r,rm=r=>{if(!Number.isFinite(r)||r<=0)return eu;let e=r,a=0;for(;a<12;){const t=Math.round(e);if(Math.abs(e-t)<Cs)return a;e*=10,a+=1}return eu},em=(r,e,a,t)=>[{test:e<0&&a>=0,value:(r<0?Math.abs(e):a)>0?wa(r/(r<0?Math.abs(e):a)*100,t):0},{test:a<0,value:e<0?wa(r/Math.abs(e)*100,t):0},{test:e>=0,value:a>0?wa(r/a*100,t):0}].find(({test:o})=>o)?.value??0,Ss=({value:r,min:e=0,max:a=100,step:t=1,precision:o})=>{const n=Number(e),c=Number(a),l=Math.min(n,c),d=Math.max(n,c),h=Number(t),p=Number(r),v=d-l,g=Number.isFinite(h)&&h>0&&v>0?h/v*100:0,f=o??rm(g),m=Y(p,l,d),y=v===0?0:(m-l)/v,w=wa(y*100,f),x=wa(100-w,f),C=em(m,l,d,f);return{toValue:w,fromValue:x,pctSigned:C}},Qo=r=>parseInt(r,16),he=r=>Y(wa(r,0),0,255),Tc=r=>wa((r%360+360)%360,2),tu=(r,e)=>au(wa(Y(r,0,1),e)),Ie=r=>{const e=(r.h%360+360)%360,a=Y(r.s,0,1),t=Y(r.v,0,1),o=Y(r.a,0,1),n=t*a,c=n*(1-Math.abs(e/60%2-1)),l=t-n;let d=0,h=0,p=0;return e<60?[d,h,p]=[n,c,0]:e<120?[d,h,p]=[c,n,0]:e<180?[d,h,p]=[0,n,c]:e<240?[d,h,p]=[0,c,n]:e<300?[d,h,p]=[c,0,n]:[d,h,p]=[n,0,c],{r:(d+l)*255,g:(h+l)*255,b:(p+l)*255,a:o}},rn=(r,e)=>{const a=Y(r.r,0,255)/255,t=Y(r.g,0,255)/255,o=Y(r.b,0,255)/255,n=Math.max(a,t,o),c=Math.min(a,t,o),l=n-c,d=n===0?0:l/n,h=n;let p=e??0;return l>Cs?(n===a?p=60*((t-o)/l%6):n===t?p=60*((o-a)/l+2):p=60*((a-t)/l+4),p<0&&(p+=360)):p=(p%360+360)%360,{h:p,s:d,v:h,a:Y(r.a,0,1)}},ou=r=>{const e=(r.h%360+360)%360,{s:a}=r,{l:t}=r,o=(1-Math.abs(2*t-1))*a,n=o*(1-Math.abs(e/60%2-1)),c=t-o/2;let l=0,d=0,h=0;return e<60?[l,d,h]=[o,n,0]:e<120?[l,d,h]=[n,o,0]:e<180?[l,d,h]=[0,o,n]:e<240?[l,d,h]=[0,n,o]:e<300?[l,d,h]=[n,0,o]:[l,d,h]=[o,0,n],{r:(l+c)*255,g:(d+c)*255,b:(h+c)*255,a:r.a}},nu=r=>{const e=r.r/255,a=r.g/255,t=r.b/255,o=Math.max(e,a,t),n=Math.min(e,a,t),c=o-n;let l=0;c!==0&&(o===e?l=60*((a-t)/c%6):o===a?l=60*((t-e)/c+2):l=60*((e-a)/c+4)),l<0&&(l+=360);const d=(o+n)/2,h=c===0?0:c/(1-Math.abs(2*d-1));return{h:l,s:h,l:d,a:r.a}},cu=r=>{const e=St(r.r),a=St(r.g),t=St(r.b),o=.4122214708*e+.5363325363*a+.0514459929*t,n=.2119034982*e+.6806995451*a+.1073969566*t,c=.0883024619*e+.2817188376*a+.6299787005*t,l=Math.cbrt(o),d=Math.cbrt(n),h=Math.cbrt(c),p=.2104542553*l+.793617785*d-.0040720468*h,v=1.9779984951*l-2.428592205*d+.4505937099*h,g=.0259040371*l+.7827717662*d-.808675766*h,f=Math.sqrt(v*v+g*g);let m=Math.atan2(g,v)*180/Math.PI;return m<0&&(m+=360),{L:Y(p,0,1),C:f,h:m,a:Y(r.a,0,1)}},iu=r=>{const e=Y(r.L,0,1),a=r.h*Math.PI/180,t=r.C*Math.cos(a),o=r.C*Math.sin(a),n=e+.3963377774*t+.2158037573*o,c=e-.1055613458*t-.0638541728*o,l=e-.0894841775*t-1.291485548*o,d=n*n*n,h=c*c*c,p=l*l*l,v=4.0767416621*d-3.3077115913*h+.2309699292*p,g=-1.2684380046*d+2.6097574011*h-.3413193965*p,f=-.0041960863*d-.7034186147*h+1.707614701*p,m=y=>{const w=y<=.0031308?y*12.92:1.055*y**.4166666666666667-.055;return Math.round(Y(w,0,1)*255)};return{r:m(v),g:m(g),b:m(f),a:Y(r.a,0,1)}},St=r=>{const e=he(r)/255;return e<=.04045?e/12.92:((e+.055)/1.055)**2.4},su=r=>{const e=St(r.r),a=St(r.g),t=St(r.b);return .2126*e+.7152*a+.0722*t},Ic=(r,e)=>{const a=r.a+e.a*(1-r.a);if(a<=0)return{r:0,g:0,b:0,a:0};const t=r.a/a,o=e.a*(1-r.a)/a;return{r:he(r.r*t+e.r*o),g:he(r.g*t+e.g*o),b:he(r.b*t+e.b*o),a:tu(a,2)}},en=(r,e,a,t)=>{const o=t?t(r):r,n=t?t(e):e;return Math.abs(o-n)<=a},Yt=(r,e,a)=>en(r,e,a,Math.round),As=(r,e,a)=>en(r,e,a),Rc=(r,e)=>!e||!r?!1:Yt(r.r,e.r,1)&&Yt(r.g,e.g,1)&&Yt(r.b,e.b,1)&&As(r.a,e.a,1/255+Pc),zs=(r,e)=>!r||!e?!1:he(r.r)===he(e.r)&&he(r.g)===he(e.g)&&he(r.b)===he(e.b)&&Math.abs(r.a-e.a)<Pc,Es=(r,e)=>!e||!r?!1:Yt(r.r,e.r,3)&&Yt(r.g,e.g,3)&&Yt(r.b,e.b,3)&&As(r.a,e.a,.02),an=(r,e)=>en(r.h,e.h,Jo)&&en(r.s,e.s,Jo)&&en(r.v,e.v,Jo)&&As(r.a,e.a,Jo),Zt=r=>String(Math.round(Y(r,0,1)*100)),lu=r=>{const e=r.trim();if(!e)return null;if(e.endsWith("%")){const t=Number(e.slice(0,-1).trim());return Number.isFinite(t)?Y(t/100,0,1):null}if(e.startsWith(".")||e.includes(".")){const t=Number(e);return Number.isFinite(t)?Y(t,0,1):null}const a=Number(e);return Number.isFinite(a)?Y(a/100,0,1):null},Mc=r=>Y(Number(r.toFixed(2)),0,1).toString(),am=/^[0-9a-f]+$/i,tm=500,Jt=new Map,_s=r=>({...r}),om=(r,e)=>{if(Jt.size>=tm){const a=Jt.keys().next().value;a&&Jt.delete(a)}Jt.set(r,e?_s(e):null)},Ps=r=>r.split("").map(e=>e+e).join(""),Ts=r=>r.length===3?Ps(r):r,Ua=r=>r.replace(/#/g,"").trim(),du=r=>{const e=r.trim().toLowerCase().replace(/^#/,"");if(![3,4,6,8].includes(e.length))return null;const a=e.length<=4?Ps(e):e;if(!am.test(a))return null;const t=Qo(a.slice(0,2)),o=Qo(a.slice(2,4)),n=Qo(a.slice(4,6)),c=a.length===8?Qo(a.slice(6,8))/255:1;return[t,o,n,c].some(l=>Number.isNaN(l))?null:{r:t,g:o,b:n,a:Y(c,0,1)}},Ta=r=>{const e=Number(r.trim());return Number.isFinite(e)?e:null},Is=r=>{const e=r.trim();if(e.endsWith("%")){const t=Ta(e.slice(0,-1));return t==null?null:Y(t/100*255,0,255)}const a=Ta(e);return a==null?null:Y(a,0,255)},Rs=r=>{const e=r.trim();if(e.endsWith("%")){const t=Ta(e.slice(0,-1));return t==null?null:Y(t/100,0,1)}const a=Ta(e);return a==null?null:Y(a,0,1)},Ms=(r,e)=>{const t=r.trim().toLowerCase().match(e);if(!t)return null;const o=t[1].trim(),[n,c]=o.split("/").map(h=>h.trim()),l=n.includes(",")?n.split(",").map(h=>h.trim()):n.split(/\s+/).filter(Boolean),d=c&&c.length?c:null;return{channels:l,alphaPart:d}},nm=r=>{const e=Ms(r,/^rgba?\((.*)\)$/);if(!e)return null;let{channels:a,alphaPart:t}=e;if(a.length===4&&t===null&&(t=a[3]??null,a=a.slice(0,3)),a.length!==3)return null;const o=Is(a[0]),n=Is(a[1]),c=Is(a[2]);if(o==null||n==null||c==null)return null;let l=1;if(t){const d=Rs(t);if(d==null)return null;l=d}return{r:o,g:n,b:c,a:l}},cm=r=>{const e=Ms(r,/^hsla?\((.*)\)$/);if(!e)return null;let{channels:a,alphaPart:t}=e;if(a.length===4&&t===null&&(t=a[3]??null,a=a.slice(0,3)),a.length!==3)return null;const o=p=>Number(p.replace("deg","").trim()),n=p=>{if(!p.endsWith("%"))return null;const v=Ta(p.slice(0,-1));return v==null?null:v/100},c=o(a[0]),l=n(a[1]),d=n(a[2]);if(!Number.isFinite(c)||l==null||d==null)return null;let h=1;if(t){const p=Rs(t);if(p==null)return null;h=p}return ou({h:c,s:l,l:d,a:h})},im=r=>{const e=Ms(r,/^oklch\((.*)\)$/);if(!e)return null;const{channels:a,alphaPart:t}=e;if(a.length!==3)return null;const o=p=>{const v=p.trim();if(v.endsWith("%")){const f=Ta(v.slice(0,-1));return f!=null?Y(f/100,0,1):null}const g=Ta(v);return g!=null?Y(g,0,1):null},n=p=>{const v=p.trim();if(v.endsWith("%")){const f=Ta(v.slice(0,-1));return f!=null&&f>=0?f/100*.4:null}const g=Ta(v);return g!=null&&g>=0?g:null},c=o(a[0]),l=n(a[1]),d=Ta(a[2].trim());if(c==null||l==null||d==null||!Number.isFinite(d))return null;let h=1;if(t){const p=Rs(t);if(p==null)return null;h=p}return iu({L:c,C:l,h:d,a:h})},Gr=r=>{if(!r||typeof r!="string")return null;const e=r.toLowerCase().trim();if(Jt.has(e)){const t=Jt.get(e);return t?_s(t):null}let a=null;return e.startsWith("#")?a=du(e):e.startsWith("rgb")?a=nm(e):e.startsWith("hsl")?a=cm(e):e.startsWith("oklch")&&(a=im(e)),om(e,a),a?_s(a):null},uu=(r,e,a)=>{const t=Gr(`#${r}`);return t?a?.shouldApplyParsedAlpha===!0&&(r.length===4||r.length===8)?t:{...t,a:e.a}:null},hu=r=>{if(!r||typeof r!="string")return!1;const e=r.trim().toLowerCase();return/^#?[0-9A-F-a-f]{3,4}$/.test(e)||/^#?[0-9A-F-a-f]{6}([0-9A-F-a-f]{2})?$/.test(e)},pu=r=>{if(!r||typeof r!="object")return!1;const e=r;return typeof e.r=="number"&&typeof e.g=="number"&&typeof e.b=="number"&&typeof e.a=="number"},gu=r=>{if(!r||typeof r!="object")return!1;const e=r;return typeof e.h=="number"&&typeof e.s=="number"&&typeof e.v=="number"&&typeof e.a=="number"},Re=(r,e=!1)=>{const a=l=>Y(Math.round(l),0,255).toString(16).padStart(2,"0"),t=a(r.r),o=a(r.g),n=a(r.b),c=a(Y(r.a,0,1)*255);return e?`#${t}${o}${n}${c}`:`#${t}${o}${n}`},Qt=r=>Re({...r,a:1},!1).slice(1),vu=(r,e,a,t,o)=>{const n=Gr(`#${r}`)??e,c={...n,[a]:he(n[a]+t*o)};return Qt(c)},Ls=r=>{const e=nu(r),a=Math.round(e.h),t=Math.round(e.s*100),o=Math.round(e.l*100);return`hsl(${a} ${t}% ${o}% / ${Mc(Y(e.a,0,1))})`},Ka=r=>{const e=Y(Math.round(r.r),0,255),a=Y(Math.round(r.g),0,255),t=Y(Math.round(r.b),0,255),o=Y(r.a,0,1);return o<1?`rgb(${e} ${a} ${t} / ${Mc(o)})`:`rgb(${e} ${a} ${t})`},js=r=>{const e=cu(r),a=Math.round(e.L*1e3)/10,t=Math.round(e.C/.4*1e3)/10,o=Math.round(e.h),n=Y(e.a,0,1);return n<1?`oklch(${a}% ${t}% ${o} / ${Mc(n)})`:`oklch(${a}% ${t}% ${o})`},Ue={ALPHA_MIN:0,ALPHA_MAX:100,ALPHA_SNAP_STEP:10,HUE_MIN:0,HUE_MAX:360,HUE_SNAP_STEP:15,SATURATION_MIN:0,SATURATION_MAX:100,SATURATION_SNAP_STEP:10,VALUE_MIN:0,VALUE_MAX:100,VALUE_SNAP_STEP:10},fu={auto:r=>r.a<1?Ka(r):Re({...r,a:1},!1),hex:r=>Re({...r,a:1},!1),hexa:r=>Re(r,!0),rgb:r=>Ka(r),hsl:r=>Ls(r),oklch:r=>js(r)},sm=(r,e)=>(fu[r]??fu.hex)(e),Lr=r=>typeof r=="string"?r:r.color,Lc=(r,e)=>typeof r!="string"&&r.name?r.name:e??void 0,mu=r=>{const e=Lr(r),a=Gr(e),t=!!a&&a.a<1&&a.a>.01,o=!!a&&a.a===0;return{cssColor:e,rgba:a,isTranslucent:t,isTransparent:o,opaqueHex:a?Re({...a,a:1},!1):null}},jc=(r,e)=>{if(gu(r))return r;const a=(pu(r)?r:null)??Gr(r)??Gr(e)??{r:0,g:0,b:0,a:1};return rn(a)},it=(r,e)=>{const a=e?.fallbackHex??"#000000",t=e?.format??"hex",o=jc(r,a),n={h:(o.h%360+360)%360,s:Y(o.s,0,1),v:Y(o.v,0,1),a:Y(o.a,0,1)},c=Ie(n),l={r:he(c.r),g:he(c.g),b:he(c.b),a:n.a},d=sm(t,l);let h,p,v,g,f;const m=l.a<1?"rgb":"hex",y=l.a<1?Ka(l):Re({...l,a:1},!1),w=ao(d,{contrastBias:e?.contrastBias,bgColor:e?.contrastBgColor});return{format:t,value:d,alpha:l.a,autoFormat:m,autoValue:y,contrastColor:w,hsv:n,rgba:l,get hex(){return h??=Re({...l,a:1},!1)},get hexa(){return p??=Re(l,!0)},get rgb(){return v??=Ka(l)},get hsl(){return g??=Ls(l)},get oklch(){return f??=js(l)}}},bu=(r,e)=>({...it(r.hsv,{format:e}),name:r.name}),Ds=(r,e)=>({color:Lr(r),name:Lc(r,e)}),tn=r=>({color:`#${`00${Math.floor(Math.random()*16777216).toString(16)}`.slice(-6)}`,name:r}),ro=r=>Lr(r).trim().toLowerCase(),eo=(r,e)=>{if(ro(r)===ro(e))return!0;const a=Gr(Lr(r)),t=Gr(Lr(e));return!!a&&!!t&&Rc(a,t)},Bs=(r,e,a)=>{const t=a?.skipIndex;return r.some((o,n)=>n!==t?eo(o,e):!1)},lm=(r,e)=>Bs(r,e)?r:[...r,e],Yr=r=>typeof r=="object"&&r!==null&&"stops"in r&&Array.isArray(r.stops),$u={r:255,g:255,b:255,a:1},yu={r:42,g:42,b:42,a:1},dm=r=>{let e=r,a=0;for(;e;){const t=e.getAttribute("arc-scheme");if(t==="light")return a%2===0?$u:yu;if(t==="dark")return a%2===0?yu:$u;t==="inverse"&&(a+=1),e=e.parentElement}return null},um=r=>{let e=null;try{e=r?document.documentElement?.querySelector?.(r):document.documentElement}catch{return null}if(e==null)return null;let a=null,t=e,o=0;for(;t&&o<12;){const n=Gr(window.getComputedStyle(t).backgroundColor);if(n&&n.a>0){if(a=a?Ic(a,n):n,n.a===1)break}else{const c=dm(t);if(c){a=a?Ic(a,c):c;break}}t=t.parentElement,o+=1}return a},ao=(r,e)=>{const a=Gr(Lr(r));if(!a||a.a===0)return e?.useScheme?"auto":"inherit";const{darkColor:t,lightColor:o,contrastBias:n,bgColor:c,bgElement:l}=e??{},d=e?.useScheme?"light":t??"#000000",h=e?.useScheme?"dark":o??"#ffffff",p=Y(n??-4,-7,7);let v=a;if(a.a<1){const y=Gr(c??""),w=y&&y.a>0?y:null,x=w?null:um(l);v=Ic(a,w??x??{r:255,g:255,b:255,a:1})}const g=su(v),f=(g+.05)/.05,m=1.05/(g+.05);return f+p>=m?d:h},Os=r=>r==null?null:{comparisonKey:ro(r),selectedRgba:Gr(Lr(r))},xu=(r,e)=>{if(!e)return!1;if(ro(r)===e.comparisonKey)return!0;if(!e.selectedRgba)return!1;const a=Gr(Lr(r));return!!a&&Rc(a,e.selectedRgba)},Q={ANGLE:90,ANGLE_MIN:0,ANGLE_MAX:360,ANGLE_SNAP_STEP:15,ANGLE_PRESETS:[0,180,135,225,90,270,45,315],STOPS:[],STOP_MIN:0,STOP_MAX:100},ku=r=>[{color:Lr(r??tn()),at:Q.STOP_MIN},{color:Lr(tn()),at:Q.STOP_MAX}],Ca=r=>r.map((e,a)=>({stop:e,index:a})).sort((e,a)=>e.stop.at-a.stop.at||e.index-a.index),wu=r=>Ca(r).map(e=>e.stop),At=(r,e=Q.STOP_MIN,a=Q.STOP_MAX)=>r.map(t=>({...t,at:Y(Math.round(t.at),e,a)})),Ns=(r,e,a)=>r!=null&&a<=r+1||e!=null&&a>=e-1,hm=(r,e,a)=>Ns(r[e-1]?.stop.at,r[e+1]?.stop.at,a),on=(r,e)=>{if((r.angle??Q.ANGLE)!==(e.angle??Q.ANGLE))return!1;const a=r.stops??[],t=e.stops??[];return a.length!==t.length?!1:a.every((o,n)=>o.at===t[n].at&&o.color===t[n].color)},Fs=(r,e)=>on({stops:At(r.stops??[]),angle:r.angle??Q.ANGLE},{stops:At(e.stops??[]),angle:e.angle??Q.ANGLE}),st=(r,e)=>r.name===e.name&&Wa(r)===Wa(e),nn=(r,e)=>Y(Math.round((r+e)/2),Q.STOP_MIN,Q.STOP_MAX),Cu=(r,e,a=Q.STOP_MIN,t=Q.STOP_MAX)=>e<=1?a:a+r/(e-1)*(t-a),Su=r=>{const e=Ca(r);if(e.length<=1)return r;const a=[...r];return e.forEach((t,o)=>{a[t.index]={...t.stop,at:Y(Math.round(Cu(o,e.length)),Q.STOP_MIN,Q.STOP_MAX)}}),a},Au=(r,e,a)=>{const t=Gr(Lr(r.color)),o=Gr(Lr(e.color));if(!t||!o)return Lr(r.color);const n=e.at-r.at,c=n===0?0:Y((a-r.at)/n,0,1),l={r:t.r+(o.r-t.r)*c,g:t.g+(o.g-t.g)*c,b:t.b+(o.b-t.b)*c,a:t.a+(o.a-t.a)*c};return Re(l,l.a<1)},pm=r=>{const e=Ca(r).map(o=>o.stop);if(e.length<2)return null;let a=0,t=0;for(let o=0;o<e.length-1;o+=1){const n=e[o+1].at-e[o].at;n>a&&(a=n,t=o)}return[e[t],e[t+1]]},zu=(r,e,a="#000000")=>{const t=Ca(r);if(e.kind==="between"){const o=t[e.sortedIndex-1],n=t[e.sortedIndex];if(!o||!n)return{color:Lr(a),at:Hs(r)};const c=nn(o.stop.at,n.stop.at),l=Au(o.stop,n.stop,c);return{color:Lr(l),at:c}}return{color:Lr(a),at:Hs(r)}},Eu=(r,e)=>{if(r.length===0)return[{color:e??Lr(tn()),at:nn(Q.STOP_MIN,Q.STOP_MAX)}];const a=Ca(r),t=a[a.length-1],o=a[a.length-2],n=Q.STOP_MAX,c=o?.stop.at??Q.STOP_MIN,l=nn(c,n),d={color:e??Lr(t.stop.color),at:n};return r.map((h,p)=>p===t.index?{...h,at:l}:h).concat(d)},Hs=r=>{const e=(Q.STOP_MIN+Q.STOP_MAX)/2;if(r.length===0)return e;if(r.length===1)return Y(r[0].at>=e?Q.STOP_MIN:Q.STOP_MAX,Q.STOP_MIN,Q.STOP_MAX);const a=pm(r);return a?nn(a[0].at,a[1].at):e},Wa=r=>{const{stops:e=[],angle:a=Q.ANGLE}=r,t=Ca(e);if(t.length===0)return"transparent";if(t.length===1)return Lr(t[0].stop.color);const o=t.map(({stop:n})=>`${Lr(n.color)} ${n.at}%`);return`linear-gradient(${a}deg, ${o.join(", ")})`},_u=(r,e)=>r?.name??e??void 0,Dc=(r,e="")=>{const a=r.stops??[];if(a.length===0)return Lr(e);const t=Ca(a);if(t.length===1)return Lr(t[0].stop.color);let o=0,n=0,c=0,l=0,d=0;for(let p=0;p<t.length;p+=1){const v=t[p-1]?.stop.at??t[p].stop.at,g=t[p].stop.at,f=t[p+1]?.stop.at??g,m=(g-v)/2+(f-g)/2,y=Gr(Lr(t[p].stop.color));y&&(o+=y.r*m,n+=y.g*m,c+=y.b*m,l+=y.a*m,d+=m)}if(d===0)return Lr(e);const h={r:Math.round(o/d),g:Math.round(n/d),b:Math.round(c/d),a:l/d};return Re(h,h.a<1)},cn=(r,e)=>{const a={stops:r.stops??[],angle:r.angle??Q.ANGLE,...r.name!=null?{name:r.name}:{}},t=Dc(a,e?.fallbackColor),o=ao(t,{contrastBias:e?.contrastBias,bgColor:e?.contrastBgColor});return{gradient:a,value:Wa(a),baseColor:t,contrastColor:o,...r.name!=null?{name:r.name}:{}}},Pu=(r,e)=>{const a=r.stops?.length?r.stops:ku(e),t=r.angle??Q.ANGLE,o={stops:a,angle:t,...r.name!=null?{name:r.name}:{}},n=e?Lr(e):void 0,c=Dc(o,n),l=ao(c);return{gradient:o,value:Wa(o),baseColor:c,contrastColor:l,...r.name!=null?{name:r.name}:{}}},Tu=r=>{const{stops:e=[],angle:a=Q.ANGLE}=r;return e?.length?e.length===1?String(e[0].color):Wa({stops:e,angle:a}):"transparent"},Iu=(r,e,a,t,o,n,c,l,d=!0)=>{if(n<=0)return Y(c,c,l);const h=o*Math.PI/180,p=Math.cos(h),v=Math.sin(h),f=(((r-a)*p+(e-t)*v)/n+1)/2*100,m=d?Math.round(f):f;return Y(m,c,l)},Vs=(r,e,a,t)=>Math.atan2(e-t,r-a)*180/Math.PI,Ru=(r,e,a,t=Q.ANGLE_MIN,o=Q.ANGLE_MAX)=>{let n=a-e;for(;n>180;)n-=360;for(;n<-180;)n+=360;const c=((r+n)%360+360)%360;return Y(c,t,o)},Mu=(r,e=Q.ANGLE_SNAP_STEP,a=Q.ANGLE_MIN,t=Q.ANGLE_MAX)=>Y(Math.round(r/e)*e,a,t),gm=(r,e,a=Q.ANGLE_SNAP_STEP,t=Q.ANGLE_MIN,o=Q.ANGLE_MAX)=>{const n=r%a===0;return e>0?Y(n?r+a:Math.ceil(r/a)*a,t,o):Y(n?r-a:Math.floor(r/a)*a,t,o)},vm=new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"]),Lu=(r,e,a=1)=>{if(!vm.has(r))return null;const o=(e-90)*Math.PI/180,n=Math.cos(o),c=Math.sin(o),l={ArrowRight:[1,0],ArrowLeft:[-1,0],ArrowDown:[0,1],ArrowUp:[0,-1]},[d,h]=l[r],p=d*n+h*c;return p>0?a:p<0||r==="ArrowLeft"||r==="ArrowUp"?-a:a},Gs=()=>{},fm=196.6,Us="arc-color-solid-preview",Ks=new WeakMap,Ws=(r,e)=>{const a=r.getContext("2d",{alpha:!1});if(!a)return;const{width:t,height:o}=r;if(!t||!o)return;const n=`${t}:${o}:${e}`;if(Ks.get(r)===n)return;const c=a.createImageData(t,o),l=c.data;let d=0;for(let h=0;h<o;h+=1){const p=1-(o<=1?0:h/(o-1)),v=Ie({h:e,s:0,v:p,a:1}),g=Ie({h:e,s:1,v:p,a:1}),{r:f,g:m,b:y}=v,{r:w,g:x,b:C}=g;for(let z=0;z<t;z+=1){const k=t<=1?0:z/(t-1);l[d++]=he(f+(w-f)*k),l[d++]=he(m+(x-m)*k),l[d++]=he(y+(C-y)*k),l[d++]=255}}a.putImageData(c,0,0),Ks.set(r,n)},mm=(0,s.memo)(function({value:e,label:a,step:t=.01,stepLarge:o=.1,isDisabled:n=!1,showLabel:c=!1,labels:l,onChange:d}){const h=l??ra,p=a??h.colorField,v=Br(void 0,"color-field"),g=(0,s.useRef)(null),f=(0,s.useRef)(null),m=(0,s.useRef)(!1),y=(0,s.useRef)(null),w=(0,s.useRef)(null),x=(0,s.useRef)(null),C=(0,s.useRef)(null),z=(0,s.useRef)(null),k=(0,s.useRef)(null),[T,P]=(0,s.useState)(!1),[L,V]=(0,s.useState)(null),[I,D]=(0,s.useState)(null),X=Y(L?.saturation??e.saturation,0,1),E=Y(L?.value??e.value,0,1),ar=Math.round(X*100),W=Math.round(E*100),rr=(0,s.useMemo)(()=>{const U=e.hue;return typeof U=="number"&&Number.isFinite(U)?U:fm},[e.hue]),F=(0,s.useMemo)(()=>Tc(rr),[rr]),Z=(0,s.useCallback)((U,er,S="commit")=>{d({hue:rr,saturation:Y(U,0,1),value:Y(er,0,1)},S)},[rr,d]),tr=(0,s.useCallback)(()=>{m.current&&(m.current=!1,V(null),Z(X,E,"commit"))},[Z,X,E]),lr=(0,s.useCallback)((U,er)=>{const S=Y(U,0,1),$=Y(er,0,1);m.current=!0,V({saturation:S,value:$}),Z(S,$,"preview")},[Z]),yr=(0,s.useCallback)(U=>{const er=f.current;if(!er||!m.current)return;const S=U.relatedTarget;S instanceof Node&&er.contains(S)||tr()},[tr]),H=(0,s.useCallback)((U,er,S,$="preview")=>{const O=Y((U-S.left)/S.width,0,1),K=Y((er-S.top)/S.height,0,1),_=O,N=1-K;$==="preview"&&V({saturation:_,value:N}),Z(_,N,$)},[Z]),ir=(0,s.useCallback)(U=>{if(n)return;U.preventDefault(),U.stopPropagation(),m.current=!1;const{clientX:er,clientY:S,pointerId:$,currentTarget:O}=U,K=O.getBoundingClientRect();x.current=$,w.current=K,C.current={clientX:er,clientY:S},z.current=null,k.current=null,O.focus(),O.setPointerCapture($),P(!0),H(er,S,K)},[n,H]),Rr=(0,s.useCallback)(U=>{if(n)return;const{clientX:er,clientY:S,currentTarget:$,pointerId:O}=U;if(x.current!==O)return;const K=w.current??$.getBoundingClientRect();if(U.shiftKey){const _=C.current;if(_){if(z.current===null){const cr=Math.abs(er-_.clientX),wr=Math.abs(S-_.clientY);z.current=cr>=wr?"s":"v",k.current={clientX:er,clientY:S}}const N=k.current??_,or=z.current==="s"?er:N.clientX,nr=z.current==="v"?S:N.clientY;H(or,nr,K);return}}else z.current=null,k.current=null;H(er,S,K)},[n,H]),sr=(0,s.useCallback)(()=>{const U=x.current!=null;x.current=null,w.current=null,C.current=null,z.current=null,k.current=null,P(!1),V(null),m.current=!1,U&&Z(X,E,"commit")},[Z,X,E]),br=(0,s.useCallback)(U=>{if(n)return;const er=U.shiftKey?o:t;let S=X,$=E;switch(U.key){case"ArrowLeft":S=X-er;break;case"ArrowRight":S=X+er;break;case"ArrowUp":$=E+er;break;case"ArrowDown":$=E-er;break;case"Home":S=0,$=1;break;case"End":S=1,$=0;break;default:return}U.preventDefault(),lr(S,$)},[n,t,o,lr,X,E]),ur=(0,s.useCallback)(U=>{if(n||!U.key.startsWith("Arrow"))return;const er=U.shiftKey?o:t,S=U.key==="ArrowLeft"||U.key==="ArrowDown"?-er:er;U.preventDefault(),lr(X+S,E)},[n,t,o,lr,X,E]),hr=(0,s.useCallback)(U=>{if(n||!U.key.startsWith("Arrow"))return;const er=U.shiftKey?o:t,S=U.key==="ArrowLeft"||U.key==="ArrowDown"?-er:er;U.preventDefault(),lr(X,E+S)},[n,t,o,lr,X,E]),gr=(0,s.useMemo)(()=>({"--js\u2022s":String(X),"--js\u2022v":String(1-E)}),[X,E]),xr=(0,s.useRef)(F);return xr.current=F,tt(()=>{const U=g.current,er=y.current;if(!U||!er)return;const S=()=>{const N=U.getBoundingClientRect(),or=Math.max(1,Math.round(N.width)),nr=Math.max(1,Math.round(N.height)),cr=typeof window>"u"?1:Math.max(window.devicePixelRatio||1,1),wr=Math.max(1,Math.round(or*cr)),Mr=Math.max(1,Math.round(nr*cr));er.width!==wr&&(er.width=wr),er.height!==Mr&&(er.height=Mr),Ws(er,xr.current)};S();const $=new ResizeObserver(()=>{S()});$.observe(U);const O=()=>{Ks.delete(er),S()};er.addEventListener("contextrestored",O);const K=U.closest("[arc-color-picker]"),_=N=>{const{detail:or}=N,nr=or?.h;typeof nr!="number"||!Number.isFinite(nr)||Ws(er,Tc(nr))};return K?.addEventListener(Us,_),()=>{$.disconnect(),er.removeEventListener("contextrestored",O),K?.removeEventListener(Us,_)}},[]),tt(()=>{const U=y.current;U&&Ws(U,F)},[F]),(0,i.jsxs)("div",{ref:f,"arc-color-field":"","is-disabled":n?"":void 0,"is-interacting":T?"":void 0,"sr-focus":I??void 0,onBlurCapture:yr,children:[c&&!!p&&(0,i.jsx)("label",{htmlFor:v,children:p}),(0,i.jsxs)("div",{id:v,ref:g,"arc-color-surface":"field",style:gr,tabIndex:n?-1:0,role:"application","aria-label":p,"aria-describedby":`${v}-readout`,onPointerDown:ir,onPointerMove:Rr,onPointerUp:sr,onPointerCancel:sr,onKeyDown:br,children:[(0,i.jsx)("canvas",{ref:y,"arc-color-field-canvas":"","aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-thumb":"","aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-slice":"saturation","has-focus":I==="saturation"?"":void 0,"aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-slice":"value","has-focus":I==="value"?"":void 0,"aria-hidden":"true"})]}),(0,i.jsxs)("div",{"arc-color-field-sr":"","aria-hidden":!1,children:[(0,i.jsx)("div",{"arc-color-field-sr-slider":"saturation",role:"slider",tabIndex:n?-1:0,"aria-label":h.saturation,"aria-orientation":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":ar,onKeyDown:ur,onFocus:()=>D("saturation"),onBlur:()=>D(null)}),(0,i.jsx)("div",{"arc-color-field-sr-slider":"value",role:"slider",tabIndex:n?-1:0,"aria-label":h.value,"aria-orientation":"vertical","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":W,onKeyDown:hr,onFocus:()=>D("value"),onBlur:()=>D(null)})]}),(0,i.jsx)("div",{id:`${v}-readout`,"arc-color-field-readout":"","arc-color-field-sr":"",children:h.colorFieldReadout(ar,W)})]})}),bm=u`--arc•button•bar`,sn=u`${bm}•axis`,$m=u`
@layer arc-components {

  [arc-button-bar=horizontal] {
    ${sn}: row;

    &[is-flipped] {
      ${sn}: row-reverse;
    }
  }

  [arc-button-bar=vertical] {
    ${sn}: column;

    &[is-flipped] {
      ${sn}: column-reverse;
    }
  }

  [arc-button-bar] {
    flex: var(--arc-button-bar-flex, 1);
    display: var(--arc-button-bar-display, flex);
    flex-direction: var(--arc-button-bar-flex-direction, var(${sn}));
    align-items: var(--arc-button-bar-align-items, center);
    justify-content: var(--arc-button-bar-justify-content, flex-end);
    gap: var(--arc-button-bar-gap, var(${M}•8));
    padding: var(--arc-button-bar-padding, 0);
    margin: 0;
  }

}
`,to=({children:r,...e})=>{const{Element:a="menu",orientation:t="horizontal",isFlipped:o=!1,...n}=e;return(0,i.jsx)(a,{...n,"arc-button-bar":t,"is-flipped":o?"":void 0,role:n.role??"group",children:r})};Cr("ArcButtonBar",$m);function zt(r){const e=(0,s.useRef)(r);e.current=r;const a=(0,s.useCallback)((...t)=>e.current?.(...t),[]);return r?a:void 0}const ym=({activeColor:r})=>{const[e,a]=(0,s.useState)(r),t=r!=null,o=t?r:e;(0,s.useEffect)(()=>{a(r)},[r]);const n=(0,s.useCallback)(c=>{t||a(c)},[t]);return{isSelectionControlled:t,activeSelectedColor:o,setUncontrolledSelectedColor:a,selectColor:n}},xm=({palette:r,isSelectionControlled:e,onAddColor:a,emitColorChange:t,setLocalColors:o,setUncontrolledSelectedColor:n,initialColorValue:c,shouldOpenPopover:l=!0,notifyAddColorToggle:d,showPopover:h,hidePopover:p})=>{const v=(0,s.useCallback)(()=>c??tn(),[c]),[g,f]=(0,s.useState)(null),[m,y]=(0,s.useState)(v),w=(0,s.useCallback)(()=>{f(null),y(v())},[v]),x=(0,s.useCallback)(I=>{o(D=>Yr(I)?D.some(ar=>Yr(ar)&&st(ar,I))?D:[...D,I]:D.some(E=>!Yr(E)&&eo(E,I))?D:[...D,I])},[o]),C=(0,s.useCallback)((I,D)=>{a?.(r,I,D),Yr(I)||(t(I),e||n(I))},[t,e,a,r,n]),z=(0,s.useCallback)((I,D)=>{x(I),C(I,D??void 0)},[x,C]),k=(0,s.useCallback)(()=>{if(g!=null)return;const I=v();let D=-1;o(X=>(D=X.length,[...X,I])),f(D),y(I),d?.(!0),l&&h()},[g,v,d,o,l,h]),T=(0,s.useCallback)(I=>{g!=null&&y(I)},[g]),P=(0,s.useCallback)(I=>{I?.preventDefault(),I?.stopPropagation(),g!=null&&o(D=>D.filter((X,E)=>E!==g)),w(),d?.(!1),l&&p()},[g,p,d,w,o,l]),L=(0,s.useCallback)((I,D)=>{const E=(rr=>typeof rr?.preventDefault=="function")(I)?I:D;if(E?.preventDefault(),E?.stopPropagation(),g==null||m==null){d?.(!1),l&&p();return}const W=(r.colors??[]).map((rr,F)=>F===g?m:rr);o(W),C(m,E??void 0),w(),d?.(!1),l&&p()},[g,m,C,p,d,r.colors,w,o,l]),V=(0,s.useCallback)((I,D)=>{D?.preventDefault(),D?.stopPropagation(),z(I,D??void 0)},[z]);return{draftColorIndex:g,draftColorValue:m,startAddDraft:k,updateDraftColor:T,cancelDraftColor:P,saveDraftColor:L,saveCurrentColor:V}};let ju=!1;const ln=new Set,Xs=r=>{ju=r,ln.forEach(e=>{e.setState(r),r||e.onRelease?.()})},Du=r=>{(r.metaKey||r.key==="Meta")&&Xs(!0)},Bu=r=>{Xs(!!r.metaKey)},Ou=()=>{Xs(!1)},km=r=>{const[e,a]=(0,s.useState)(ju),t=(0,s.useRef)(r);return t.current=r,(0,s.useEffect)(()=>{const o={setState:a,onRelease:()=>t.current?.()};return ln.add(o),ln.size===1&&(window.addEventListener("keydown",Du),window.addEventListener("keyup",Bu),window.addEventListener("blur",Ou)),a(e),()=>{ln.delete(o),ln.size===0&&(window.removeEventListener("keydown",Du),window.removeEventListener("keyup",Bu),window.removeEventListener("blur",Ou))}},[]),e},Me=u`--arc-popover`,oo=u`--arc•color•picker`,Zr=u`${oo}•thumb`,no=u`${oo}•tools`,Ia=u`${oo}•dropper`,Nu=u`
  background-image:
    linear-gradient(
      to right,
      transparent,
      var(--js•hex, transparent)
    ),
    conic-gradient(
      var(--arc-color-alpha-subtle) 0 25%,
      var(--arc-color-alpha-muted) 0 50%,
      var(--arc-color-alpha-subtle) 0 75%,
      var(--arc-color-alpha-muted) 0 100%
    );

  background-size: 100% 100%, 1em 1em;
  background-position: 50% 50%, 50% 50%;
`,wm=u`
  background-image:
    linear-gradient(
      to right,
      #f00 0%,
      #ff0 16.66%,
      #0f0 33.33%,
      #0ff 50%,
      #00f 66.66%,
      #f0f 83.33%,
      #f00 100%
    );
`,qs=u`3.75em`,Fu={POPOVER:u`
    /* Inter-Component Communication: ArcPopover */
    ${Me}-width: 14em; /* 224px */
    ${Me}-min-width: 10.5em; /* 140px */
    ${Me}-max-width: 15.75em; /* 252px */
    ${Me}-line-height: normal; /* @note – allows elements to resolve to design-spec heights */
    ${Me}-outline-size: 0px; /* @note – default outline-size causes divider lines to not extend to the edges of the popover shell. */
    ${Me}-padding: 0;
    ${Me}-overflow: hidden auto;

    ${Me}-header-padding: 0.75em 1em;
    ${Me}-header-background: var(--arc-color-bg-mono);
    ${Me}-header-align-items: center;

    ${Me}-body-padding: 0;

    ${Me}-footer-padding: 1em;
    ${Me}-footer-background: var(--arc-color-bg-mono);

    /* Inter-Component Communication: inner ArcTooltips • UX enhancement: transition speed-up */
    [arc-popover-content] {
      ${Me}-transition-duration: 30ms;
    }

    &:has([arc-color-picker=simple]) {
      ${Me}-width: 12.25em; /* 196px */
    }

    /* Inter-Component Communication: ArcButtonBar via ArcPopoverFooter */
    [arc-popover-footer]:has([arc-button-bar]) {
      --arc-button-bar-justify-content: stretch;
      --arc-button-flex: 1;
    }
  `,PICKER:u`
    ${Zr}•shadow: 0 0 0 max(4px, 0.25em) var(--arc-color-alpha-white-95), 0 0 max(6px, 0.375em) max(3px, 0.1875em) var(--arc-color-alpha-black-30);
    ${Zr}•size: max(10px, 0.625em);
    ${Zr}•transition: 200ms ease-out;

    ${oo}•padding: 1em;
    &[is-inline] { ${oo}•padding: 0; }

    &[arc-color-picker=simple] {
      ${Ia}•align•self: end;
      ${no}•gap: 1em 0.5em;

      [arc-color-slider] {
        grid-column: 1 / -1;
      }
    }

    [arc-color-input=hex] {
      --arc-input-prefix-opacity: var(--arc-alpha-40);
      --arc-input-suffix-opacity: var(--arc-alpha-100);
    }

    /* This font-size is intended for various scaling calculations. */
    font-size: initial;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;

    -webkit-user-select: none;
    user-select: none;

    /* Inter-Component Communication: ArcInput & ArcLabel • font-size reset for input labels */
    --arc-input-padding-inline: max(6px, 0.375em);
  `},Cm=u`

  [arc-color-field] {
    display: grid;
    gap: 0.5em;
  }

  [arc-color-surface=field] {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;

    -webkit-user-select: none;
    user-select: none;
    touch-action: none;
    cursor: pointer;

    border-radius: var(--arc-border-radius-md);
    background: var(--arc-color-bg-mono);

    &:focus:focus-visible {
      outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
      outline-offset: 0.25em;
    }

    &::after {
      box-sizing: border-box;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      pointer-events: none;
      z-index: 2;
    }
  }

  [arc-color-field-canvas] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: inherit;
    pointer-events: none;
  }

  [arc-color-field-slice] {
    position: absolute;
    pointer-events: none;
    z-index: 3;
    border-radius: var(--arc-border-radius-pill);
    transition: left var(${Zr}•transition), top var(${Zr}•transition);
  }

  [arc-color-field][sr-focus] [has-focus] {
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: 0.25em;
  }

  /* Saturation axis at current Value */
  [arc-color-field-slice=saturation] {
    inset: calc(var(--js•v) * 100%) 0 auto 0;
    height: var(--arc-border-width-md);
  }

  /* Value axis at current Saturation */
  [arc-color-field-slice=value] {
    inset: 0 auto 0 calc(var(--js•s) * 100%);
    width: var(--arc-border-width-md);
  }

  [arc-color-field-thumb] {
    position: absolute;
    left: calc(var(--js•s) * 100%);
    top: calc(var(--js•v) * 100%);
    transform: translate(-50%, -50%);
    width: var(${Zr}•size);
    height: var(${Zr}•size);
    border: 0;
    border-radius: var(--arc-border-radius-circle);
    box-shadow: var(${Zr}•shadow);
    background: var(--js•rgb);
    z-index: 4;
    transition:
      left var(${Zr}•transition),
      top var(${Zr}•transition);
  }

  @media (prefers-reduced-motion: reduce) {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  [arc-color-field][is-interacting] {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  /* Visually hidden but usable (so SR users can access them) */
  [arc-color-field-sr] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  [arc-color-field-sr-slider] {
    display: block;
  }

`,Sm=u`

  [arc-color-slider] {
    &:has([arc-slider-surface=hue]) { ${Zr}•bg: var(--js•hue); }
    &:has([arc-slider-surface=alpha]) { ${Zr}•bg: transparent; }

    /* Inter-Component Communication: ArcSlider --------------------• */
    --arc-slider-input-height: auto;
    --arc-slider-progress-display: none;
    --arc-slider-track-background: transparent;
    --arc-slider-progress-background: transparent;
    --arc-slider-track-height: 0.875em;
    --arc-slider-thumb-size: var(${Zr}•size);
    --arc-slider-thumb-size-hover: var(${Zr}•size);
    --arc-slider-thumb-shadow: var(${Zr}•shadow);
    --arc-slider-thumb-background: var(${Zr}•bg);
    --arc-slider-thumb-outline-offset: 0.3125em;

    display: grid;
    gap: 0.375em;

    [arc-slider-surface=hue] { ${wm} }
    [arc-slider-surface=alpha] { ${Nu} }
  }

`,Am=u`

  [arc-color-inputs] {
    display: grid;
    gap: 0.5em;
    grid-template-columns: 1fr ${qs};
    align-items: end;

    &:not(:has([arc-color-input=hex])) {
      grid-template-columns: ${qs} 1fr;
    }

    &:has([arc-color-input=hex]):not(:has([arc-color-input=alpha])) {
      grid-template-columns: 1fr;
    }
  }

  [arc-color-input=hex] {
    --arc-icon-color: var(--arc-color-fg-critical-mid);
    --arc-input-action-display: contents;
    --arc-button-min-width: none;
    --arc-button-max-width: 2.25em;
  }

  :is([arc-color-input=stop], [arc-color-input=alpha]) {
    --arc-input-text-align: end;
  }

`,zm=u`
  [arc-gradient-stops] {
    display: grid;
    gap: 0.125em;
  }

  [arc-gradient-stop-list] {
    display: grid;
    gap: 0.125em;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  [arc-gradient-field-wrapper] {
    position: relative;
    &:has([is-rotating]) {
      --angle-output-opacity: 1;
    }
  }

  [arc-gradient-field-angle-output] {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: var(--angle-output-opacity, 0.4);
    transition: opacity 200ms ease-out;
  }

  [arc-gradient-field] {
    position: relative;
    width: 100%;
    min-height: 2.5em;
    aspect-ratio: 1 / 1;
    border-radius: var(--arc-border-radius-circle);
    touch-action: none;
    user-select: none;
    cursor: grab;

    &[is-rotating] {
      cursor: grabbing;
    }

    &::before {
      box-sizing: border-box;
      content: '';
      position: absolute;
      inset: 0;
      border-radius: var(--arc-border-radius-circle);
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      pointer-events: none;
      z-index: 1;
    }
  }

  [arc-gradient-stop-thumb] {
    position: absolute;
    left: 0;
    top: 50%;
    margin-block-start: calc(var(${Zr}•size) / -2);
    margin-inline-start: calc(var(${Zr}•size) / -2);
    width: var(${Zr}•size);
    height: var(${Zr}•size);
    border-radius: var(--arc-border-radius-circle);
    background: var(${Zr}•bg);
    box-shadow: var(${Zr}•shadow);
    cursor: pointer;
    z-index: 1;
    touch-action: none;

    &:focus-visible {
      outline: 0.125em solid var(--arc-color-border-focus);
      outline-offset: 0.25em;
    }

    &::after {
      content: '';
      position: absolute;
      inset: -0.375em;
      border-radius: var(--arc-border-radius-circle);
    }
  }

  [arc-gradient-stop-row] {
    position: relative;
    display: grid;
    grid-template-columns: auto ${qs} 1fr auto;
    gap: 0.5em;
    align-items: center;
    padding: 0.25em;
    margin-inline: -0.25em;
    border-radius: var(--arc-border-radius-md);

    &[is-editing-color] {
      background: var(--arc-color-bg-selected-default);
    }
  }

  [arc-gradient-stop-insert] {
    --arc-button-color: var(--arc-color-alpha-stark);
    --arc-button-width: 100%;
    --arc-button-z-index: 1;

    position: absolute;
    inset: -0.375em 0em auto 0em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--arc-border-radius-pill);
    height: 0.625em;
    opacity: var(--arc-alpha-0);
    background: transparent;
    transition: opacity 200ms ease-out, background 200ms ease-out;

    [arc-icon] {
      background: var(--arc-color-bg-mono);
      padding-inline: 0.25em;
    }

    &::before {
      content: '';
      position: absolute;
      inset: 50% 0 auto 0;
      translate: 0 -50%;
      height: 0.0625em;
      background: transparent;
      pointer-events: none;
    }

    &:where(:has(:hover), :focus-within) {
      opacity: var(--arc-alpha-80);

      &::before {
        background: var(--arc-color-bg-neutral-subtle);
      }
    }
  }

  *:not([arc-gradient-angle-slider]) + [arc-gradient-presets] {
    margin-block-start: 0.75em;
  }

  [arc-gradient-presets] [arc-color-palette-set] {
    --arc-swatch-width: 100%;
    --arc-swatch-border-radius: var(--arc-border-radius-md);

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5em;
    min-inline-size: 0;
    max-inline-size: none;
    padding: 0;
    margin: 0;
    border: 0;
  }
`,Em=u`

  &[arc-color-picker=simple]:has([arc-color-palettes]) [arc-color-tools] {
    padding-top: 0;
  }

  :is([arc-color-tools=simple], [arc-color-tools=solid]) {
    display: grid;
    gap: var(${no}•gap, 0.5em);
    grid-template-columns: var(${no}•columns, auto 1fr);
  }

  [arc-color-tools=gradient] {
    display: grid;
    gap: 0;
    grid-template-columns: var(${no}•columns, 1fr);
  }

  [arc-color-tools=simple] {
    &:has([arc-color-input=hex]):not(:has([arc-color-eye-dropper])) {
      ${no}•columns: 1fr 2em;
    }
  }

  :is([arc-color-field], [arc-color-inputs]) {
    grid-column: 1 / -1;
  }

  [arc-color-eye-dropper] {
    align-self: var(${Ia}•align•self, center);
    justify-self: var(${Ia}•justify•self, center);
  }

  [arc-color-sliders] {
    grid-column: 1 / -1;

    display: grid;
    gap: 0.25em;
    grid-template-columns: auto;
    align-self: center;
  }

  [arc-color-eye-dropper] + [arc-color-sliders] {
    grid-column: 2;
  }

  /* Finding a good place for the eye dropper in some cases */
  &:has([arc-color-input=hex]):not(:has([arc-color-input=alpha], [arc-color-sliders])),
  &:has([arc-color-input=alpha]):not(:has([arc-color-input=hex], [arc-color-sliders])) {
    ${Ia}•align•self: end;
    ${Ia}•justify•self: end;

    &:has([arc-color-eye-dropper]) [arc-color-inputs] { display: contents; }

    &:not(:has([arc-color-field])) { ${Ia}•row: 1; }

    &:not(:has([arc-color-input=hex])) {
      ${Ia}•justify•self: start;
      ${no}•columns: 1fr auto;
      ${Ia}•column: 1;
    }

    [arc-color-eye-dropper] {
      grid-column:  var(${Ia}•column, 2);
      grid-row: var(${Ia}•row, 2);
    }

    [arc-color-sliders] { grid-column: 1 / -1; }
  }

  ${Cm}
  ${Sm}
  ${Am}
  ${zm}

`,_m=u`
@layer arc-components {

  [arc-color-picker-wrapper] {
    ${Fu.POPOVER}
  }

  [arc-color-picker] {
    ${Fu.PICKER}

    [arc-color-picker-section=control] {
      padding: 1em 1em 0 1em;
    }

    &[is-inline] [arc-color-picker-section=control] {
      padding: 0 0 1em 0;
    }

    [arc-color-picker-section]:not([arc-color-picker-section=control]) {
      padding: var(${oo}•padding);

      &:has(+[arc-color-picker-section]) { padding-bottom: 1em; }
      +[arc-color-picker-section] { padding-top: 1em; }

      &[has-divider=top] { border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
      &[has-divider=bottom] { border-bottom: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
    }

    ${Em}

    [arc-color-palettes] {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    [arc-color-section-header] {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5em;
      padding: 0;
      height: 2.5em;
    }

    [arc-gradient-angle-slider] {
      position: sticky;
      bottom: 0;
      background: var(--arc-color-bg-mono);
      border-block-start: 0.0625em solid var(--arc-color-border-mid);
      padding-inline: 1em;
      margin-inline: -1em;
      margin-block-start: 0.75em;
      padding-block-end: 0.75em;
    }


    [arc-color-picker-section=footer] {
      position: sticky;
      bottom: 0;
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      background: var(--arc-color-bg-mono);
      z-index: 2;
    }

    [arc-color-picker-button-bar] * {
      flex: 1;
    }
  }

}
`,ye=u`--arc•color•chip`,Pm=u`
@layer arc-components {

  [arc-color-chip=swatch] {
    ${ye}•radius: var(--arc-border-radius-circle);
    ${ye}•width: var(${b}•24);
    ${ye}•height: var(${b}•24);
    ${ye}•border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  [arc-color-chip=gradient-stop] {
    ${ye}•radius: var(--arc-border-radius-md);
    ${ye}•width: var(${b}•24);
    ${ye}•height: var(${b}•24);
    ${ye}•border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  [arc-color-chip=gradient] {
    ${ye}•radius: var(--arc-border-radius-circle);
    ${ye}•width: var(${b}•24);
    ${ye}•height: var(${b}•24);
    ${ye}•border: none;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: var(--arc-swatch-border-radius, var(${ye}•radius));
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      opacity: 1;
      pointer-events: none;
      z-index: 1;
    }

    &[is-selected]::before {
      opacity: 0;
    }
  }

  [arc-color-chip] {
    --arc-button-position: relative;
    --arc-button-background: var(--js•gradient, var(--js•color));
    --arc-button-color: var(--js•fg, transparent);
    --arc-button-width: var(--arc-swatch-width, var(${ye}•width));
    --arc-button-height: var(--arc-swatch-height, var(${ye}•height));
    --arc-button-border-radius: var(--arc-swatch-border-radius, var(${ye}•radius));
    --arc-button-border: var(${ye}•border);
    --arc-button-outline-offset: var(--arc-border-width-sm);
    --arc-icon-size: var(${b}•10);

    &[is-transparent] {
      --arc-button-background: unset;
      ${Nu}
    }

    &[is-translucent] {
      --arc-button-background:
        var(--js•color)
        linear-gradient(
          to right,
          var(--js•hex),
          var(--js•hex) 50%,
          transparent 50%,
          transparent
        ) border-box;

      &::after {
        content: '';
        position: absolute;
        inset: 0 auto 0 50%;
        translate: -100% 0;
        width: var(--arc-border-width-sm);
        background: var(--arc-color-border-mid);
        pointer-events: none;
        z-index: 1;
      }
    }

    &:is(:hover, [is-selected]) {
      --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-heavy);
      --arc-button-box-shadow: 0 0 0 var(--arc-border-width-md) var(--arc-color-fg-on-mono-inverse) inset;
    }

    &[is-draft] {
      --arc-button-outline: var(--arc-border-width-md) dotted color-mix(in srgb, transparent 35%, var(--arc-color-border-focus) 65%);
    }

    &[is-control] {
      --arc-button-background: var(--arc-color-alpha-muted);
      --arc-button-color: inherit;
    }
  }

}
`,Hu=(0,s.memo)(({color:r,gradient:e,name:a,kind:t,isDraft:o,isSelected:n,contrastBias:c,contrastBgColor:l,canRemoveColor:d,icon:h,text:p,tooltip:v,labels:g,onClick:f,style:m,...y})=>{const w=(0,s.useMemo)(()=>_c(g),[g]),{cssColor:x,isTranslucent:C,isTransparent:z,opaqueHex:k}=(0,s.useMemo)(()=>mu(r??""),[r]),T=e?_u(e,a):Lc(r??"",a),P=p??T??(e?w.gradient:x),L=hu(x)?x.toUpperCase():x,V=v??T??(e?w.gradient:L),I=(0,s.useMemo)(()=>e?Dc(e,x):x,[e,x]),D=(0,s.useMemo)(()=>ao(I,{contrastBias:c,bgColor:l}),[I,c,l]),[X,E]=(0,s.useState)(!1),[ar,W]=(0,s.useState)(!1),[rr,F]=(0,s.useState)(!1),[Z,tr]=(0,s.useState)(!1),lr=km(()=>W(!1)),H=(t==="swatch"||t==="gradient")&&!!d&&(rr&&lr||(lr||ar)&&X),ir=H||Z,Rr=ir?"fa-regular fa-xmark":h??"fa-solid fa-check",sr=t==="gradient"?w.removeGradient:w.removeColor,br=ir?sr:V;(0,s.useEffect)(()=>{H&&tr(!0)},[H]),(0,s.useEffect)(()=>{!H&&n&&!o&&tr(!1)},[o,H,n]);const ur=(0,s.useCallback)(S=>{const $=H||S.metaKey?"remove":"select",O={...it(x,{format:"auto",fallbackHex:x,contrastBias:c,contrastBgColor:l}),contrastColor:D,name:T};if(t==="gradient"&&e!=null){f?.({kind:t,colorData:O,gradientData:cn(e,{contrastBias:c,contrastBgColor:l}),action:$,shouldClosePicker:!1},S);return}f?.({kind:t,colorData:O,action:$,shouldClosePicker:!1},S)},[H,f,x,T,t,e,c,l,D]),hr=(0,s.useCallback)(S=>{S.preventDefault(),S.stopPropagation(),ur(S)},[ur]),gr=(0,s.useCallback)(S=>{S.metaKey&&(S.preventDefault(),S.stopPropagation(),ur(S))},[ur]),xr=(0,s.useCallback)(S=>{const $=S.propertyName??"";!($==="color"||$.includes("color"))||H||tr(!1)},[H]),U=(0,s.useCallback)(S=>{S.key!=="Enter"||!H||(S.preventDefault(),S.stopPropagation(),S.currentTarget.click())},[H]),er=(0,s.useMemo)(()=>({...m??{},"--js\u2022hex":z?"transparent":C&&(k??x??I)||"","--js\u2022color":x??I,"--js\u2022gradient":e?Wa(e):"","--js\u2022fg":n&&!o||H?D:""}),[m,z,C,k,x,I,n,o,H,D,e]);return(0,i.jsx)(jr,{...y,_isCustom:!0,"arc-color-chip":t,layout:"icon",tooltip:br,text:P,icon:Rr,"is-draft":o?"":void 0,"is-selected":!o&&n?"":void 0,"is-translucent":C?"":void 0,"is-transparent":z?"":void 0,style:er,onClick:hr,onContextMenu:gr,onMouseEnter:S=>{E(!0),W(S.metaKey)},onMouseMove:S=>{W(S.metaKey)},onMouseLeave:()=>{E(!1),W(!1),tr(!1)},onFocus:()=>F(!0),onBlur:()=>{F(!1),tr(!1)},onKeyDown:U,onTransitionEnd:xr})});Hu.displayName="ArcColorSwatch";const dn=Hu;dn.getColorData=it,Cr("ArcColorSwatch",Pm);const Vu=(r,e)=>{const a=r.colors??[];return Yr(e)?a.some(n=>Yr(n)&&st(n,e))?r:{...r,colors:[...a,e]}:a.some(o=>!Yr(o)&&eo(o,e))?r:{...r,colors:[...a,e]}},Gu=(r,e)=>{const a=r.colors??[],t=Yr(e)?a.filter(o=>!(Yr(o)&&st(o,e))):a.filter(o=>Yr(o)||!eo(o,e));return t.length===a.length?r:{...r,colors:t}},Uu=(r,e,a)=>r.map(t=>t.id===e.id?Vu(t,a):t),Ku=(r,e,a)=>r.map(t=>t.id===e.id?Gu(t,a):t),Tm=(r,e,a)=>{if(Array.isArray(r)){if(a===void 0)throw new TypeError("ArcColorPalette.addColor: pass (palettes, palette, color) when the first argument is an array.");return Uu(r,e,a)}return Vu(r,e)},Im=(r,e,a)=>{if(Array.isArray(r)){if(a===void 0)throw new TypeError("ArcColorPalette.removeColor: pass (palettes, palette, color) when the first argument is an array.");return Ku(r,e,a)}return Gu(r,e)},Rm=(r,e,a)=>{const t=r.find(o=>o.id===e);return t?Uu(r,t,a):r},Mm=(r,e,a)=>{const t=r.find(o=>o.id===e);return t?Ku(r,t,a):r},Lm=u`
@layer arc-components {

  [arc-color-palette] {
    display: flex;
    flex-direction: column;
    gap: var(${M}•8);

    [arc-color-palette-header] {
      display: flex;
      flex-direction: column;
      gap: var(${M}•4);
      font-size: var(${b}•12);

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      small { opacity: 0.612; }
    }

    [arc-color-palette-set] {
      display: flex;
      flex-wrap: wrap;
      gap: var(${M}•4);
      max-width: calc((var(${b}•24) + var(${M}•4)) * 7 + var(${M}•24));
      min-inline-size: 0;
      padding: 0;
      margin: 0;
      border: 0;
    }

    [arc-color-palette-picker] {
      display: grid;
      gap: var(${M}•8);
      padding-top: var(${M}•8);
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
    }

    [arc-color-palette-inputs] {
      display: grid;
      gap: var(${M}•8);
      grid-template-columns: auto auto;
      align-items: end;
    }

    [arc-color-palette-actions] {
      display: flex;
      justify-content: flex-end;
      gap: var(${M}•8);
    }

    [arc-add-color] {
      --arc-icon-size: var(${b}•10);
    }
  }

}
`,un=({children:r,id:e,heading:a,showHeading:t=!0,setAriaLabel:o,colors:n=[],activeColor:c,activeGradient:l,format:d=Sa.format,canAddColor:h=!1,canAddGradient:p=!1,canRemoveColor:v=!1,contrastBgColor:g,addColorFlow:f="standalone",sharedSwatchProps:m,onSwatchClick:y,onAddColor:w,onRemoveColor:x,onColorChange:C,onAddColorToggle:z,labels:k,...T})=>{const P=(0,s.useMemo)(()=>_c(k),[k]),L=f==="embedded",V=Br(void 0,"add-color-anchor"),I=Br(void 0,"add-color-popover"),D=Br(void 0,"palette-heading"),X=t&&!!a,E=zt(y),ar=zt(w),W=zt(x),rr=zt(C),F=zt(z),[Z,tr]=(0,s.useState)(n),[lr,yr]=(0,s.useState)(!1),[H,ir]=(0,s.useState)(!1),{isSelectionControlled:Rr,activeSelectedColor:sr,setUncontrolledSelectedColor:br,selectColor:ur}=ym({activeColor:c}),hr=(0,s.useMemo)(()=>Os(sr),[sr]),gr=(0,s.useMemo)(()=>Z.map(J=>Yr(J)?{normalized:Wa(J),rgba:null}:{normalized:ro(J),rgba:Gr(Lr(J))}),[Z]),xr=(0,s.useMemo)(()=>gr.map(J=>hr?J.normalized===hr.comparisonKey?!0:!!hr.selectedRgba&&!!J.rgba&&Rc(J.rgba,hr.selectedRgba):!1),[gr,hr]),U=(0,s.useMemo)(()=>xr.some(Boolean),[xr]),er=(0,s.useMemo)(()=>!!l&&Z.some(J=>Yr(J)&&st(J,l)),[l,Z]),S=!L&&U?void 0:sr;(0,s.useEffect)(()=>{tr(n)},[n]);const $=(0,s.useCallback)(J=>{if(typeof J=="object"&&J!==null&&"hsv"in J){rr?.(J);return}const Hr=Lr(J),rt=Lc(J),j=it(Hr,{format:d,contrastBgColor:g});rr?.({...j,name:rt})},[rr,d,g]),O=(0,s.useRef)(!1),K=(0,s.useCallback)(J=>{J&&(O.current=!0,ir(!0)),yr(J),F?.(e,J)},[e,F]),_=(0,s.useCallback)(()=>ka?.handlePopover?.(I,"show"),[I]),N=(0,s.useCallback)(()=>ka?.handlePopover?.(I,"hide"),[I]);(0,s.useEffect)(()=>{lr&&O.current&&(O.current=!1,_())},[lr,_]);const or=(0,s.useMemo)(()=>({id:e,heading:a,showHeading:t,colors:Z,activeColor:c,activeGradient:l,format:d,canAddColor:h,canAddGradient:p,canRemoveColor:v,contrastBgColor:g,addColorFlow:f,sharedSwatchProps:m,onSwatchClick:E,onAddColor:ar,onRemoveColor:W,onColorChange:rr,onAddColorToggle:F}),[e,a,t,Z,c,l,d,h,p,v,g,f,m,E,ar,W,rr,F]),{draftColorIndex:nr,draftColorValue:cr,startAddDraft:wr,updateDraftColor:Mr,cancelDraftColor:Qr,saveDraftColor:De,saveCurrentColor:Ae}=xm({palette:or,isSelectionControlled:Rr,onAddColor:ar,emitColorChange:$,setLocalColors:tr,setUncontrolledSelectedColor:br,initialColorValue:S,shouldOpenPopover:!L,notifyAddColorToggle:K,showPopover:_,hidePopover:N}),oe=(0,s.useMemo)(()=>Z.map((J,Hr)=>nr===Hr&&cr!=null?cr:J),[nr,cr,Z]),ze=(0,s.useMemo)(()=>{if(nr==null||cr==null||hr==null||nr<0||nr>=xr.length||Yr(cr))return xr;const J=[...xr];return J[nr]=xu(cr,hr),J},[xr,nr,cr,hr]),Be=(0,s.useMemo)(()=>Yr(cr)?null:Os(cr),[cr]),aa=(0,s.useMemo)(()=>nr==null||Be==null?!1:Bs(Z.filter(J=>!Yr(J)),cr,{skipIndex:nr}),[nr,Be,cr,Z]),ne=(0,s.useCallback)((J,Hr)=>{if(!J?.colorData)return;if(J.kind==="gradient"){const{gradient:j}=J.gradientData;if(J.action==="remove"&&v){tr(dr=>dr.filter(kr=>!(Yr(kr)&&st(kr,j)))),W?.(or,j,Hr);return}E?.({...J,shouldClosePicker:!1},Hr);return}const rt={color:J.colorData.value,name:J.colorData.name};if(J.action==="remove"&&v){tr(j=>{const dr=j.filter(kr=>Yr(kr)||!eo(kr,rt));return dr.length===j.length?j:dr}),W?.(or,rt,Hr);return}ur(rt),E?.({...J,shouldClosePicker:!1},Hr),$(J.colorData)},[v,$,W,E,or,ur]),Ee=(0,s.useCallback)(J=>nr===J&&cr!=null,[nr,cr]);(0,s.useEffect)(()=>{if(!L||nr==null)return;const J=(p?l:void 0)??(h?sr:void 0);J!=null&&Mr(J)},[l,sr,h,p,nr,L,Mr]);const re=(0,s.useCallback)(J=>{const Hr=J?.newState==="open";yr(Hr),F?.(e,Hr)},[e,F]),Oe=(0,s.useCallback)(J=>{const Hr=(p?l:void 0)??(h?sr??Sa.color:Sa.color);Ae(Hr,J)},[h,p,l,sr,Ae]),Ne=(0,s.useCallback)(J=>{J.key!=="Escape"||!lr||Qr(J)},[Qr,lr]),Fe=(0,s.useMemo)(()=>nr==null||!Yr(cr)?!1:Z.some((J,Hr)=>Hr!==nr&&Yr(J)&&st(J,cr)),[nr,cr,Z]),Tt=h||p,It=L&&(!((p?l:void 0)??(h?sr:void 0))||!lr&&(p&&l?er:U)),mo=L?P.addCurrentColor:P.addSwatch,Tn=L&&lr?P.cancel:mo,Ba=L||!lr,bo=h&&p?void 0:[p?"gradient":"solid"];let hi=Oe;return L||(hi=lr?Qr:wr),(0,i.jsxs)("div",{...T,"arc-color-palette":e,"is-adding-color":lr?"":void 0,children:[X&&(0,i.jsx)("header",{"arc-color-palette-header":"",id:D,children:typeof a=="string"?(0,i.jsx)("strong",{children:a}):(0,i.jsx)(le,{...a,layout:"inline",isStrong:!0})}),(0,i.jsxs)("fieldset",{"arc-color-palette-set":"",id:V,"aria-labelledby":X?D:void 0,"aria-label":X?void 0:o??P.colorPalette,children:[oe?.map((J,Hr)=>{if(Yr(J)){const rt=`${Wa(J)}-${Hr}`,j=!!l&&st(l,J);return(0,s.createElement)(dn,{...m,key:rt,kind:"gradient",gradient:J,name:J.name,isDraft:Ee(Hr),isSelected:j,canRemoveColor:v&&!Ee(Hr),contrastBgColor:g,labels:k,onClick:ne})}return(0,s.createElement)(dn,{...m,key:`${Lr(J)}-${Hr}`,color:J,kind:"swatch",isDraft:Ee(Hr),isSelected:ze[Hr],canRemoveColor:v&&!(L&&Ee(Hr)),contrastBgColor:g,tooltip:L&&Ee(Hr)?P.saveColor:void 0,labels:k,onClick:L&&Ee(Hr)?De:ne})}),Tt&&Ba&&(0,i.jsx)(jr,{"arc-add-color":"",popoverTarget:I,icon:"fa-regular fa-plus",layout:"icon",shape:"round",size:"sm",hierarchy:"secondary",tooltip:Tn,onClick:hi,isDisabled:It})]}),Tt&&!L&&H&&(0,i.jsx)(qa,{mode:"add",heading:"",panels:bo,canTogglePanels:h&&p,color:Yr(cr)?Sa.color:cr??Sa.color,gradient:Yr(cr)?cr:void 0,format:d,labels:k,onChange:J=>{J.activePanel==="solid"?Mr(J.color.value):Mr(J.gradient.gradient)},onPreviewColor:J=>Mr(J.value),onPreviewGradient:J=>Mr(J.gradient),popoverProps:{id:I,popover:"manual",anchorAt:"right-center",alternateAnchorId:V,hidePopoverButton:!0,tryFallbacks:!0,hasTail:!0,onToggle:re,onKeyDown:Ne,footerSlot:(0,i.jsxs)(to,{"arc-color-picker-button-bar":"",children:[(0,i.jsx)(jr,{"arc-color-picker-button":"cancel",text:P.cancel,hierarchy:"secondary",size:"sm",onClick:Qr}),(0,i.jsx)(jr,{"arc-color-picker-button":"save",text:P.save,size:"sm",onClick:De,isDisabled:aa||Fe})]})}}),r&&(0,i.jsx)("footer",{"arc-color-palette-footer":"",children:r})]})};un.addColor=Tm,un.removeColor=Im,Cr("ArcColorPalette",Lm);const jm=(0,s.memo)(function({palette:e,canAddColor:a,canAddGradient:t,canRemoveColor:o,activePaletteColor:n,activePaletteGradient:c,contrastBgColor:l,labels:d,onSwatchClick:h,onAddColor:p,onRemoveColor:v}){const g=(0,s.useCallback)((f,m)=>{h(f,m,e.id)},[e.id,h]);return(0,i.jsx)(un,{...e,canAddColor:a??e.canAddColor,canAddGradient:t??e.canAddGradient,canRemoveColor:o,addColorFlow:"embedded",activeColor:n,activeGradient:c,contrastBgColor:l,labels:d,onAddColor:p,onRemoveColor:v,onSwatchClick:g})}),Wu=({palettes:r=[],canAddColor:e,canAddGradient:a,canRemoveColor:t,activePaletteColor:o,activePaletteGradient:n,contrastBgColor:c,selectedNameRef:l,hsvRef:d,popoverId:h,labels:p,onAddColor:v,onRemoveColor:g,commitLocalHsv:f,...m})=>{const y=(0,s.useRef)(r);y.current=r;const w=(0,s.useCallback)((x,C,z)=>{const k=y.current.find(P=>P.id===z);if(!k)return;if(C?.preventDefault(),C?.stopPropagation(),x?.action==="remove"&&(t??k.canRemoveColor)){k.onSwatchClick?.(x,C);return}x?.kind!=="gradient"&&x?.colorData&&(l.current=x.colorData.name,f(x.colorData.hsv));try{k.onSwatchClick?.(x,C)}catch{}if((x?.shouldClosePicker??!0)&&h)try{ka.handlePopover(h,"hide")}catch{}},[t,f,h,l]);return r.length?(0,i.jsx)("div",{...m,"arc-color-palettes":"","arc-color-picker-section":"palettes",children:r.map(x=>(0,i.jsx)(jm,{palette:x,canAddColor:e,canAddGradient:a,canRemoveColor:!!(t??x.canRemoveColor),activePaletteColor:o,activePaletteGradient:n,contrastBgColor:c,labels:p,onSwatchClick:w,onAddColor:v,onRemoveColor:g},x.id))}):null},Xu=({onCommit:r})=>{const e=(0,s.useRef)(!1),a=(0,s.useCallback)((t,o)=>{const n=()=>{e.current=!1,o(),r()};return{onChange:({value:c})=>{e.current=!0,t(Number(c))},onPointerUp:n,onPointerCancel:n,onBlur:()=>{e.current&&n()}}},[r]);return{isPreviewingRef:e,createInputProps:a}},qu=1,Yu="Please enter six hex digits \u2192 A1B2C3",Dm="Use six hex digits (RGB only). Opacity is not editable in this picker.",Bm=/^[0-9A-Fa-f]{3}$/,Om=/^[0-9A-Fa-f]{4}$/,Nm="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8}",Fm="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}",Zu=r=>{if(Bm.test(r))return{kind:"three",expanded:Ts(r)};if(Om.test(r)){const e=Gr(`#${r}`);if(e)return{kind:"four",shorthand:r,expanded:Qt(e),alphaPercent:Math.round(e.a*100)}}return null},Hm=r=>r?.kind==="three"?`Please enter six hex digits \u2192 ${r.expanded.toUpperCase()}.`:r?.kind==="four"?`Change to \u2192 #${r.expanded.toUpperCase()} at ${r.alphaPercent}% opacity?`:Yu,Vm=(r,e,a)=>{const t=Ua(r),o=Zu(t),n=t.length>0&&(!a&&t.length===8||!e&&t.length!==6&&t.length!==8||Gr(`#${t}`)===null),l=!e&&t.length>0&&t.length!==6&&t.length!==8||!a&&t.length===8?Hm(o):Yu,d=!a&&t.length===8?Dm:l;let h="Apply expanded six-digit hex";return o?.kind==="four"?h=`Apply #${o.expanded.toUpperCase()} and ${o.alphaPercent}% opacity`:o?.kind==="three"&&(h=`Apply expanded hex ${o.expanded.toUpperCase()}`),{isInvalid:n,errorAid:{tooltip:d,ariaLabel:h,fix:o}}},Ju=(r,e,a,t)=>{const o=Gr(`#${r}`);o&&(e(r,{applyHexAlpha:!0,...t}),a(Qt(o)))},Gm=(r,e,a,t)=>{if(e){Ju(r,a,t);return}const o=Gr(`#${r}`);if(o){const n=Qt(o);t(n),a(n)}},Um=(r,e,a,t)=>{if(e)Ju(r,a,t);else{const o=r.slice(0,6);t(o),a(o)}},Km=(r,e,a,t)=>{r.kind==="three"?(a(r.expanded),e(r.expanded)):t?(e(r.shorthand,{applyHexAlpha:!0}),a(r.expanded)):(a(r.expanded),e(r.expanded))},Wm=(r,e=!1)=>{const a=Ua(r);return!e&&a.length>6?a.slice(0,6):a},Xm=(r,e,a,t)=>{if(!a&&(r.length===8||t?.applyHexAlpha===!0))return!1;if(!e&&r.length>0){const o=r.length===6||r.length===8,n=t?.applyHexAlpha===!0&&r.length===4;if(!o&&!n)return!1}return!0},Qu=()=>typeof window<"u"&&"EyeDropper"in window&&typeof window.EyeDropper=="function",Ys=Qu(),rh=Ys?window.EyeDropper:void 0,eh=rh?new rh:void 0,ah=({onColorPicked:r,labels:e,...a})=>{const t=e??ra,[o,n]=(0,s.useState)(!1),c=async()=>{if(!(!Ys||!eh||o)){n(!0);try{const{sRGBHex:l}=await eh.open();if(typeof r=="function"){const d=Ie(jc(l,"#000000"));r(Re({...d,a:1},!1))}else console.warn("EyeDropper: onColorPicked prop was not provided")}catch(l){l instanceof DOMException&&l.name==="AbortError"||console.error("EyeDropper failed:",l)}finally{n(!1)}}};return Ys?(0,i.jsx)("div",{"arc-color-eye-dropper":"",children:(0,i.jsx)(jr,{...a,onClick:c,layout:"icon",shape:"square",size:"md",variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-eye-dropper",text:t.eyeDropper,tooltip:t.eyeDropperTooltip})}):null},co=r=>(0,i.jsx)(i.Fragment,{children:!!r.children&&(0,i.jsx)("span",{...r})}),qm=r=>(0,i.jsx)(i.Fragment,{children:!!r.children&&(0,i.jsx)("span",{...r})}),Zs=({children:r,...e})=>(0,i.jsx)(i.Fragment,{children:!!r&&(0,i.jsx)(wt,{...e,children:(0,i.jsx)(Ct,{children:r})})}),Ym=({children:r,layout:e,size:a,variant:t,tag:o="span",...n})=>(0,i.jsx)(o,{...n,"data-layout":e,"data-size":a,"data-variant":t,children:r}),Zm=()=>(0,i.jsx)("span",{"input-element":"spacer"}),Jm=r=>(0,i.jsx)(co,{...r,"input-element":"header"}),Qm=r=>(0,i.jsx)(Zs,{...r,"input-element":"header-label"}),rb=r=>(0,i.jsx)(co,{...r,"input-element":"header-slot"}),eb=r=>(0,i.jsx)(co,{...r,"input-element":"body"}),ab=r=>(0,i.jsx)(Zs,{...r,"input-element":"input-prefix"}),tb=r=>(0,i.jsx)(Zs,{...r,"input-element":"input-suffix"}),ob=r=>(0,i.jsx)(qm,{...r,"input-element":"input-action"}),nb=r=>(0,i.jsx)(co,{...r,"input-element":"footer"}),cb=r=>(0,i.jsx)(co,{...r,"input-element":"footer-caption"}),ib=r=>(0,i.jsx)(co,{...r,"input-element":"footer-slot"}),sb=r=>e=>{if(!(e?.target instanceof HTMLInputElement))return;const a={name:e?.target?.name,value:e?.target?.value};r?.(a,e)},Ur=u`--arc•input`,Xa=u`${Ur}•fg`,Bc=u`${Xa}•disabled`,Oc=u`${Xa}•readonly`,Nc=u`${Xa}•invalid`,da=u`${Ur}•bg`,Fc=u`${da}•hover`,Hc=u`${da}•disabled`,Vc=u`${da}•readonly`,Gc=u`${da}•invalid`,lb=u`${Ur}•align`,th=u`${lb}•items`,oh=u`${Ur}•header`,Uc=u`${oh}•label•color`,nh=u`${oh}•slot•color`,ch=u`${Ur}•footer`,Js=u`${ch}•caption•color`,ih=u`${ch}•slot•color`,Qs=u`${Ur}•border`,rl=u`${Qs}•radius`,db=u`${Qs}•width`,ua=u`${Qs}•color`,el=u`${Ur}•outline`,sh=u`${el}•size`,lh=u`${el}•offset`,dh=u`${el}•color`,hn=u`${Ur}•height`,ub=u`${Ur}•padding`,Kc=u`${ub}•inline`,al=u`${Kc}•end`,uh=u`${Ur}•slot`,tl=u`${uh}•gap`,ol=u`${uh}•font•size`,Wc=u`${ua}•hover`,Xc=u`${ua}•disabled`,nl=u`${ua}•readonly`,pn=u`${ua}•invalid`,cl=u`${Ur}•action•height`,hh=u`${Ur}•gap`,il=u`${Ur}•font•size`,hb=u`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    ${hn}: var(${b}•48);
    ${al}: var(${M}•8);
    ${cl}: var(${b}•48);
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    ${hn}: var(${b}•40);
    ${cl}: var(${b}•40);
  }

  &[data-size=md] {
    ${hn}: var(${b}•32);
    ${rl}: var(${b}•4);
    ${cl}: var(${b}•32);
  }

  &:has(select) {
    ${Kc}: 0;
    ${th}: stretch;
  }

  & {
    /* Defaults -------------------------• */
    ${il}: var(${b}•14);
    ${ol}: var(${b}•12);

    ${hn}: var(${b}•40); /* default size */
    ${hh}: var(${M}•6);
    ${tl}: var(${M}•4);
    ${Kc}: var(${M}•12);
    ${al}: var(${M}•3);
    ${rl}: var(${b}•8);
    ${db}: var(${b}•1);
    ${sh}: var(${b}•2);
    ${lh}: var(${b}•2);

    &[data-size=inherit] {
      ${il}: 0.875em; /* 14px at 100% */
      ${ol}: 0.75em; /* 12px at 100% */
    }
  }

  /* VARIANTS ------------------------------------------------------• */

  & {
    ${Xa}: var(--arc-color-fg-primary);
    ${Uc}: inherit;
    ${nh}: var(--arc-color-fg-secondary);
    ${Js}: var(--arc-color-fg-secondary);
    ${ih}: var(--arc-color-fg-secondary);

    &[data-variant=outline] { /* @default */
      ${da}: var(--arc-color-bg-primary);
      ${Fc}: var(--arc-color-bg-primary);
      ${ua}: var(--arc-color-border-mid);
      ${Wc}: var(--arc-color-border-heavy);

      ${Bc}: var(--arc-color-fg-disabled);
      ${Hc}: var(--arc-color-bg-secondary);
      ${Xc}: var(--arc-color-border-mid);

      ${Oc}: var(--arc-color-fg-primary);
      ${Vc}: var(--arc-color-bg-disabled);
      ${nl}: var(--arc-color-border-mid);

      ${Nc}: var(--arc-color-fg-critical-mid);
      ${Gc}: var(--arc-color-bg-primary);
      ${pn}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=solid] {
      ${da}: var(--arc-color-bg-secondary);
      ${Fc}: var(--arc-color-bg-hover-default);
      ${ua}: transparent;
      ${Wc}: var(--arc-color-border-stark);

      ${Nc}: var(--arc-color-fg-critical-mid);
      ${Gc}: var(--arc-color-bg-critical-muted);
      ${pn}: transparent;

      ${Bc}: var(--arc-color-fg-disabled);
      ${Hc}: var(--arc-color-bg-disabled);
      ${Xc}: transparent;

      ${Oc}: var(--arc-color-fg-primary);
      ${Vc}: var(--arc-color-bg-disabled);
      ${pn}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=plain] {
      ${da}: transparent;
      ${Fc}: var(--arc-color-bg-hover-default);
      ${ua}: transparent;
      ${Wc}: transparent;

      ${Nc}: var(--arc-color-fg-critical-mid);
      ${Gc}: transparent;
      ${pn}: var(--arc-color-fg-critical-mid);

      ${Bc}: var(--arc-color-fg-disabled);
      ${Hc}: transparent;
      ${Xc}: transparent;

      ${Oc}: var(--arc-color-fg-primary);
      ${Vc}: var(--arc-color-bg-disabled);
      ${nl}: transparent;
    }
  }

  /* STATES --------------------------------------------------------• */

  &:where(:not(:has(
    input:where(:disabled, :read-only),
    select:where(:disabled, [data-readonly])
  ))) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${ua}: var(--arc-input-border-color-hover, var(${Wc}));
      ${da}: var(--arc-input-background-hover, var(${Fc}));
    }

    &:has([input-element=body]) {
      &:where(
        :focus-within,
        [data-simulate=focus],
        [data-simulate=active],
        :has(:focus, :focus-visible)
      ) {
        ${dh}: var(--arc-color-border-focus);
      }
    }
  }

  &:where(:has(
    input[type=range]:not(:disabled),
    select:not(:disabled, [data-readonly])
  )) {
    ${Ur}•cursor: pointer;
  }

  &:where(:has(
    input:not([type=range]):read-only,
    select[data-readonly]
  )) {
    ${Ur}•cursor: default;
    ${Xa}: var(${Oc});
    ${da}: var(${Vc});
    ${ua}: var(${nl});
  }

  &:has(input:disabled, select:disabled) {
    ${Ur}•cursor: not-allowed;
    ${Xa}: var(${Bc});
    ${da}: var(${Hc});
    ${ua}: var(${Xc});
    ${Uc}: var(--arc-color-fg-primary);
  }

  &[data-simulate=invalid],
  &:has(
    input:user-invalid:not(:focus),
    select:user-invalid:not(:focus)
  ) {
    ${da}: var(${Gc});
    ${Uc}: var(${Xa});
    ${ua}: var(${pn});
    ${Js}: var(${Nc});
  }

  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    ${Ur}•display: flex;
  }

  &[data-layout=hug] {
    ${Ur}•display: inline-flex;
  }

  & {
    ${Ur}•border: var(--arc-border-width-sm) solid var(${ua});
    ${Ur}•outline: var(${sh}) solid var(${dh}, transparent);
  }
}

/* Inter-Component Communications ----------------------------------• */

[arc-input] {
  --arc-icon-text-line-height: normal;
  --arc-label-cursor: var(${Ur}•cursor, inherit); /* ArcLabel • cursor syncing */

  &[arc-text-input][data-size=md] {
    --arc-button-border-radius: var(--arc-border-radius-sm);
    --arc-button-outline-offset: 0;
    --arc-button-height: 80%; /* ArcButton • the input size 'md' needs
                                      a slightly smaller "input-action" button
                                      footprint; there's no direct access to
                                      ArcButton['size'] prop in this context */
  }
}

[arc-input]:not([hidden]) {
  display: var(${Ur}•display, flex);
  flex-direction: column;
  gap: var(${tl});
  color: var(--arc-input-color, var(${Xa}));

  :is([input-element=header], [input-element=footer]) {
    flex: none;
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(${ol}));
    gap: var(${tl});
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(${Uc}));
    opacity: var(--arc-input-header-label-opacity, unset);
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(${nh}));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(${Js}));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(${ih}));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    position: relative;
    display: flex;
    align-items: var(${th}, center);
    gap: var(--arc-input-gap, var(${hh}));
    height: var(--arc-input-height, var(${hn}));
    font-size: var(${il});

    color: var(--arc-input-color, var(${Xa}));
    background-color: var(--arc-input-background, var(${da}));
    border: var(--arc-input-border, var(${Ur}•border));
    border-radius: var(--arc-input-border-radius, var(${rl}));
    outline: var(${Ur}•outline, none);
    outline-offset: var(--arc-input-outline-offset, var(${lh}));

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(${Ur}•cursor, unset);

    padding-inline: var(--arc-input-padding-inline, var(${Kc}));

    &:has([input-element=input-action]) {
      padding-inline-end: var(${al});
    }

    input {
      cursor: inherit;
      appearance: none;
      align-self: stretch;
      flex: 1;
      font: inherit;
      color: inherit;
      padding: 0;
      margin: 0;
      outline: none;
      line-height: normal;
      width: var(--arc-input-width, 100%);
      min-width: var(--arc-input-min-width, 1em);
      max-width: var(--arc-input-max-width, 100%);
      text-align: var(--arc-input-text-align, unset);

      &:not([type=range]) {
        border: var(--arc-border-width-sm) solid transparent;
        background: transparent;
      }

      /* @note - textfield appearance suppresses native spinners for number inputs */
      &[arc-input-type=number][is-appearance=textfield] {
        appearance: textfield;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          appearance: none;
        }
      }

      &[arc-input-type=search]::-webkit-search-cancel-button {
        appearance: none;
        display: none;
      }
    }

    /* @note - reset font-size for nested input elements */
    [input-element] { font-size: var(--arc-input-element-font-size, 1em); }
  }

  [input-element=input-prefix] {
    flex: none;
    opacity: var(--arc-input-prefix-opacity, unset);
    font-weight: var(--arc-input-prefix-font-weight, unset);
  }

  [input-element=input-suffix] {
    flex: none;
    opacity: var(--arc-input-suffix-opacity, var(--arc-alpha-40));
  }

  [input-element=input] {
    flex: 1;
    display: flex;
  }

  [input-element=input-action] {
    flex: none;
    cursor: inherit;
    align-self: stretch;
    display: var(--arc-input-action-display, flex);
    align-items: center;
    justify-content: center;
  }
}

}
`,pb={onChangeHandler:sb,Wrapper:Ym,Spacer:Zm,Header:Jm,HeaderLabel:Qm,HeaderSlot:rb,InputBody:eb,InputPrefix:ab,InputSuffix:tb,InputAction:ob,Footer:nb,FooterCaption:cb,FooterSlot:ib};Cr("ArcInput",hb);const zr=pb,gb="[input-element=body]",vb=24;function fb({inputRef:r,onChange:e,enabled:a,deltaPerStep:t=vb}){const o=(0,s.useRef)(e);o.current=e,(0,s.useEffect)(()=>{if(!a||t<=0)return;let n=0;const c=()=>r.current,l=()=>{const f=c();if(!(f instanceof Element))return null;const m=f.closest(gb);return m instanceof HTMLElement?m:null},d=(f,m)=>{const y=o.current;if(!y)return;const w={name:f.name,value:m};y(w,{target:f,currentTarget:f})},h=()=>{n=0},p=f=>{const m=c();if(!m||document.activeElement!==m||m.type!=="number"||m.disabled||m.readOnly)return;f.preventDefault(),f.stopPropagation();const y=Number(m.step)||1,w=Number(m.min),x=Number(m.max),C=Number.isFinite(w)?w:void 0,z=Number.isFinite(x)?x:void 0;let k=Number(m.value);if(!Number.isFinite(k))return;n+=f.deltaY;const T=t,P=()=>{const I=Math.max(C??-1/0,k-y);return I===k?!1:(k=I,d(m,String(I)),!0)},L=()=>{const I=Math.min(z??1/0,k+y);return I===k?!1:(k=I,d(m,String(I)),!0)};for(;n>=T;){if(!P()){n=0;break}n-=T}for(;n<=-T;){if(!L()){n=0;break}n+=T}},v=l(),g=c();if(!(!v||!g||g.type!=="number"))return g.addEventListener("blur",h),v.addEventListener("wheel",p,{passive:!1}),()=>{g.removeEventListener("blur",h),v.removeEventListener("wheel",p)}},[a,t,r])}const qc=fr(va,["fill","hug"]),Yc=fr(xe,["inherit","xl","lg","md"]),sl=fr(Wr,["outline","solid","plain"]),mb=qc,bb=Yc,$b=fr(sl,["outline","solid"]),yb=["text","number","password","email","url"],io=(0,s.forwardRef)(({layout:r="hug",size:e="inherit",variant:a="outline",inputProps:t,headerLabel:o,headerSlot:n,inputPrefix:c,inputAction:l,inputSuffix:d,footerCaption:h,footerSlot:p,...v},g)=>{const{id:f,wheelControl:m,appearance:y,onChange:w,...x}=t,C="arc-search"in v,z=C?"search":x?.type||"text",k=x?.disabled||void 0,T=x?.readOnly||void 0,P=x?.required||void 0,L=!!(o||n),V=!!(h||p),I=(0,s.useRef)(null),D=(0,s.useCallback)(ar=>{I.current=ar,ta(g,ar)},[g]),X=typeof m=="object"?m.deltaPerStep:void 0;fb({enabled:z==="number"&&m!==!1,deltaPerStep:X,inputRef:I,onChange:w});const E=l&&(0,s.isValidElement)(l)?(0,s.cloneElement)(l,{size:"md"}):l;return(0,i.jsxs)(zr.Wrapper,{...v,"arc-text-input":"","arc-input":z,layout:r,size:e,variant:a,children:[L&&(0,i.jsxs)(zr.Header,{children:[(0,i.jsx)(zr.HeaderLabel,{htmlFor:f,children:o}),!!n&&(0,i.jsx)(zr.Spacer,{}),(0,i.jsx)(zr.HeaderSlot,{children:n})]}),(0,i.jsxs)(zr.InputBody,{children:[(0,i.jsx)(zr.InputPrefix,{htmlFor:f,children:c}),(0,i.jsx)("input",{...x,...C?{type:z}:{},ref:D,id:f,"arc-input-type":z,onChange:zr.onChangeHandler(w),"aria-disabled":k,"aria-readonly":T,"aria-required":P,"is-appearance":y??void 0}),(0,i.jsx)(zr.InputSuffix,{htmlFor:f,children:d}),(0,i.jsx)(zr.InputAction,{children:E})]}),V&&(0,i.jsxs)(zr.Footer,{children:[(0,i.jsx)(zr.FooterCaption,{children:h}),!!p&&(0,i.jsx)(zr.Spacer,{}),(0,i.jsx)(zr.FooterSlot,{children:p})]})]})}),ph=({commitDraft:r,setIsEditing:e,onRevert:a})=>{const t=(0,s.useCallback)(()=>{e(!0)},[e]),o=(0,s.useCallback)(()=>{e(!1),r()},[e,r]),n=(0,s.useCallback)(c=>{if(c.key==="Enter"){c.preventDefault(),e(!1),r(),c.currentTarget.blur();return}c.key==="Escape"&&(c.preventDefault(),e(!1),a(),c.currentTarget.blur())},[e,r,a]);return{onFocus:t,onBlur:o,onKeyDown:n}},gh=({hsv:r,draftValue:e,label:a,showLabel:t=!0,setIsEditing:o,commitDraft:n,setDraftValue:c,expandHexShorthand:l=!1,hasAlphaTools:d=!0,labels:h})=>{const p=a??(h??ra).hex,v=Br(void 0,"hex-input"),g=(0,s.useRef)(null),f=Qt(Ie(r)),[m,y]=(0,s.useState)(!1),{isInvalid:w,errorAid:x}=(0,s.useMemo)(()=>Vm(e,l,d),[e,l,d]),{onFocus:C,onBlur:z,onKeyDown:k}=ph({commitDraft:n,setIsEditing:o,onRevert:()=>c(f)}),T=(0,s.useCallback)(()=>{y(!0);const E=Ua(e);if(E.length===8){Um(E,d,n,c),z();return}if(l&&E.length===3){const ar=Ts(E);c(ar),n(ar),o(!1),z();return}l&&E.length===4&&Gm(E,d,n,c),z()},[e,l,d,c,n,o,z]),P=(0,s.useCallback)(E=>{if(E.key!=="ArrowUp"&&E.key!=="ArrowDown")return;const ar=E.key==="ArrowUp"?qu:-qu,W=E.altKey?"r":E.metaKey?"g":"b",rr=E.shiftKey?16:1,F=vu(Ua(e),Ie(r),W,ar,rr);c(F),n(F,{phase:"preview"}),E.preventDefault()},[e,r,c,n]),L=(0,s.useCallback)(E=>{if(P(E),!E.defaultPrevented){if(E.key==="Enter"){E.preventDefault(),o(!1),E.currentTarget.blur();return}E.key==="Escape"&&k(E)}},[P,o,k]),V=({value:E})=>{const ar=Wm(E??"",d);c(ar),ar.length===6&&n(ar,{phase:"preview"})},I=w&&m,D=I?x.tooltip:void 0,X=(0,s.useCallback)(()=>{const E=Zu(Ua(e));E&&Km(E,n,c,d),queueMicrotask(()=>{g.current?.focus()})},[e,n,c,d]);return(0,i.jsx)(io,{ref:g,"arc-color-input":"hex",size:"md",variant:"solid",headerLabel:t?p:void 0,inputPrefix:"#",inputAction:I?(0,i.jsx)(jr,{layout:"icon",icon:"fa-solid fa-exclamation-circle",variant:"tertiary",tooltip:x.tooltip,"aria-label":x.ariaLabel,onClick:X}):void 0,inputProps:{id:v,placeholder:"...",value:e,pattern:d?Nm:Fm,maxLength:d?9:6,title:D,"aria-invalid":I?!0:void 0,style:{textTransform:"uppercase",letterSpacing:"0.0625ch"},onFocus:C,onBlur:T,onKeyDown:L,onChange:V}})},vh=["value","pct","pctSigned","min","max"],fh=new RegExp(`\\{#(${vh.join("|")})\\}`,"g"),xb=qc,kb=Yc,wb=sl,Cb=["top","inline"],mh=({text:r,value:e,toValue:a,pctSigned:t,min:o,max:n})=>{const c={value:String(e??""),pct:String(a??""),pctSigned:String(t??""),min:String(o??""),max:String(n??"")};return typeof r=="string"?r.replace(fh,(l,d)=>c[d]):typeof r=="function"?r({...c,toValue:a,pctSigned:t}):r},Sb=10,ll=r=>r==="ArrowUp"||r==="ArrowDown"||r==="ArrowLeft"||r==="ArrowRight",dl=(r,{shiftKey:e},{step:a=1,stepLarge:t=Sb}={})=>{if(!ll(r))return null;const o=e?t:a;return r==="ArrowDown"||r==="ArrowLeft"?-o:o},bh=(r,e,{min:a=-1/0,max:t=1/0}={})=>Y(r+e,a,t),Ab=(r,{getValue:e,onStep:a,min:t,max:o,step:n,stepLarge:c})=>{const l=dl(r.key,r,{step:n,stepLarge:c});if(l==null)return!1;r.preventDefault();const d=bh(e(),l,{min:t,max:o});return a(d,r),!0},$h=(...r)=>e=>{r.some(a=>(a(e),e.defaultPrevented))},yh=(r,e,a,t)=>Y(Math.round(r/e)*e,a,t),xh=(r,e,a,t,o)=>{const n=r%a===0;return e>0?Y(n?r+a:Math.ceil(r/a)*a,t,o):Y(n?r-a:Math.floor(r/a)*a,t,o)},kh=({snapStep:r,min:e,max:a,step:t=1,value:o,onChange:n,onKeyDown:c,onPointerDown:l,onPointerMove:d,onPointerUp:h,onPointerCancel:p})=>{const v=(0,s.useRef)(!1),g=(0,s.useRef)(null),f=(0,s.useCallback)(()=>{g.current?.(),g.current=null},[]),m=(0,s.useCallback)(()=>{if(g.current||typeof window>"u")return;const k=T=>{v.current=T.shiftKey};window.addEventListener("keydown",k,!0),window.addEventListener("keyup",k,!0),g.current=()=>{window.removeEventListener("keydown",k,!0),window.removeEventListener("keyup",k,!0)}},[]);(0,s.useEffect)(()=>f,[f]);const y=(0,s.useCallback)(k=>{v.current=k.shiftKey,m(),l?.(k)},[l,m]),w=(0,s.useCallback)(k=>{v.current=!1,f(),h?.(k)},[h,f]),x=(0,s.useCallback)(k=>{v.current=!1,f(),p?.(k)},[p,f]),C=(0,s.useCallback)((k,T)=>{if(!r||!v.current){n?.(k,T);return}const P=yh(Number(k.value),r,e,a);n?.({...k,value:String(P)},T)},[r,e,a,n]),z=(0,s.useCallback)(k=>{if(!r||!k.shiftKey||!ll(k.key)){c?.(k);return}const T=dl(k.key,k,{step:t,stepLarge:r});if(T==null){c?.(k);return}k.preventDefault();const P=xh(o,T>0?1:-1,r,e,a),L={value:String(P)};n?.(L,k)},[r,t,e,a,o,n,c]);return r?{onChange:C,onKeyDown:z,onPointerDown:y,onPointerMove:d,onPointerUp:w,onPointerCancel:x}:{onChange:n,onKeyDown:c,onPointerDown:l,onPointerMove:d,onPointerUp:h,onPointerCancel:p}},Le=u`--arc•slider`,ea=u`${Le}•track`,Pr=u`${Le}•thumb`,so={BASE:u`
    ${ea}•bg: var(--arc-slider-track-background, var(--arc-color-border-mid));
    ${ea}•progress•bg: var(--arc-slider-progress-background, var(--arc-color-bg-theme-heavy));
    ${ea}•height: var(--arc-slider-track-height, max(4px, 0.25em));

    ${Pr}•size: var(--arc-slider-thumb-size, max(16px, 1em));
    ${Pr}•size•hover: var(--arc-slider-thumb-size-hover, max(16px, 1em));
    ${Pr}•size•anchor: var(--arc-slider-thumb-size-hover, var(--arc-slider-thumb-size, max(16px, 1em)));
    ${Pr}•size•rest: var(${Pr}•size•anchor);

    ${Pr}•bg: var(--arc-slider-thumb-background, var(--arc-color-bg-theme-heavy));
    ${Pr}•shadow: var(--arc-slider-thumb-shadow, var(--arc-shadow-md));

    &:has([has-small-thumb]) {
      ${Pr}•size: var(--arc-slider-thumb-size, max(8px, 0.5em));
      ${Pr}•size•rest: var(--arc-slider-thumb-size, max(8px, 0.5em));
    }

    &:has(
      [arc-slider-surface]:hover,
      [arc-slider-surface]:active,
      [arc-slider-surface]:focus-within
    ):not(:has([arc-slider-input]:disabled)) {
      ${Pr}•size: var(${Pr}•size•hover);
    }

    &:has([arc-slider-input]:disabled) {
      ${Pr}•bg: var(--arc-slider-thumb-background-disabled, var(--arc-color-bg-neutral-mid));
      ${ea}•progress•bg: var(--arc-slider-progress-background-disabled, var(--arc-color-bg-neutral-mid));
      ${ea}•bg: var(--arc-slider-track-background-disabled, var(--arc-color-bg-disabled));
      ${Pr}•shadow: var(--arc-slider-thumb-shadow-disabled, none);
    }

    ${Pr}•shift: calc((var(${ea}•height) - var(${Pr}•size)) / 2);
    ${Pr}•shift•anchor: calc((var(${ea}•height) - var(${Pr}•size•anchor)) / 2);

    ${Le}•radius: var(--arc-border-radius-pill);
    ${Le}•vx: calc((100% - var(${Pr}•size)) * (var(--js•v, 0) / 100));
    ${Le}•vx•anchor: calc((100% - var(${Pr}•size•anchor)) * (var(--js•v, 0) / 100));

    ${Pr}•cx•nudge: calc(
      (var(--js•v, 0) / 100 - 0.5) * (var(${Pr}•size•anchor) - var(${Pr}•size•rest))
    );

    ${Le}•tx: calc(var(${Le}•vx•anchor) + var(${Pr}•cx•nudge));
    ${Le}•ty: var(${Pr}•shift•anchor);
  `,THUMB:u`
    appearance: none;
    width: var(${Pr}•size);
    height: var(${Pr}•size);
    border: none;
    background: var(${Pr}•bg);
    translate: 0 0;
    box-sizing: border-box;
    border-radius: var(--arc-border-radius-circle);
    box-shadow: var(${Pr}•shadow);
    transition-property: translate, width, height, background;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
  `,THUMB_FOCUS:u`
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: var(--arc-slider-thumb-outline-offset, 0.125em);
  `,TRACK:u`
    display: flex;
    align-items: center;
    height: var(${ea}•height);
    border-radius: var(${Le}•radius);
    background: var(${ea}•bg);
  `},zb=u`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-slider] {
    ${so.BASE}
    font-size: initial;

    --arc-input-header-label-font-weight: var(--arc-slider-label-font-weight, unset);
    --arc-input-prefix-font-weight: var(--arc-slider-label-font-weight, var(--arc-font-weight-600));

    --arc-input-header-label-opacity: var(--arc-slider-label-opacity, unset);
    --arc-input-prefix-opacity: var(--arc-slider-label-opacity, unset);

    ::-webkit-inner-spin-button {
      appearance: none;
    }

    ::-webkit-list-button {
      appearance: none;
    }

    ::-moz-number-spin-box {
      display: none;
    }

    [arc-label-content] {
      display: contents;
    }

    > [input-element=body] {
      --arc-input-gap: var(${b}•16);
      --arc-input-padding-inline: 0;
      --arc-input-height: var(--arc-slider-input-height, unset);
      --arc-label-align-items: center;
    }

    [input-element=input-prefix] {
      --arc-input-element-font-size: max(12px, 0.75em);
    }

    [arc-slider-surface] {
      --arc-input-min-width: 3em;
      --arc-tooltip-text-align: center;
      --arc-tooltip-min-width: 2.5em;
    }

    [arc-slider-output] {
      --arc-input-text-align: center;
      --arc-input-width: var(--arc-slider-number-input-width, max(38px, 4ch));
      --arc-input-action-height: 100%;
      --arc-input-outline-offset: var(${b}•2); /* matches the Button component's outline-offset */
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-slider] {
    max-width: var(--js•max•width, var(--arc-slider-max-width, 100%));

    [arc-slider-surface] {
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      min-width: 0;
      height: var(${ea}•height);
      border-radius: var(${Le}•radius);

      -webkit-user-select: none;
      user-select: none;

      /* track progress (fill to thumb center); logical inset follows dir so RTL mirrors like native range */
      &::before {
        content: '';
        position: absolute;
        display: var(--arc-slider-progress-display, block);
        inset-block: calc(50% - var(${ea}•height) / 2);
        inset-inline-start: 0;
        inset-inline-end: auto;
        width: calc(var(${Pr}•size) / 2 + var(${Le}•vx));
        height: var(${ea}•height);
        border-radius: var(${Le}•radius);
        background: var(${ea}•progress•bg);
        pointer-events: none;
        transition: background 200ms ease-out;
      }

      &:has(:focus:focus-visible) {
        [arc-slider-thumb] { ${so.THUMB_FOCUS} }
      }
    }

    [arc-slider-input] {
      ${so.TRACK}

      &::-moz-range-track { ${so.TRACK} }
      &::-moz-focus-outer { border: 0; }

      &::-moz-range-thumb { ${so.THUMB} }
      &::-webkit-slider-thumb { ${so.THUMB} }
    }

    &:has(
      [arc-slider-surface]:hover,
      [arc-slider-surface]:active,
      [arc-slider-surface]:focus-within
    ):not(:has([arc-slider-input]:disabled)) {
      [arc-slider-input]::-webkit-slider-thumb { translate: var(${Pr}•cx•nudge) 0; }
      [arc-slider-input]::-moz-range-thumb { translate: var(${Pr}•cx•nudge) 0; }

      &:dir(rtl) {
        [arc-slider-input]::-webkit-slider-thumb { translate: calc(-1 * var(${Pr}•cx•nudge)) 0; }
        [arc-slider-input]::-moz-range-thumb { translate: calc(-1 * var(${Pr}•cx•nudge)) 0; }
      }
    }

    [arc-slider-thumb] {
      position: absolute;
      width: var(${Pr}•size•anchor);
      height: var(${Pr}•size•anchor);
      inset-block-start: var(${Le}•ty);
      inset-inline-start: var(${Le}•tx);
      border-radius: var(${Le}•radius);
      pointer-events: none;
    }
  }

  [arc-slider-captions] {
    position: absolute;
    inset: 0.5em 0 auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25em;
    color: var(--arc-color-fg-secondary);
  }

  [arc-slider-caption] {
    font-size: max(10px, 0.625em);
  }

  [arc-slider-output] {
    --arc-input-action-display: contents;
    --arc-button-height:  var(--arc-slider-output-button-height, 100%);

    /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
    --arc-input-suffix-opacity: var(--arc-slider-output-opacity, 61.2%);

    flex: none;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: max(6px, 0.375em);
  }
}

`,wh=(0,s.forwardRef)(({id:r,layout:e="hug",size:a="inherit",variant:t="solid",headerLabel:o,labelPlacement:n="top",displayPrecision:c=0,headerSlot:l,inputIdPrefix:d="arc-slider",inputProps:h,inputAction:p,inputSuffix:v,footerCaption:g,footerSlot:f,valueInputProps:m={},tooltipProps:y={},renderOutput:w,snapStep:x,style:C,...z},k)=>{const T=(0,s.useRef)(null),P=Br(r,d),{minLabel:L,maxLabel:V,surfaceName:I,smallThumbAtRest:D=!1,onChange:X,value:E,min:ar=0,max:W=100,step:rr=1,disabled:F,onKeyDown:Z,onPointerDown:tr,onPointerMove:lr,onPointerUp:yr,onPointerCancel:H,...ir}=h,Rr=Number(ar),sr=Number(W),br=Math.min(Rr,sr),ur=Math.max(Rr,sr),hr=(0,s.useRef)(!1),gr=(0,s.useRef)(Number(E));hr.current||(gr.current=Number(E));const xr=(0,s.useCallback)((re,Oe)=>{if(hr.current){const Ne=Number(re.value);Number.isFinite(Ne)&&(gr.current=Ne)}X?.(re,Oe)},[X]),U=(0,s.useCallback)(re=>{hr.current=!0,gr.current=Number(E),tr?.(re)},[tr,E]),er=(0,s.useCallback)(re=>{hr.current=!1,yr?.(re)},[yr]),S=(0,s.useCallback)(re=>{hr.current=!1,H?.(re)},[H]),$=kh({snapStep:x,min:br,max:ur,step:Number(rr),value:Number(E),onChange:xr,onKeyDown:Z,onPointerDown:U,onPointerMove:lr,onPointerUp:er,onPointerCancel:S}),O=hr.current?gr.current:E,K=(0,s.useMemo)(()=>({...ir,id:P,value:O,min:br,max:ur,step:rr,disabled:F}),[ir,P,O,br,ur,rr,F]),{showTooltip:_=!1,text:N,...or}=y,{toValue:nr,pctSigned:cr=0}=Ss({value:Number(O),min:Number(br),max:Number(ur),step:Number(rr)}),wr=(0,s.useMemo)(()=>({value:O,toValue:wa(nr,Number(c)),pctSigned:wa(cr,Number(c)),min:br,max:ur}),[c,ur,br,cr,nr,O]),Mr=(0,s.useMemo)(()=>_?mh({text:N,...wr}):void 0,[_,N,wr]),Qr=(0,s.useMemo)(()=>zr.onChangeHandler($.onChange),[$.onChange]),De=(0,s.useCallback)((re,Oe)=>{const Ne=String(re.value??E??br);X?.({...re,value:Ne},Oe)},[X,E,br]),Ae=(0,s.useMemo)(()=>{const{deltaPerStep:re,showValueInput:Oe=!1,...Ne}=m;return w&&typeof w=="function"?w(wr):(v||Oe||p)&&(0,i.jsxs)(i.Fragment,{children:[v&&(0,i.jsx)(zr.InputSuffix,{htmlFor:P,children:mh({text:v,...wr})}),Oe&&(0,i.jsx)(io,{"arc-slider-number-input":"",layout:"hug",size:a,variant:t,inputProps:{onKeyDown:$.onKeyDown,onPointerDown:$.onPointerDown,onPointerMove:$.onPointerMove,onPointerUp:$.onPointerUp,onPointerCancel:$.onPointerCancel,...Ne,...K,id:`${P}-text`,type:"number",appearance:"textfield",wheelControl:re?{deltaPerStep:re}:void 0,onChange:De}}),p&&(0,i.jsx)(zr.InputAction,{children:p})]})},[m,v,p,w,wr,P,a,t,K,$.onKeyDown,$.onPointerDown,$.onPointerMove,$.onPointerUp,$.onPointerCancel,De]),oe=(0,s.useMemo)(()=>!!o,[o]),ze=(0,s.useMemo)(()=>oe&&n==="top",[oe,n]),Be=(0,s.useMemo)(()=>oe&&n==="inline",[oe,n]),aa=(0,s.useMemo)(()=>!!(ze||l),[ze,l]),ne=(0,s.useMemo)(()=>!!(g||f),[g,f]),Ee=(0,s.useMemo)(()=>({...C,"--js\u2022v":String(nr)}),[C,nr]);return(0,i.jsxs)(zr.Wrapper,{...z,"arc-slider":"","arc-input":"range",layout:e,size:a,style:Ee,children:[aa&&(0,i.jsxs)(zr.Header,{children:[ze&&(0,i.jsx)(zr.HeaderLabel,{htmlFor:P,children:o}),!!l&&(0,i.jsx)(zr.Spacer,{}),(0,i.jsx)(zr.HeaderSlot,{children:l})]}),(0,i.jsxs)(zr.InputBody,{children:[Be&&(0,i.jsx)(zr.InputPrefix,{htmlFor:P,children:o}),(0,i.jsxs)("span",{"arc-slider-surface":I??"","has-small-thumb":D?"":void 0,children:[(0,i.jsx)("label",{"arc-slider-thumb":"",ref:T,htmlFor:P,"aria-hidden":!0}),(0,i.jsx)(sc,{...or,isEnabled:_&&!F,text:Mr||String(O),alternateAnchor:T,children:(0,i.jsx)("input",{...ir,onKeyDown:$.onKeyDown,onPointerDown:$.onPointerDown,onPointerMove:$.onPointerMove,onPointerUp:$.onPointerUp,onPointerCancel:$.onPointerCancel,ref:k,id:P,"arc-slider-input":"","arc-input-type":"range",type:"range",value:O,min:br,max:ur,step:rr,disabled:F,"aria-disabled":F,onChange:Qr})}),(L||V)&&(0,i.jsxs)("span",{"arc-slider-captions":"",children:[L&&(0,i.jsx)("label",{"arc-slider-caption":"min",htmlFor:P,children:L}),!!V&&(0,i.jsx)(zr.Spacer,{}),V&&(0,i.jsx)("label",{"arc-slider-caption":"max",htmlFor:P,children:V})]})]}),Ae&&(0,i.jsx)("span",{"arc-slider-output":"",children:Ae})]}),ne&&(0,i.jsxs)(zr.Footer,{children:[(0,i.jsx)(zr.FooterCaption,{children:g}),!!f&&(0,i.jsx)(zr.Spacer,{}),(0,i.jsx)(zr.FooterSlot,{children:f})]})]})});wh.displayName="ArcSlider";const ul=wh;Cr("ArcSlider",zb);const hl=({inputProps:r,snapStep:e,...a})=>{const{id:t,...o}=r;return(0,i.jsx)(ul,{"arc-color-slider":r.surfaceName,...a,snapStep:e,inputIdPrefix:t,inputProps:o})},Ch=({getValue:r,onStep:e,min:a,max:t,step:o,stepLarge:n})=>(0,s.useCallback)(c=>{Ab(c,{getValue:r??(()=>Number(c.currentTarget.value)),onStep:e,min:a,max:t,step:o,stepLarge:n})},[r,e,a,t,o,n]),Eb=({hsv:r,draftValue:e,label:a,showLabel:t=!1,setIsEditing:o,commitDraft:n,setDraftValue:c,labels:l})=>{const d=a??(l??ra).opacity,h=Br(void 0,"alpha-input"),{onFocus:p,onBlur:v,onKeyDown:g}=ph({commitDraft:n,setIsEditing:o,onRevert:()=>c(Zt(r.a))}),f=Ch({min:0,max:100,getValue:()=>Number(e),onStep:w=>{const x=String(w);c(x),n(x)}}),m=$h(f,g),y=({value:w})=>{c(String(w??1))};return(0,i.jsx)(io,{"arc-color-input":"alpha",size:"md",variant:"solid",inputSuffix:"%",headerLabel:t?d:void 0,inputProps:{id:h,"aria-label":d,placeholder:"...",value:e,type:"number",appearance:"textfield",min:0,max:100,step:1,onFocus:p,onBlur:v,onKeyDown:m,onChange:y}})},Sh=r=>Re({...r,a:1},!1).replace(/^#/,""),Ah=(0,s.memo)(function({color:e,hsv:a,isSimpleMode:t,selectedNameRef:o,hsvRef:n,commitLocalHsv:c,tools:l,expandHexShorthand:d,labels:h,...p}){const v=h??ra,g=(0,s.useRef)(!1),[f,m]=(0,s.useState)(()=>{const $=Gr(Lr(e));return $?Sh($):"000000"}),[y,w]=(0,s.useState)(Zt(a.a)),[x,C]=(0,s.useState)(!1),[z,k]=(0,s.useState)(null),T=(0,s.useMemo)(()=>z??a,[z,a]),P=(0,s.useCallback)(($,O,K)=>{K==="preview"&&!an($,O)&&k($)},[]),L=(0,s.useCallback)($=>{if(g.current)return;const O=Sh($);m(K=>{if(K===O)return K;if(!d){const _=Ua(K);if(_.length===3||_.length===4||_.length===8){const N=Gr(`#${_}`);if(N){const or={...N,a:$.a};if(zs(or,$))return K}}}return O})},[d]),V=(0,s.useCallback)(($,O="commit")=>{o.current=void 0;const K=n.current,_={...K,...$};P(_,K,O),O==="preview"&&L(Ie(_)),c(_,{phase:O})},[c,n,o,L,P]),[I,D]=(0,s.useState)(null),[X,E]=(0,s.useState)(null),ar=(0,s.useCallback)(()=>{c(n.current,{phase:"commit"})},[c,n]),{createInputProps:W}=Xu({onCommit:ar}),rr=(0,s.useCallback)(($,O)=>W(K=>{O(K),V($(K),"preview")},()=>O(null)),[W,V]),F=(0,s.useCallback)(($,O="commit")=>V({s:$.saturation,v:$.value},O),[V]),Z=(0,s.useCallback)($=>{m(Ua($))},[]),tr=(0,s.useCallback)($=>{w($)},[]),lr=(0,s.useCallback)($=>{g.current=$},[]),yr=(0,s.useCallback)($=>{C($),$&&w(Zt(n.current.a))},[n]);(0,s.useEffect)(()=>{!z||!an(a,z)||k(null)},[a,z]),(0,s.useEffect)(()=>{L(Ie(a))},[a,L]);const H=(0,s.useMemo)(()=>x?y:Zt(T.a),[x,y,T.a]),ir=(0,s.useMemo)(()=>({hue:T.h,saturation:T.s,value:T.v}),[T]),Rr=(0,s.useMemo)(()=>Y(Math.round(a.a*100),Ue.ALPHA_MIN,Ue.ALPHA_MAX),[a.a]),sr=X??Rr,br=I??a.h,ur=(0,s.useMemo)(()=>({text:v.hueValue(Math.round(br)),showTooltip:!0}),[br,v]),hr=(0,s.useMemo)(()=>({text:v.opacityValue(Math.round(sr)),showTooltip:!0}),[sr,v]),gr=(0,s.useMemo)(()=>!l||l.length===0?null:{colorField:!!l?.includes("color-field"),hueSlider:!!l?.includes("hue-slider"),alphaSlider:!!l?.includes("alpha-slider"),sliderTools:!!l?.includes("hue-slider")||!!l?.includes("alpha-slider"),hexInput:!!l?.includes("hex-input"),alphaInput:!!l?.includes("alpha-input"),inputTools:!!l?.includes("hex-input")||!!l?.includes("alpha-input"),alphaTools:!!l?.includes("alpha-slider")||!!l?.includes("alpha-input"),eyeDropper:Qu()&&!!l?.includes("eye-dropper")},[l]),xr=gr?.alphaTools??!1,U=(0,s.useCallback)(($,O)=>{o.current=void 0;const K=Ua($??f);if(!Xm(K,d??!1,xr,O))return;const _=Ie(n.current),N=uu(K,_,{shouldApplyParsedAlpha:O?.applyHexAlpha===!0}),or=O?.phase??"commit";if(!N||zs(N,_)&&or==="preview")return;const nr=n.current,cr=rn(N,nr.h);P(cr,nr,or),c(cr,{phase:or})},[c,d,xr,f,n,o,P]),er=(0,s.useCallback)(($,O)=>{o.current=void 0;const K=lu($??y);K!=null&&(V({a:K},O?.phase??"commit"),(O?.phase??"commit")==="commit"&&w(Zt(K)))},[y,o,V]),S=(0,s.useCallback)($=>{const O=jc($,"#000000");c(O)},[c]);return gr?(0,i.jsx)("div",{...p,"arc-color-tools":t?"simple":"solid","arc-color-picker-section":"tools",children:t?(0,i.jsxs)(i.Fragment,{children:[gr.hexInput&&(0,i.jsx)(gh,{hsv:a,draftValue:f,setIsEditing:lr,commitDraft:U,setDraftValue:Z,expandHexShorthand:d,hasAlphaTools:gr.alphaTools,labels:h}),gr.eyeDropper&&(0,i.jsx)(ah,{onColorPicked:S,labels:h}),gr.alphaSlider&&(0,i.jsx)(hl,{headerLabel:v.opacity,tooltipProps:hr,snapStep:Ue.ALPHA_SNAP_STEP,inputProps:{id:"alpha-slider",surfaceName:"alpha",min:Ue.ALPHA_MIN,value:sr,max:Ue.ALPHA_MAX,step:1,"aria-label":v.opacity,...rr($=>({a:Y($/100,0,1)}),E)}})]}):(0,i.jsxs)(i.Fragment,{children:[gr.colorField&&(0,i.jsx)(mm,{value:ir,onChange:F,labels:h}),gr.eyeDropper&&(0,i.jsx)(ah,{onColorPicked:S,labels:h}),gr.sliderTools&&(0,i.jsxs)("div",{"arc-color-sliders":"",children:[gr.hueSlider&&(0,i.jsx)(hl,{tooltipProps:ur,snapStep:Ue.HUE_SNAP_STEP,inputProps:{id:"hue-slider",surfaceName:"hue",min:Ue.HUE_MIN,value:br,max:Ue.HUE_MAX,step:1,"aria-label":v.hue,...rr($=>({h:Y($,Ue.HUE_MIN,Ue.HUE_MAX)}),D)}}),gr.alphaSlider&&(0,i.jsx)(hl,{tooltipProps:hr,snapStep:Ue.ALPHA_SNAP_STEP,inputProps:{id:"alpha-slider",surfaceName:"alpha",min:Ue.ALPHA_MIN,value:sr,max:Ue.ALPHA_MAX,step:1,"aria-label":v.opacity,...rr($=>({a:Y($/100,0,1)}),E)}})]}),gr.inputTools&&(0,i.jsxs)("div",{"arc-color-inputs":"",children:[gr.hexInput&&(0,i.jsx)(gh,{hsv:a,draftValue:f,setIsEditing:lr,commitDraft:U,setDraftValue:Z,expandHexShorthand:d,hasAlphaTools:gr.alphaTools,labels:h}),gr.alphaInput&&(0,i.jsx)(Eb,{hsv:a,showLabel:!gr.hexInput,draftValue:H,setIsEditing:yr,commitDraft:er,setDraftValue:tr,labels:h})]})]})}):null}),_b=({color:r,hsv:e,hsvRef:a,tools:t,palettes:o,activePaletteColor:n,popoverId:c,selectedNameRef:l,expandHexShorthand:d,commitLocalHsv:h,labels:p})=>{const v=o&&o.length>0,g=t&&t.length>0;return(0,i.jsxs)(i.Fragment,{children:[v&&(0,i.jsx)(Wu,{palettes:o,activePaletteColor:n,commitLocalHsv:h,selectedNameRef:l,hsvRef:a,popoverId:c,labels:p}),g&&(0,i.jsx)(Ah,{isSimpleMode:!0,color:r,hsv:e,hsvRef:a,selectedNameRef:l,commitLocalHsv:h,tools:t,expandHexShorthand:d,labels:p})]})},pe=u`--arc•radio`,Pb=u`
@layer arc-components {

  [arc-radio] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${pe}•font•size: 1em;
      ${pe}•icon•size: 0.625em;
      ${pe}•size: 1.125em;
      ${pe}•gap: 0.5em;
    }

    &[data-size=md] {
      ${pe}•font•size: var(${b}•14);
      ${pe}•icon•size: var(${b}•10);
      ${pe}•size: var(${b}•18);
      ${pe}•gap: var(${b}•8);
    }

    &[data-size=sm] {
      ${pe}•font•size: var(${b}•12);
      ${pe}•icon•size: var(${b}•10);
      ${pe}•size: var(${b}•16);
      ${pe}•gap: var(${b}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${G}•border•radius: var(--arc-border-radius-circle);
    ${G}•size: var(${pe}•size);
    ${G}•icon•size: var(${pe}•icon•size);
    ${G}•width: var(${pe}•size);
    ${G}•height: var(${pe}•size);
    ${G}•translate: 0 var(${b}•1m);

    /* for: ArcLabel */
    --arc-label-gap: var(${pe}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio]:not([hidden]) {
    font-size: var(${pe}•font•size);
    display: var(--arc-radio-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked)) {
      ${G}•color: transparent;
      ${G}•background: transparent;
      ${G}•border•color: var(--arc-color-border-stark);

      &:hover {
        ${G}•background: var(--arc-color-bg-theme-subtle);
        ${G}•border•color: var(--arc-color-border-theme-heavy);
      }

      &:has(:disabled) {
        ${G}•background: var(--arc-color-bg-disabled);
        ${G}•border•color: var(--arc-color-border-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* CHECKED, ?NOT-DISABLED+HOVER, ?DISABLED */
    &:has(:checked) {
      ${G}•color: var(--arc-color-fg-on-theme-heavy);
      ${G}•background: var(--arc-color-bg-theme-heavy);
      ${G}•border•color: transparent;

      &:not(:has(:disabled)):hover {
        ${G}•background: var(--arc-color-bg-theme-stark);
      }

      &:has(:disabled) {
        ${G}•color: var(--arc-color-fg-on-theme-mid);
        ${G}•background: var(--arc-color-bg-theme-mid);
      }
    }
  }

}
`,Tb=fr(va,["hug","fill"]),Ib=fr(xe,["inherit","md","sm"]),zh=({children:r,label:e,layout:a,size:t="md",useMask:o=!0,...n})=>{const{className:c,title:l,...d}=n,h={className:c,title:l},p=r??e,v=(0,i.jsx)(Xo,{...d,type:"radio"}),g=o&&(0,i.jsxs)(xc,{type:"radio",children:[v,(0,i.jsx)(Sr,{icon:"fa-solid fa-circle-small arc-fw"})]}),f=!!p&&(0,i.jsxs)(wt,{layout:a,children:[g||v,(0,i.jsx)(Ct,{children:p})]});return(0,i.jsx)("span",{...h,"arc-radio":"","data-size":t,children:f||g||v})};Cr("ArcRadio",Pb);const Ke=u`--arc•rb`,Er=u`${Ke}•o`,Rb=u`
@layer arc-components {

  [arc-radio-bar] {
    ${Ke}•font•size: var(${b}•14);
    ${Ke}•border•radius: var(${b}•8);
    ${Ke}•background: var(--arc-color-bg-secondary);
    ${Ke}•padding: var(${b}•4);
    ${Ke}•gap: var(${b}•2);

    ${Er}•color: var(--arc-color-fg-secondary);
    ${Er}•background: var(--arc-color-alpha-black-0);
    ${Er}•border•color: var(--arc-color-alpha-black-0);
    ${Er}•border•width: var(${b}•1);
    ${Er}•border•radius: var(${b}•4); /* bar-radius minus bar-padding */

    /* SIZES -------------------------------------------------------• */
    &[data-size=lg] { /* @default */
      ${Er}•size: var(${b}•32);
      ${Er}•line•height: var(${b}•30); /* • -2px to account for border-width (top/bottom) */
      ${Er}•icon•padding: var(${b}•8);
      ${Er}•text•padding: var(${b}•12);
    }

    &[data-size=md] {
      ${Er}•size: var(${b}•24);
      ${Er}•line•height: var(${b}•22); /* • -2px to account for border-width (top/bottom) */
      ${Er}•icon•padding: var(${b}•6);
      ${Er}•text•padding: var(${b}•8);
    }

    /* LAYOUTS -----------------------------------------------------• */
    &[data-layout=hug] { /** @default */
      ${Ke}•display: inline-flex;
    }

    &[data-layout=fill] {
      ${Ke}•display: flex;
    }
  }

  [arc-radio-bar-option] {
    /* Inter-Component Communication -------------------------------• */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */


    /* STATES ------------------------------------------------------• */
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${Er}•color: var(--arc-color-fg-on-hover-default);
        ${Er}•background: var(--arc-color-bg-hover-default);
        ${Er}•border•color: var(--arc-color-border-stark);
      }
    }

    &:has(:checked) {
      ${Er}•color: var(--arc-color-mono-black);
      ${Er}•background: var(--arc-color-mono-white);
      ${Er}•border•color: var(--arc-color-border-stark);
      ${Er}•font•weight: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${Er}•color: var(--arc-color-fg-disabled);
    }


    &:has(:focus-within:focus-visible) {
      ${Er}•outline: var(${Er}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
  }

  [arc-radio-bar]:not([hidden]) {
    font-size: var(--arc-radio-bar-font-size, var(${Ke}•font•size));
    display: var(${Ke}•display);
    gap: var(${Ke}•gap);
    border-radius: var(${Ke}•border•radius);
    background: var(${Ke}•background);
    padding: var(${Ke}•padding);
    margin: 0;

    [arc-radio] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${Er}•border•radius);
      outline: var(${Er}•outline, none);
      outline-offset: var(${Er}•border•width);
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=radio] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${Er}•line•height);
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${Er}•size);
      min-width: var(${Er}•size);

      border-radius: var(${Er}•border•radius);
      border: var(${Er}•border•width) solid var(${Er}•border•color);
      background: var(${Er}•background);
      color: var(${Er}•color);
      font-weight: var(${Er}•font•weight, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${Er}•text•padding);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${Er}•icon•padding);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,Mb=fr(va,["hug","fill"]),Lb=fr(xe,["lg","md"]),Eh=({children:r,label:e,icon:a,...t})=>{const o=r||(0,i.jsx)(le,{icon:a,text:e});return(0,i.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":t?.checked||void 0,children:(0,i.jsx)(zh,{...t,label:o,layout:"fill",useMask:!1})})},_h=({children:r,size:e="lg",layout:a="hug",...t})=>(0,i.jsx)("ul",{...t,"arc-radio-bar":"","data-size":e,"data-layout":a,role:"radiogroup",children:r});Cr("ArcRadioBar",Rb);const jb=({canTogglePanels:r,panels:e,activePanel:a,setActivePanel:t})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)("div",{"arc-color-picker-section":"control",children:(0,i.jsx)(_h,{layout:"fill",size:"md",children:e.map(o=>(0,i.jsx)(Eh,{name:"color-picker-panel",value:o,label:o.charAt(0).toUpperCase()+o.slice(1),checked:o===a,onChange:()=>t(o)},o))})})}),Db=({color:r,hsv:e,hsvRef:a,tools:t,palettes:o,activePaletteColor:n,popoverId:c,selectedNameRef:l,expandHexShorthand:d,commitLocalHsv:h,onAddColor:p,onRemoveColor:v,labels:g})=>{const f=o&&o.length>0,m=t&&t.length>0;return(0,i.jsxs)(i.Fragment,{children:[m&&(0,i.jsx)(Ah,{color:r,hsv:e,selectedNameRef:l,hsvRef:a,commitLocalHsv:h,tools:t,expandHexShorthand:d,labels:g}),(0,i.jsx)(Wu,{palettes:f?o:void 0,activePaletteColor:n,commitLocalHsv:h,selectedNameRef:l,hsvRef:a,popoverId:c,onAddColor:p??Gs,onRemoveColor:v,labels:g,"has-divider":m?"top":void 0})]})},pl=r=>{const e=(0,s.useRef)(null),a=(0,s.useRef)(null),t=(0,s.useRef)(r);t.current=r;const o=(0,s.useCallback)(()=>{e.current=null;const h=a.current;a.current=null,h&&t.current(h.value)},[]),n=(0,s.useCallback)(h=>{a.current={value:h},e.current==null&&(e.current=requestAnimationFrame(o))},[o]),c=(0,s.useCallback)(()=>{e.current!=null&&(cancelAnimationFrame(e.current),e.current=null),a.current=null},[]),l=(0,s.useCallback)(()=>{e.current!=null&&(cancelAnimationFrame(e.current),o())},[o]),d=(0,s.useCallback)(()=>e.current!=null,[]);return(0,s.useEffect)(()=>c,[c]),{schedule:n,cancel:c,flush:l,hasPending:d}},Ph=.05,Th=.5,Bb=4,Ob=(0,s.memo)(function({entry:e,sortedIndex:a,angle:t,isDragging:o,stopPositionLabel:n,onAtChange:c,onDragStart:l}){const{stop:d,index:h}=e,p=Y(d.at,Q.STOP_MIN,Q.STOP_MAX),v=(0,s.useCallback)(f=>{const m=Lu(f.key,t);if(m==null)return;f.preventDefault();const y=Y(p+m,Q.STOP_MIN,Q.STOP_MAX);c(h,y,!0)},[t,p,c,h]),g=(0,s.useCallback)(f=>{f.preventDefault(),f.stopPropagation(),l(h,f.pointerId)},[l,h]);return(0,i.jsx)("div",{"arc-gradient-stop-thumb":"",role:"slider",tabIndex:0,"aria-valuemin":Q.STOP_MIN,"aria-valuemax":Q.STOP_MAX,"aria-valuenow":Math.round(p),"aria-label":n(a+1),"is-dragging":o?"":void 0,style:{left:`${p}%`,background:String(d.color),zIndex:a+1},onPointerDown:g,onKeyDown:v})}),Ih=(r,e)=>{const a=r.getBoundingClientRect(),t=r.offsetWidth/2;return{centerX:a.left+a.width/2,centerY:a.top+a.height/2,axisHalfLength:t,axisAngleDeg:e-90}},Nb=({stops:r,angle:e=Q.ANGLE,onUpdateStops:a,onUpdateAngle:t,labels:o})=>{const n=o??ra,c=(0,s.useRef)(null),l=(0,s.useRef)(null),d=(0,s.useRef)(null),h=(0,s.useRef)(null),p=(0,s.useRef)(null),v=(0,s.useRef)(null),g=(0,s.useRef)(null),f=(0,s.useRef)(null),[m,y]=(0,s.useState)(null),[w,x]=(0,s.useState)(null),[C,z]=(0,s.useState)(null),[k,T]=(0,s.useState)(!1),P=w??e,L=(0,s.useMemo)(()=>m??r??[],[m,r]),V=(0,s.useMemo)(()=>Ca(L),[L]),I=(0,s.useMemo)(()=>{const _=L.length>0?L:Q.STOPS;return m?At(_,Q.STOP_MIN,Q.STOP_MAX):_},[m,L]),D=(0,s.useMemo)(()=>({background:Tu({stops:I,angle:Q.ANGLE}),rotate:`${P-90}deg`}),[I,P]),X=(0,s.useCallback)(_=>{a?.(_,"preview")},[a]),E=(0,s.useCallback)((_,N=!1)=>{const or=At(_,Q.STOP_MIN,Q.STOP_MAX);a?.(N?wu(or):or,"commit")},[a]),ar=(0,s.useCallback)(_=>{t?.(_,"preview")},[t]),W=(0,s.useCallback)(_=>{t?.(_,"commit")},[t]),rr=(0,s.useCallback)((_,N,or=!1)=>{const nr=r??[],cr=nr[_];if(!cr||Math.abs(cr.at-N)<Ph)return;const wr=nr.map((Mr,Qr)=>Qr===_?{...Mr,at:N}:Mr);E(wr,or)},[E,r]),F=(0,s.useCallback)((_,N,or)=>{const nr=d.current,cr=c.current;if(!cr)return null;const wr=nr??Ih(cr,P);return Iu(_,N,wr.centerX,wr.centerY,wr.axisAngleDeg,wr.axisHalfLength,Q.STOP_MIN,Q.STOP_MAX,or)},[P]),Z=(0,s.useCallback)(_=>{if(!Number.isFinite(_))return;const N=Math.round(_),or=v.current??e;Math.abs(or-N)<Th||(v.current=N,x(N),(f.current==null||Math.abs(f.current-N)>=Th)&&(f.current=N,ar(N)))},[e,ar]),tr=(0,s.useCallback)((_,N)=>{const or=p.current??r??[],nr=or[_];if(!nr||Math.abs(nr.at-N)<Ph)return;const cr=or.map((De,Ae)=>Ae===_?{...De,at:N}:De);p.current=cr,y(cr);const wr=At(cr,Q.STOP_MIN,Q.STOP_MAX),Mr=g.current,Qr=P;(!Mr||!on({stops:Mr,angle:Qr},{stops:wr,angle:Qr}))&&(g.current=wr,X(wr))},[X,P,r]),lr=(0,s.useCallback)(_=>{const N=l.current;if(N==null)return;const or=F(_.clientX,_.clientY,!1);or!=null&&tr(N,or)},[tr,F]),{schedule:yr,cancel:H,flush:ir}=pl(lr),Rr=(0,s.useCallback)(_=>{const N=h.current;if(!N||!N.hasExceededThreshold)return;const or=Vs(_.clientX,_.clientY,N.centerX,N.centerY),nr=Ru(N.startAngle,N.startPointerAngleDeg,or,Q.ANGLE_MIN,Q.ANGLE_MAX);Z(_.shiftKey?Mu(nr):nr)},[Z]),{schedule:sr,cancel:br,flush:ur}=pl(Rr),hr=(0,s.useCallback)((_,N)=>{const or=c.current;or&&(or.setPointerCapture(N),l.current=_,d.current=Ih(or,P),p.current=[...r??[]],g.current=At(p.current,Q.STOP_MIN,Q.STOP_MAX),y(p.current),z(_))},[P,r]),gr=(0,s.useCallback)((_,N)=>{if(V.length===0)return;const or=F(_,N,!0);if(or==null)return;const nr=V.reduce((cr,wr)=>{const Mr=Math.abs(wr.stop.at-or);return!cr||Mr<cr.distance?{stopIndex:wr.index,distance:Mr}:cr},null);nr&&rr(nr.stopIndex,or,!0)},[rr,F,V]),xr=(0,s.useCallback)(()=>{const _=h.current;if(_?.hasExceededThreshold&&ur(),br(),h.current=null,!!_){if(_.hasExceededThreshold){const N=v.current;N!=null&&W(N)}else gr(_.startClientX,_.startClientY);v.current=null,f.current=null,x(null),T(!1)}},[br,W,gr,ur]),U=(0,s.useCallback)(()=>{ir(),H();const _=p.current;_&&E(_,!0),l.current=null,d.current=null,p.current=null,g.current=null,y(null),z(null)},[H,E,ir]),er=(0,s.useCallback)(_=>{if(!t){gr(_.clientX,_.clientY);return}const N=c.current;if(!N)return;const or=N.getBoundingClientRect(),nr=or.left+or.width/2,cr=or.top+or.height/2;N.setPointerCapture(_.pointerId);const wr=Number.isFinite(_.clientX)?_.clientX:0,Mr=Number.isFinite(_.clientY)?_.clientY:0;h.current={pointerId:_.pointerId,startClientX:wr,startClientY:Mr,lastClientX:wr,lastClientY:Mr,startPointerAngleDeg:Vs(wr,Mr,nr,cr),startAngle:e,centerX:nr,centerY:cr,hasExceededThreshold:!1}},[e,gr,t]),S=(0,s.useCallback)(_=>{if(l.current!=null){yr({clientX:_.clientX,clientY:_.clientY});return}const N=h.current;if(!N)return;Number.isFinite(_.clientX)&&Number.isFinite(_.clientY)?(N.lastClientX=_.clientX,N.lastClientY=_.clientY):(N.lastClientX+=_.movementX??0,N.lastClientY+=_.movementY??0);const{lastClientX:or,lastClientY:nr}=N,cr=Math.hypot(or-N.startClientX,nr-N.startClientY);if(!N.hasExceededThreshold){if(cr<Bb)return;N.hasExceededThreshold=!0,T(!0)}sr({clientX:or,clientY:nr,shiftKey:_.shiftKey})},[yr,sr]),$=(0,s.useCallback)(()=>{if(l.current!=null){U();return}xr()},[U,xr]),O=(0,s.useCallback)(()=>{if(l.current!=null){U();return}xr()},[U,xr]),K=(0,s.useCallback)(()=>{l.current!=null&&U()},[U]);return(0,i.jsxs)("div",{"arc-gradient-field-wrapper":"",role:"group","aria-label":n.gradientStops,children:[(0,i.jsxs)("small",{"arc-gradient-field-angle-output":"","aria-hidden":"true",children:[P,"\xB0"]}),(0,i.jsx)("div",{ref:c,"arc-gradient-field":"","is-dragging":C!=null||k?"":void 0,"is-rotating":k?"":void 0,style:D,onPointerDown:er,onPointerMove:S,onPointerUp:$,onPointerCancel:O,onLostPointerCapture:K,children:V.map((_,N)=>(0,i.jsx)(Ob,{entry:_,sortedIndex:N,angle:P,isDragging:C===_.index,stopPositionLabel:n.stopPosition,onAtChange:rr,onDragStart:hr},`gradient-stop-thumb-${_.index}`))})]})},{STOP_MIN:lo,STOP_MAX:uo}=Q,Fb=(0,s.memo)(function({stop:e,stopIndex:a,sortedIndex:t,prevNeighborAt:o,nextNeighborAt:n,editingStopIndex:c,labels:l,onOpenColorEdit:d,onRegisterAnchor:h,onInsertStopAt:p,onUpdate:v,onDelete:g}){const f=l??ra,m=t+1,y=Br(void 0,"gradient-stop-row-anchor"),w=Br(void 0,"gradient-stop-input"),x=(0,s.useRef)(null),C=(0,s.useRef)(t),[z,k]=(0,s.useState)(!1),T=Y(e.at,lo,uo),[P,L]=(0,s.useState)(String(T)),V=c===a,I=(0,s.useCallback)(()=>{L(String(Y(e.at,lo,uo)))},[e.at]),D=(0,s.useCallback)((H,ir=!1,Rr="commit")=>{const sr=Number(H??P);if(Number.isNaN(sr))return;const br=Y(sr,lo,uo),ur=String(br);L(ur);const hr=ir||Ns(o,n,br);br!==e.at?v(a,{...e,at:br},hr,Rr):hr&&v(a,e,!0,Rr)},[P,n,v,o,e,a]),X=(0,s.useCallback)(()=>{k(!0)},[]),E=(0,s.useCallback)(()=>{k(!1),D(void 0,!0)},[D]),ar=Ch({min:lo,max:uo,getValue:()=>Number(P),onStep:H=>{const ir=String(H);L(ir),D(ir,!1,"preview")}}),W=(0,s.useCallback)(H=>{if(H.key==="Enter"){H.preventDefault(),k(!1),D(void 0,!0),H.currentTarget.blur();return}H.key==="Escape"&&(H.preventDefault(),k(!1),I(),H.currentTarget.blur())},[D,I]),rr=$h(ar,W);(0,s.useLayoutEffect)(()=>{if(!z){C.current=t;return}if(C.current===t)return;C.current=t;const H=x.current;if(!H)return;const{selectionStart:ir,selectionEnd:Rr}=H;H.focus({preventScroll:!0}),ir!=null&&Rr!=null&&H.setSelectionRange(ir,Rr)},[z,t]),(0,s.useEffect)(()=>{z||L(String(Y(e.at,lo,uo)))},[e.at,z]);const F=(0,s.useCallback)(({value:H})=>{const ir=String(H??P);L(ir),D(ir,!1,"preview")},[D,P]),Z=z?P:String(T),tr=(0,s.useCallback)(()=>{g(a)},[g,a]),lr=(0,s.useCallback)(()=>{d(a,y)},[d,y,a]),yr=(0,s.useCallback)(()=>{p(t)},[p,t]);return(0,s.useLayoutEffect)(()=>{h?.(a,y)},[h,y,a]),(0,i.jsxs)("li",{"arc-gradient-stop-row":"",id:y,"is-editing-color":V?"":void 0,children:[t>0&&(0,i.jsx)("span",{"arc-gradient-stop-insert":"",children:(0,i.jsx)(jr,{_isCustom:!0,icon:"fa-solid fa-plus fa-2xs",onClick:yr,tooltip:f.insertColorStop,isDisabled:c!=null})}),(0,i.jsx)(dn,{kind:"gradient-stop",color:e.color,onClick:lr}),(0,i.jsx)(io,{ref:x,"arc-color-input":"stop",inputProps:{type:"number",appearance:"textfield",id:w,"aria-label":f.stopPosition(m),value:Z,min:lo,max:uo,step:1,onFocus:X,onBlur:E,onKeyDown:rr,onChange:F,wheelControl:{deltaPerStep:24}},size:"md",variant:"solid",inputSuffix:"%"}),(0,i.jsx)("span",{"row-spacer":""}),(0,i.jsx)(jr,{layout:"icon",size:"sm",icon:"fa-regular fa-trash",variant:"tertiary",tooltip:f.removeColorStop,onClick:tr,isDisabled:c!=null})]})}),Rh=({children:r,sectionName:e,content:a,...t})=>(0,i.jsxs)("header",{"arc-color-section-header":e??"",...t,children:[(0,i.jsx)(le,{...typeof a=="object"?a:{text:a},size:"sm",isStrong:!0}),r]}),Hb=({stops:r,editFallbackColor:e="#000000",format:a=Sa.format,onUpdate:t,labels:o})=>{const n=o??ra,c=(0,s.useMemo)(()=>r??[],[r]),l=(0,s.useMemo)(()=>Ca(c),[c]),[d,h]=(0,s.useState)([]),p=Br(void 0,"gradient-stop-edit-popover"),[v,g]=(0,s.useState)(null),f=(0,s.useRef)(null),[m,y]=(0,s.useState)(),[w,x]=(0,s.useState)(e),[C,z]=(0,s.useState)(!1),[k,T]=(0,s.useState)(!1),[P,L]=(0,s.useState)(),[V,I]=(0,s.useState)(0),D=(0,s.useRef)(!1),X=(0,s.useRef)(null),E=(0,s.useRef)(0),ar=(0,s.useCallback)(()=>(E.current+=1,`gradient-stop-${E.current}`),[]),W=(0,s.useCallback)(()=>ka.handlePopover?.(p,"show"),[p]),rr=(0,s.useCallback)(()=>ka.handlePopover?.(p,"hide"),[p]);(0,s.useEffect)(()=>{h(S=>S.length===c.length?S:S.length<c.length?[...S,...Array.from({length:c.length-S.length},()=>ar())]:S.slice(0,c.length))},[ar,c.length]);const F=(0,s.useCallback)((S,$)=>{const O=Ca(S);h(O.map(K=>$[K.index]??ar())),t?.(O.map(K=>K.stop))},[ar,t]),Z=(0,s.useCallback)((S={kind:"append"})=>{const $=c.length,O=S.kind==="append"?Eu(c):[...c,zu(c,S)];X.current=$,h(K=>[...K,ar()]),t?.(O)},[ar,c,t]),tr=(0,s.useCallback)((S,$,O=!1,K="commit")=>{const _=c.map((N,or)=>or===S?$:N);if(O){F(_,d);return}t?.(_,K)},[F,c,t,d]),lr=(0,s.useCallback)(S=>{f.current===S&&(rr(),f.current=null,g(null),z(!1)),h($=>$.filter((O,K)=>K!==S)),t?.(c.filter(($,O)=>O!==S))},[c,rr,t]),yr=(0,s.useCallback)((S,$,O="commit")=>{if(!c[S])return;const _=c.map((N,or)=>or===S?{...N,color:$}:N);t?.(_,O)},[c,t]),H=(0,s.useCallback)(()=>{rr(),f.current=null,g(null),z(!1)},[rr]),ir=(0,s.useCallback)((S,$)=>{const O=c[S];if(!O)return;const K=f.current!=null;f.current=S,T(!0),g(S),y($),x(O.color),K?I(_=>_+1):(D.current=!0,L($))},[c]),Rr=(0,s.useCallback)((S,$)=>{if(f.current===S){H();return}ir(S,$)},[H,ir]),sr=(0,s.useCallback)((S,$)=>{X.current!==S||!c[S]||(X.current=null,ir(S,$))},[c,ir]);(0,s.useEffect)(()=>{!D.current||v==null||!m||(D.current=!1,W())},[m,v,W]);const br=(0,s.useCallback)(S=>{const $=S?.newState==="open";z($),$||(f.current=null,g(null))},[]),ur=(0,s.useCallback)(S=>{S.key!=="Escape"||!C||H()},[H,C]),hr=(0,s.useCallback)(S=>{const $=f.current;$!=null&&yr($,S,"preview")},[yr]),gr=(0,s.useCallback)(S=>{x(S);const $=f.current;$!=null&&yr($,S,"commit")},[yr]),xr=(0,s.useCallback)(S=>{ru(S)&&gr(S.color.value)},[gr]),U=(0,s.useCallback)(()=>{c.length<2||F(Su(c),d)},[F,c,d]),er=(0,s.useCallback)(S=>{Z({kind:"between",sortedIndex:S})},[Z]);return(0,i.jsxs)("div",{"arc-gradient-stops":"",children:[(0,i.jsx)(Rh,{content:n.gradientStops,sectionName:"stops",children:(0,i.jsxs)(to,{children:[(0,i.jsx)(jr,{"arc-gradient-stop-distribute":"",layout:"icon",size:"sm",icon:"fa-regular fa-arrows-left-right-to-line",variant:"tertiary",onClick:U,tooltip:n.distributeColorStops,isDisabled:v!=null||c.length<2}),(0,i.jsx)(jr,{"arc-gradient-stop-add":"",layout:"icon",size:"sm",icon:"fa-regular fa-plus",variant:"tertiary",onClick:()=>Z({kind:"append"}),tooltip:n.addColorStop,isDisabled:v!=null})]})}),(0,i.jsx)("ul",{"arc-gradient-stop-list":"",children:l.map((S,$)=>(0,i.jsx)(Fb,{stop:S.stop,stopIndex:S.index,sortedIndex:$,prevNeighborAt:l[$-1]?.stop.at,nextNeighborAt:l[$+1]?.stop.at,editingStopIndex:v,onOpenColorEdit:Rr,onRegisterAnchor:sr,onInsertStopAt:er,onUpdate:tr,onDelete:lr,labels:o},d[S.index]??`gradient-stop-row-${S.index}`))}),k&&(0,i.jsx)(qa,{mode:"edit",heading:"",panels:["solid"],color:w,_colorSyncKey:V,format:a,labels:o,onPreviewColor:S=>hr(S.value),onChange:xr,popoverProps:{id:p,popover:"manual",anchorAt:"left-center",alternateAnchorId:m,hidePopoverButton:!0,tryFallbacks:!0,hasTail:!0,offset:12,onToggle:br,onKeyDown:ur,footerSlot:(0,i.jsxs)(to,{"arc-color-picker-button-bar":"",children:[(0,i.jsx)("span",{"arc-button-bar-spacer":""}),(0,i.jsx)(jr,{"arc-color-picker-button":"save",text:n.done,size:"sm",onClick:H})]})}},P)]})},{ANGLE_MIN:Vb,ANGLE_MAX:Gb,ANGLE_SNAP_STEP:Ub}=Q,Kb=({inputProps:r,labels:e,...a})=>{const{id:t="angle-slider",min:o=Vb,max:n=Gb,step:c=1,value:l,onChange:d,...h}=r,p=(e??ra).angle,v=Br(void 0,`${t}-label`),g=(0,s.useCallback)(f=>{if(f.shiftKey||!ll(f.key))return;const m=dl(f.key,f,{step:Number(c)});if(m==null)return;f.preventDefault();const y=bh(Number(l),m,{min:Number(o),max:Number(n)}),w={value:String(y)};d?.(w,f)},[o,n,c,l,d]);return(0,i.jsxs)("div",{"arc-gradient-angle-slider":"",children:[(0,i.jsx)(Rh,{sectionName:"angle",content:p,id:v}),(0,i.jsx)(ul,{"arc-angle-slider":"",...a,layout:"fill",size:"md",snapStep:Ub,inputIdPrefix:t,inputProps:{...h,min:o,max:n,step:c,value:l,onChange:d,onKeyDown:g,"aria-labelledby":v},valueInputProps:{showValueInput:!0},tooltipProps:{showTooltip:!0,text:"{#value}\xB0"}})]})},Wb="gradient-angle-presets",Xb=(r,e)=>Q.ANGLE_PRESETS.map(a=>({stops:r,angle:a,name:e(a)})),qb=({gradient:r,onSelectAngle:e,labels:a})=>{const t=a??ra,o=r?.angle??Q.ANGLE,n=(0,s.useMemo)(()=>Xb(r?.stops??Q.STOPS,t.gradientAngleOption),[r?.stops,t.gradientAngleOption]),c=(0,s.useMemo)(()=>n.find(d=>d.angle===o),[n,o]),l=d=>{Qd(d)&&e?.(d.gradientData.gradient.angle)};return(0,i.jsx)(un,{"arc-gradient-presets":"",id:Wb,colors:n,activeGradient:c,showHeading:!1,setAriaLabel:t.gradientAngle,onSwatchClick:l,labels:a})},Yb=({tools:r,gradient:e,setGradient:a,editFallbackColor:t,format:o,labels:n,...c})=>{const l=(0,s.useMemo)(()=>({stops:e?.stops??[],angle:e?.angle??Q.ANGLE}),[e]),d=(0,s.useCallback)((k,T="commit")=>{a?.({...l,...k},{phase:T})},[l,a]),h=(0,s.useRef)(l.angle),[p,v]=(0,s.useState)(null),g=(0,s.useCallback)(()=>{d({angle:h.current},"commit")},[d]),{isPreviewingRef:f,createInputProps:m}=Xu({onCommit:g});(0,s.useEffect)(()=>{f.current||(h.current=l.angle)},[f,l.angle]);const y=(0,s.useMemo)(()=>{const k=T=>Y(T,Q.ANGLE_MIN,Q.ANGLE_MAX);return m(T=>{const P=k(T);h.current=P,v(P),d({angle:P},"preview")},()=>v(null))},[d,m]),w=(0,s.useMemo)(()=>!r||r.length===0?[...Ec]:[...r],[r]),x=(0,s.useMemo)(()=>{const k={gradientField:w.includes("gradient-field"),gradientStops:w.includes("gradient-stops"),angleSlider:w.includes("angle-slider"),anglePresets:w.includes("angle-presets")};return k.gradientField||k.gradientStops||k.angleSlider||k.anglePresets?k:null},[w]);if(!x)return null;const{stops:C,angle:z=Q.ANGLE}=l;return(0,i.jsxs)("div",{...c,"arc-color-tools":"gradient","arc-color-picker-section":"tools",children:[x.gradientField&&(0,i.jsx)(Nb,{stops:C,angle:z,onUpdateStops:(k,T)=>d({stops:k},T??"commit"),onUpdateAngle:(k,T)=>d({angle:k},T??"commit"),labels:n}),x.gradientStops&&(0,i.jsx)(Hb,{stops:C,editFallbackColor:t,format:o,onUpdate:(k,T)=>d({stops:k},T??"commit"),labels:n}),x.angleSlider&&(0,i.jsx)(Kb,{labels:n,inputProps:{surfaceName:"angle",min:Q.ANGLE_MIN,max:Q.ANGLE_MAX,value:p??z,...y}}),x.anglePresets&&(0,i.jsx)(qb,{gradient:l,onSelectAngle:k=>d({angle:k}),labels:n})]})},Zb=({tools:r,...e})=>{const a=r&&r.length>0;return(0,i.jsx)(i.Fragment,{children:a&&(0,i.jsx)(Yb,{tools:r,...e})})},Mh=({heading:r,showGoBack:e,goBackProps:a,...t})=>(0,i.jsx)(ka,{...t,variant:"common","arc-color-picker-wrapper":"",showGoBack:e,goBackProps:a,headerSlot:!!r&&(0,i.jsx)(le,{...typeof r=="string"?{text:r}:r,"arc-color-picker-heading":"",overflow:"truncate",isStrong:!0})});Mh.displayName="ArcColorPickerWrapper";const gn=(r,e)=>r.length===0||r.includes(e)?e:r[0],Sa={mode:"normal",color:"#05aff0",format:"auto",heading:"Color",palettes:[]},Jb={icon:"fa-regular fa-paint-brush",text:"Color Picker",layout:"icon",shape:"round",size:"md"},Qb={stops:Q.STOPS,angle:Q.ANGLE},r$=["solid","gradient"],Lh=(r,e)=>r.includes("gradient")?r.length===1||e==="gradient":!1,jh=(r,e,a,t)=>{const o=r.stops??[],n=r.angle??Q.ANGLE;return o.length>0?{stops:o,angle:n}:Lh(a,e)?Pu(r,t).gradient:{stops:[],angle:n}},qa=({children:r,mode:e=Sa.mode,color:a=Sa.color,gradient:t=Qb,format:o=Sa.format,heading:n=Sa.heading,tools:c,omitTools:l,isInline:d=!1,showGoBack:h=!1,goBackProps:p,canTogglePanels:v=!1,panels:g=r$,activePanel:f="solid",onUpdatePanel:m,palettes:y,popoverProps:w,onChange:x,onSnapshotChange:C,onPreviewColor:z,onPreviewGradient:k,onAddColor:T,onRemoveColor:P,expandHexShorthand:L,_colorSyncKey:V,labels:I,...D})=>{const X=(0,s.useMemo)(()=>_c(I),[I]),E=(0,s.useMemo)(()=>Ds(a).color,[a]),ar=Br(w?.id??void 0,"color-picker"),[W,rr]=(0,s.useState)(()=>gn(g,f)),F=e==="simple",tr=W==="gradient"?"gradient":F?"simple":"solid",lr=(0,s.useCallback)((j,dr=W)=>jh(j,dr,g,E),[W,g,E]),[yr,H]=(0,s.useState)(()=>jh(t,gn(g,f),g,Ds(a).color)),[ir,Rr]=(0,s.useState)(()=>{const j=Gr(E);return j?rn(j):{h:0,s:0,v:0,a:1}}),sr=(0,s.useRef)(ir),br=(0,s.useRef)(ir),ur=(0,s.useRef)(null),hr=(0,s.useRef)(!1),gr=(0,s.useRef)(null),xr=(0,s.useRef)(E),U=(0,s.useRef)(null),er=(0,s.useRef)(void 0),S=(0,s.useRef)(f),$=(0,s.useRef)(null),O=(0,s.useRef)(null),K=(0,s.useRef)(null);(0,s.useEffect)(()=>{sr.current=ir,br.current=ir},[ir]),(0,s.useEffect)(()=>{const j=lr(t,W);H(dr=>on(dr,j)?dr:j)},[t,W,lr]);const _=(0,s.useCallback)((j,dr,kr)=>{try{const _r=kr?.solidHsv??sr.current,pa={...it(_r,{format:o}),name:er.current},pi=dr??lr(t,j),gi=cn(pi,{fallbackColor:pa.value});return{activePanel:j,color:pa,gradient:gi,value:j==="gradient"?gi.value:pa.value}}catch{return null}},[o,t,lr]),N=(0,s.useCallback)(j=>{if(z)try{z(it(j,{format:o}))}catch{}},[o,z]),or=(0,s.useRef)({}),nr=(0,s.useCallback)(j=>{const dr=j.querySelector('[arc-slider][arc-color-slider="hue"]'),kr=j.querySelector('[arc-slider][arc-color-slider="alpha"]'),_r={};dr instanceof HTMLElement&&(_r.hue=dr),kr instanceof HTMLElement&&(_r.alpha=kr),or.current=_r},[]),cr=(0,s.useCallback)((j,dr)=>{const kr=ur.current;let _r=or.current[j];if((!_r||!_r.isConnected)&&kr&&(nr(kr),_r=or.current[j]),!_r)return;const pi=j==="hue"?{min:0,max:360,step:1}:j==="alpha"?{min:0,max:100,step:1}:null;if(!pi)return;const{toValue:gi}=Ss({value:dr,...pi});_r.style.setProperty("--js\u2022v",String(gi))},[nr]),wr=(0,s.useCallback)(j=>{const dr=ur.current;if(!dr)return;const kr=Ie(j);dr.style.setProperty("--js\u2022hue",`hsl(${j.h} 100% 50%)`),dr.style.setProperty("--js\u2022hex",Re({...kr,a:1},!1)),dr.style.setProperty("--js\u2022rgb",Ka(kr)),cr("hue",j.h),cr("alpha",Y(Math.round(j.a*100),0,100))},[cr]),Mr=(0,s.useCallback)(j=>{const dr=ur.current;if(dr){const kr=Math.round(Tc(j.h));kr!==gr.current&&(gr.current=kr,dr.dispatchEvent(new CustomEvent(Us,{detail:{h:kr}})))}queueMicrotask(()=>{N(j)})},[N]),{schedule:Qr,cancel:De}=pl(Mr),Ae=(0,s.useCallback)(()=>{De(),hr.current=!1,gr.current=null},[De]),oe=(0,s.useCallback)(j=>{hr.current=!0,Qr(j)},[Qr]),ze=(0,s.useCallback)(j=>{if(k)try{const dr=Ka(Ie(sr.current));k(cn(j,{fallbackColor:dr}))}catch{}},[k]),Be=(0,s.useCallback)((j,dr,kr)=>{const _r=_(j,dr,kr);return _r?(C?.(_r),_r):null},[_,C]),aa=zt(Be),ne=(0,s.useCallback)((j,dr,kr)=>{const pa=kr?.shouldEmitSnapshot!==!1?Be(j,dr):_(j,dr);if(pa){if(j==="gradient"){x?.({activePanel:"gradient",gradient:pa.gradient});return}xr.current=pa.color.value,U.current=pa.color.rgba,x?.({activePanel:"solid",color:pa.color})}},[_,Be,x]),Ee=zt(ne),re=(0,s.useCallback)((j,dr)=>{if((dr?.phase??"commit")==="preview"){H(_r=>Fs(_r,j)?_r:j),(!K.current||!Fs(K.current,j))&&(K.current=j,ze(j));return}K.current=null,H(_r=>on(_r,j)?_r:j),ne("gradient",j)},[ze,ne]),Oe=(0,s.useCallback)((j,dr)=>{if(j>0||!Lh(g,W))return;const kr=lr(t,W);if(kr.stops.length===0)return;const _r=`${W}:${kr.stops[0]?.color}`;if($.current!==_r)if($.current=_r,dr.emitSnapshot){if(!x&&!C)return;Ee("gradient",kr)}else x&&Ee("gradient",kr,{shouldEmitSnapshot:!1})},[W,t,x,C,g,lr,Ee]);(0,s.useEffect)(()=>{const j=t.stops??[];j.length>0&&($.current=null);const dr=O.current===null;if(!dr&&O.current!==W){if(O.current=W,Ae(),C){const _r=lr(t,W);aa(W,_r,{solidHsv:br.current})}Oe(j.length,{emitSnapshot:!1});return}dr&&(O.current=W),Oe(j.length,{emitSnapshot:!0})},[Ae,W,t,C,lr,Oe,aa]);const Ne=(0,s.useCallback)(j=>{!x&&!C||(sr.current=j,ne("solid"))},[ne,x,C]),Fe=(0,s.useCallback)((j,dr)=>{const kr=dr?.phase??"commit";if(!(kr==="preview"&&an(j,sr.current))){if(sr.current=j,kr==="preview"){wr(j),oe(j);return}Ae(),Rr(j),Ne(j)}},[Ae,Ne,oe,wr]),Tt=(0,s.useMemo)(()=>{const j=F?"":"manual";return w?.popover??j},[w?.popover,F]),li=(0,s.useMemo)(()=>Ka(Ie(ir)),[ir]),di=(0,s.useMemo)(()=>y?.map(j=>({...j,canAddColor:!1,canRemoveColor:!1}))??[],[y]),It=(0,s.useCallback)(()=>{const j=ur.current;if(!j)return;const dr=F?'button[arc-color-chip="swatch"]:not(:disabled)':'[arc-color-surface="field"]';j.querySelector(dr)?.focus()},[F]),mo=w?.onToggle,Tn=(0,s.useCallback)(j=>{j?.newState==="open"&&requestAnimationFrame(It),mo?.(j)},[It,mo]);tt(()=>{V!=null&&(U.current=null)},[V]),(0,s.useEffect)(()=>{if(!hr.current&&E!==xr.current){xr.current=E;try{const j=Gr(E)??{r:0,g:0,b:0,a:1},dr=U.current;if(dr&&Es(j,dr))return;const kr=Ie(sr.current);if(Es(j,kr))return;er.current=void 0;const _r=rn(j,sr.current.h);if(an(_r,sr.current))return;sr.current=_r,Rr(_r)}catch{}}},[E]);const Ba=(0,s.useMemo)(()=>{const dr=F?Jd:W==="solid"?ws:Ec,kr=!c||c.length===0?[...dr]:[...c];if(!l?.length)return kr;const _r=new Set(l);return kr.filter(pa=>!_r.has(pa))},[c,F,l,W]),ui=(0,s.useMemo)(()=>Ba.includes("palettes"),[Ba]);tt(()=>{const j=ur.current;if(!j){or.current={};return}nr(j)},[W,F,nr,Ba]);const bo=(0,s.useCallback)(j=>{rr(dr=>{const kr=typeof j=="function"?j(dr):j,_r=gn(g,kr);return _r!==dr&&m?.(_r),_r})},[g,m]);(0,s.useEffect)(()=>{if(S.current!==f){S.current=f,rr(gn(g,f));return}rr(j=>{const dr=gn(g,j);return dr!==j&&m?.(dr),dr})},[f,g,m]);const hi=(0,s.useMemo)(()=>{const j=Ie(ir);return{"--js\u2022hue":`hsl(${ir.h} 100% 50%)`,"--js\u2022hex":Re({...j,a:1},!1),"--js\u2022rgb":Ka(j)}},[ir]),J=(0,i.jsxs)("div",{...D,ref:ur,"arc-color-picker":tr,"is-inline":d?"":void 0,style:hi,children:[F?(0,i.jsx)(_b,{color:E,hsv:ir,hsvRef:sr,tools:Ba,palettes:di,activePaletteColor:li,commitLocalHsv:Fe,popoverId:ar,selectedNameRef:er,expandHexShorthand:L,labels:X}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(jb,{canTogglePanels:v,panels:g,activePanel:W,setActivePanel:bo}),W==="solid"?(0,i.jsx)(Db,{color:E,hsv:ir,hsvRef:sr,tools:Ba,palettes:ui?y:void 0,activePaletteColor:li,commitLocalHsv:Fe,popoverId:ar,selectedNameRef:er,expandHexShorthand:L,onAddColor:T??Gs,onRemoveColor:P,labels:X}):(0,i.jsx)(Zb,{tools:Ba,gradient:yr,setGradient:re,editFallbackColor:E,format:o,labels:X})]}),r&&(0,i.jsx)("div",{"arc-color-picker-section":"footer",children:r})]});if(d)return J;const Hr=w?.anchorProps??Jb,rt=F?{...w,anchorAt:w?.anchorAt??"bottom-center",showDismiss:!1,hasTail:!0}:{...w,heading:n??void 0,showGoBack:h??void 0,goBackProps:p??void 0,showHeaderDivider:!0,showFooterDivider:!0,isHeaderSticky:!0,isFooterSticky:!0};return(0,i.jsx)(Mh,{...rt,popover:Tt,anchorProps:Hr,id:ar,onToggle:Tn,children:J})};qa.getColorAs=bu,qa.getColorData=it,qa.getGradientData=cn,qa.getContrastColor=ao,qa.addColor=Rm,qa.removeColor=Mm,Cr("ArcColorPicker",_m);var e$;const Et={layout:"gutter",variant:"inherit",overflow:"truncate",gapSize:"md",size:"md"},a$=r=>[{test:()=>!!r.variant,value:r.variant},{test:()=>!!r.icon&&typeof r.subtext<"u",value:"icon-text-detail"},{test:()=>!!r.icon,value:"icon-text"},{test:()=>!!r.avatar&&typeof r.subtext<"u",value:"user-detail"},{test:()=>!!r.avatar,value:"user"},{test:()=>typeof r.subtext<"u",value:"text-detail"},{test:()=>!0,value:"text"}],t$=({icon:r,onClick:e,items:a,renderSubmenu:t,submenuProps:o,...n})=>({icon:r&&typeof r=="string"?`${r.replace(" fa-fw","")} arc-fw`:r,itemProps:n}),Dh=(r,e)=>{const{icon:a,itemProps:t}=t$(e);switch(r){case"divider":return(0,i.jsx)("hr",{});case"section-label":return(0,i.jsx)(le,{...t,...Et,icon:a,size:"sm",isStrong:!0});case"icon-text":return(0,i.jsx)(le,{...t,...Et,icon:a});case"icon-text-detail":return(0,i.jsx)(le,{...t,...Et,icon:a,isStrong:!0});case"text":return(0,i.jsx)(le,{...t,...Et});case"text-detail":return(0,i.jsx)(le,{...t,...Et,subtext:t.subtext??"sub",isStrong:!0});case"user":return(0,i.jsx)(Wn,{...t,...Et,size:"sm"});case"user-detail":return(0,i.jsx)(Wn,{...t,...Et,size:"md",isStrong:!0});default:return r}},Cy=r=>Object.fromEntries(e$.map(e=>[e,Dh(e,r)])),gl=200,o$=r=>{const e=r.submenuProps&&typeof r.submenuProps=="object"?r.submenuProps.id:void 0;return typeof e=="string"&&e.length>0?e:void 0},n$=r=>{const e=r.submenuProps&&typeof r.submenuProps=="object"?r.submenuProps:{},{menuProps:a,renderItem:t,...o}=e;return{menuProps:a,popoverPassthrough:o}},c$=r=>({ownMenuId:r.menu,parentTriggerId:r.trigger}),i$=r=>{const e=r.submenuProps;if(!e||typeof e!="object")return;const a=e.renderItem;return typeof a=="function"?a:void 0},Zc=(r,e,a)=>{if(!(typeof r.renderSubmenu=="function"||Array.isArray(r.items)&&r.items.length>0))return{hasSubmenu:!1};const o=fl(r,e),n=`${a}-subtrigger-${o}`;let l=o$(r)??`${a}-submenu-${o}`;return l===n&&(l=`${l}-menu`),{hasSubmenu:!0,menuId:l,triggerId:n}},s$=(r,e)=>{if(!e||!r)return-1;let t=e.nodeType===Node.ELEMENT_NODE?e:e.parentNode;for(;t;){if(t===r)return-1;if(t instanceof HTMLLIElement&&t.parentElement===r)return Array.prototype.indexOf.call(r.children,t);t=t.parentNode}return-1},l$=(r,e)=>{if(typeof document>"u")return!1;const a=na(r,e);try{return!!a?.matches?.(":popover-open")}catch{return!1}},vl=r=>r===!0||typeof r=="number"&&r>=0&&Number.isFinite(r),d$=r=>r===!0?0:r,u$=r=>r===!0?gl:r,h$={divider:"separator","section-label":"presentation","icon-text-detail":"menuitem","icon-text":"menuitem","user-detail":"menuitem",user:"menuitem","text-detail":"menuitem",text:"menuitem"},fl=(r,e)=>r.itemId!=null&&String(r.itemId)!==""?String(r.itemId):`auto-${e}`,p$=r=>{let e=null;for(let a=r;a;a=a.parentElement)a.hasAttribute("arc-popover")&&(e=a);return e},Bh=(r,e,a,t)=>{if(t||a==="divider"||!!!(e.href||e.onClick))return;p$(r.currentTarget)?.hidePopover?.()},g$=r=>r?.role??h$[vn(r)]??"menuitem",vn=r=>a$(r)?.find(({test:e})=>e())?.value??"text",Oh=r=>e=>Dh(r,e),ml=(r,e,a,t)=>{const o=t??Zc(r,e,a);if(o.hasSubmenu)return o.triggerId;const n=fl(r,e);return`${a}-mi-${n}`},v$=(r,e,a)=>vn(r)==="divider"||r.isDisabled===!0||r["aria-disabled"]===!0?!1:Zc(r,e,a).hasSubmenu?!0:!!(r.href||r.onClick),Jc=(r,e)=>{const a=[];for(let t=0;t<r.length;t+=1)v$(r[t],t,e)&&a.push(t);return a},Nh=(r,e,a)=>{if(typeof document>"u")return;const t=r.children[e];if(!(t instanceof HTMLElement))return;const o=na(a,r);if(o instanceof HTMLElement&&t.contains(o)){o.focus();return}const n=t.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])');Array.from(n).find(l=>l.getAttribute("aria-disabled")!=="true")?.focus()},Fh=(r,e,a,t)=>{const o=Jc(r,e);if(o.length===0)return-1;if(t==="actual")return a>=0&&o.includes(a)?a:o[0];let n=o.indexOf(a);return n<0?t==="next"?o[0]:t==="previous"?o[o.length-1]:o[0]:t==="next"?(n=(n+1)%o.length,o[n]):(n=(n-1+o.length)%o.length,o[n])};function f$(r,e,a){return{ArrowUp:t=>{const o=Fh(r,e,t,"previous");o>=0&&a(o)},ArrowDown:t=>{const o=Fh(r,e,t,"next");o>=0&&a(o)},Home:()=>{const t=Jc(r,e);t.length>0&&a(t[0])},End:()=>{const t=Jc(r,e);t.length>0&&a(t[t.length-1])}}}function m$(r,e){const{isVisible:a,menuListRef:t,activeItemIndex:o,filteredItems:n,menuDomId:c,isMenuRtlRef:l,submenuBackNavigation:d,listNavByKey:h,hideSubmenu:p,focusTriggerById:v,focusRowAtItemIndex:g,setActiveItemIndex:f,openSubmenuForKeyboard:m}=e;if(!a||!t.current||!(r.target instanceof Node)||!t.current.contains(r.target))return;const y=t.current,w=r.target.closest?.("ul[arc-menu]");if(w&&w!==y)return;let x=s$(y,r.target);if(x<0&&o>=0&&(x=o),x<0)return;const C=n[x],z=Zc(C,x,c),k=l.current,T=k?"ArrowLeft":"ArrowRight",P=k?"ArrowRight":"ArrowLeft";if(d&&r.key==="Escape"){r.preventDefault(),r.stopPropagation(),p(d.ownMenuId),v(d.parentTriggerId);return}if(z.hasSubmenu&&l$(z.menuId,y)&&r.key===P){r.preventDefault(),r.stopPropagation(),p(z.menuId),g(x);return}if(d&&r.key===P){r.preventDefault(),r.stopPropagation(),p(d.ownMenuId),v(d.parentTriggerId);return}if(z.hasSubmenu&&(r.key===T||r.key==="Enter")){r.preventDefault(),r.stopPropagation(),f(x),m(z.menuId);return}const L=h[r.key];L&&(r.preventDefault(),r.stopPropagation(),L(x))}function b$(r,e){if(typeof document>"u")return;na(r,e)?.hidePopover?.()}function $$(r,e){if(typeof document>"u")return;na(r,e)?.showPopover?.()}function y$(r){r.querySelectorAll("[popover]").forEach(e=>{try{e.matches(":popover-open")&&e.hidePopover?.()}catch{}})}function x$(r,e){typeof document>"u"||requestAnimationFrame(()=>{na(r,e)?.querySelector("[arc-menu]")?.focus()})}function k$(r,e){if(typeof document>"u")return;na(r,e)?.focus()}function w$({menuListRef:r,passiveMode:e}){const a=(0,s.useRef)(null),t=(0,s.useRef)(null),o=(0,s.useRef)(null),n=(0,s.useCallback)(()=>{t.current!=null&&(clearTimeout(t.current),t.current=null)},[]),c=(0,s.useCallback)(()=>{o.current!=null&&(clearTimeout(o.current),o.current=null)},[]),l=(0,s.useCallback)(()=>{const m=r.current;m&&y$(m)},[r]),d=(0,s.useCallback)(m=>{b$(m,r.current),a.current===m&&(a.current=null)},[r]),h=(0,s.useCallback)(m=>{typeof document>"u"||(a.current&&a.current!==m&&d(a.current),$$(m,r.current),a.current=m)},[d,r]),p=(0,s.useCallback)(m=>{if(!vl(e))return;c(),n();const y=d$(e);if(y<=0){h(m);return}t.current=setTimeout(()=>{t.current=null,h(m)},y)},[e,n,c,h]),v=(0,s.useCallback)(m=>{if(!vl(e))return;n(),c();const y=u$(e);if(y<=0){d(m);return}o.current=setTimeout(()=>{o.current=null,d(m)},y)},[e,n,c,d]),g=(0,s.useCallback)(m=>{n(),c(),h(m),x$(m,r.current)},[n,c,h,r]),f=(0,s.useCallback)(m=>{k$(m,r.current)},[r]);return{activeSubmenuIdRef:a,cancelPendingSubmenuOpen:n,cancelPendingSubmenuClose:c,closeOpenDescendantPopovers:l,hideSubmenu:d,runShowSubmenu:h,showSubmenuFromPointer:p,requestSubmenuCloseFromPointer:v,openSubmenuForKeyboard:g,focusTriggerById:f}}const C$=u`--arc•menu`,Ya=u`${C$}•item`,S$=u`
@layer arc-components {

  [arc-menu] {
    ${Ya}•gap: var(${M}•8);
    ${Ya}•fg: inherit;
    ${Ya}•bg: inherit;

    font-size: var(--arc-menu-font-size, var(${b}•14));
    list-style: none;
    line-height: normal;

    display: var(--arc-menu-display, flex);
    flex-direction: var(--arc-menu-flex-direction, column);
    gap: var(--arc-menu-gap, var(${M}•2));
    padding: var(--arc-menu-padding, var(${M}•4));
    margin: var(--arc-menu-margin, 0);

    outline: var(--arc-menu-outline, none);
  }

  /* Submenus sit under the same <li> as the row button, so the parent row stays :hover while
     pointing at submenu items. Reset the item bg token on submenu lists so inherited hover from
     the parent <li> does not paint every submenu row; each submenu row only picks up hover from its own <li>. */
  [arc-menu-item] > [arc-popover] [arc-menu] {
    ${Ya}•bg: transparent;
  }

  [arc-menu-item] {
    position: relative;
    display: var(--arc-menu-item-display, flex);
    flex-direction: var(--arc-menu-item-flex-direction, row);
    justify-content: var(--arc-menu-item-justify-content, space-between);
    align-items: var(--arc-menu-item-align-items, center);
    gap: var(--arc-menu-item-gap, var(${Ya}•gap));

    background: var(--arc-menu-item-background, var(${Ya}•bg));
    color: var(--arc-menu-item-color, var(${Ya}•fg));
    padding: var(--arc-menu-item-padding, 0);
    border-radius: var(--arc-menu-item-border-radius, var(--arc-border-radius-md));
    cursor: var(--arc-menu-item-cursor, default);
    outline: var(--arc-menu-item-outline, none);

    transition: var(--arc-menu-item-transition, 120ms ease-out);

    &:has(> [arc-button=custom]:not([is-disabled])) {
      &:is(:hover, :has(> [arc-button=custom]:not([is-disabled]):focus-visible)) {
        ${Ya}•bg: var(--arc-color-bg-hover-default);
      }
    }

    /* Inter-Component Communication • ArcButton -------------------• */

    > [arc-button=custom] {
      --arc-button-flex: 1;
      --arc-button-font-size: 1em;
      --arc-button-border: none;
      --arc-button-transition: none;
      --arc-button-position: var(--arc-menu-item-position, relative);
      --arc-button-gap: var(--arc-menu-item-gap, var(${Ya}•gap));
      --arc-button-opacity: var(--arc-menu-item-opacity, unset);
      --arc-button-overflow: var(--arc-menu-item-overflow, clip);
      --arc-button-outline-offset: var(--arc-menu-item-outline-offset, var(${b}•2m));

      [arc-button-content] {
        display: contents;
      }
    }
  }

  [arc-menu-item=divider] {
    margin: 0 var(${M}•4m);

    hr {
      flex: 1;
      border: none;
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      height: 0;
      margin: 0;
    }
  }

`,A$=({items:r,filterText:e,renderItem:a,isVisible:t,keepMenuOpen:o,renderSubmenu:n,passiveMode:c,submenuBackNavigation:l,...d})=>{const h=c??gl,p=(0,s.useId)(),v=(0,s.useRef)(null),{activeSubmenuIdRef:g,cancelPendingSubmenuOpen:f,cancelPendingSubmenuClose:m,closeOpenDescendantPopovers:y,hideSubmenu:w,showSubmenuFromPointer:x,requestSubmenuCloseFromPointer:C,openSubmenuForKeyboard:z,focusTriggerById:k}=w$({menuListRef:v,passiveMode:h}),T=(0,s.useRef)(!1),[P,L]=(0,s.useState)(!1),[V,I]=(0,s.useState)(-1);(0,s.useLayoutEffect)(()=>{const F=v.current;if(F&&typeof getComputedStyle<"u"){const Z=getComputedStyle(F).direction==="rtl";T.current=Z,L(Z)}},[t,r]);const D=(0,s.useMemo)(()=>e?r.filter(F=>Object.values(F).some(Z=>Z===e)):r,[r,e]),X=(0,s.useRef)(D);X.current=D;const E=(0,s.useCallback)(F=>{if(F<0){I(-1);return}I(F);const Z=v.current;if(!Z)return;const tr=ml(D[F],F,p);Nh(Z,F,tr)},[D,p]),ar=(0,s.useMemo)(()=>f$(D,p,E),[D,p,E]),W=F=>m$(F,{isVisible:!!t,menuListRef:v,activeItemIndex:V,filteredItems:D,menuDomId:p,isMenuRtlRef:T,submenuBackNavigation:l,listNavByKey:ar,hideSubmenu:w,focusTriggerById:k,focusRowAtItemIndex:E,setActiveItemIndex:I,openSubmenuForKeyboard:z}),rr=(0,s.useMemo)(()=>D.map((F,Z)=>{const tr=fl(F,Z),{itemId:lr,role:yr,keepMenuOpen:H,items:ir,renderSubmenu:Rr,submenuProps:sr,...br}=F,ur=Zc(F,Z,p),{hasSubmenu:hr}=ur,gr=hr?ur.menuId:"",xr=hr?{menu:ur.menuId,trigger:ur.triggerId}:void 0,U=vn(F)||"",er=yr||g$(F)||"menuitem",S=Z===V,$=ml(F,Z,p,ur),O={filterText:e,isCurrent:S,menuControlId:$,itemId:tr,role:yr,keepMenuOpen:H??o,isRtl:P,...hr?{hasSubmenu:!0,ids:xr}:{hasSubmenu:!1}},K=a?.(br,Z,O);return hr?(0,i.jsxs)("li",{"arc-menu-item":U,role:"presentation",onFocusCapture:()=>I(Z),onMouseEnter:()=>{x(gr)},onMouseLeave:vl(h)?()=>C(gr):void 0,onClick:_=>Bh(_,F,U,H??o),children:[K,n?.({ids:xr,items:ir??[],item:F,filterText:e,passiveMode:h,isRtl:P})]},tr):(0,i.jsx)("li",{"arc-menu-item":U,role:er,onFocusCapture:()=>I(Z),onClick:_=>Bh(_,F,U,H??o),children:K},tr)}),[V,e,D,o,a,p,P,h,n,x,C]);return(0,s.useEffect)(()=>{if(!t){f(),m(),y(),g.current=null,I(-1);return}const F=X.current,Z=Jc(F,p);if(Z.length>0){const tr=Z[0],lr=v.current;if(I(tr),lr){const yr=ml(F[tr],tr,p);Nh(lr,tr,yr)}}},[t,p,f,m,y,g]),(0,s.useEffect)(()=>()=>{f(),m(),y(),g.current=null},[f,m,y,g]),(0,i.jsx)("ul",{...d,ref:v,"arc-menu":"",role:"menu",onKeyDown:W,onMouseLeave:()=>I(-1),tabIndex:t?0:-1,children:rr})};Cr("ArcMenu",S$);const Hh=["items","renderItem","renderSubmenu","keepMenuOpen","onToggle","id","menuProps","passiveMode","submenuBackNavigation","offset","ref"],Vh=r=>{const{startSlot:e,endSlot:a,onClick:t,href:o,target:n,containerProps:c,isDisabled:l,"aria-disabled":d,tooltip:h,id:p,popoverTarget:v,popoverTargetAction:g,"aria-haspopup":f,"aria-controls":m,"aria-expanded":y,...w}=r,x=vn(w),C=(0,s.useMemo)(()=>Oh(x),[x]),z=d??l,k=x==="divider",T=!!(o||t||v),P=!k,L=P&&e?"":void 0,V=P&&a?"":void 0,I=(0,s.useMemo)(()=>({...c,onClick:t,tooltip:h,href:o,target:n,id:p,popoverTarget:v,popoverTargetAction:g,"aria-haspopup":f,"aria-controls":m,"aria-expanded":y}),[c,t,h,o,n,p,v,g,f,m,y]),D=(0,s.useMemo)(()=>({...c}),[c]);return T?(0,i.jsxs)(jr,{...I,role:v?"menuitem":I.role,"aria-disabled":z?"true":void 0,isDisabled:!!z,_isCustom:!0,"arc-dropdown-item":x??"","has-start-slot":L,"has-end-slot":V,children:[P&&e,(0,i.jsx)(C,{...w,"is-item-content":"interactive"}),P&&a]}):(0,i.jsxs)("div",{...D,"arc-dropdown-item":x??"","has-start-slot":L,"has-end-slot":V,children:[P&&e,(0,i.jsx)(C,{...w,"is-item-content":"inert"}),P&&a]})},z$=u`--arc•dropdown`,E$=u`${z$}•menu`,Se=u`${E$}•item`,_$=u`
@layer arc-components {

  /* ITEM SETUP ----------------------------------------------------• */

  [arc-dropdown-item] {
    ${Se}•padding: var(${M}•8) var(${M}•12);
    ${Se}•min•height: var(${b}•36);
    ${Se}•gap: var(${M}•8);

    &[arc-dropdown-item=text-detail] {
      ${Se}•min•height: var(${b}•48);
    }

    &[arc-dropdown-item=section-label] {
      ${Se}•min•height: var(${b}•32);
    }

    &[arc-dropdown-item=user] {
      ${Se}•min•height: var(${b}•40);

      &:not([has-start-slot]) {
        ${Se}•padding: var(${M}•8) var(${M}•12) var(${M}•8) var(${M}•10);
      }
    }

    &[arc-dropdown-item=user-detail] {
      ${Se}•min•height: var(${b}•48);

      &:not([has-start-slot]) {
        ${Se}•padding: var(${M}•8) var(${M}•12) var(${M}•8) var(${M}•6);
      }
    }

    &[arc-dropdown-item=divider] {
      ${Se}•min•height: var(${b}•8);
      ${Se}•padding: 0;
    }
  }

  /* DROPDOWN ELEMENTS ---------------------------------------------• */

  [arc-dropdown] {
    --arc-popover-font-size: initial;
    --arc-popover-width: var(--arc-dropdown-width, auto);
    --arc-popover-min-width: var(--arc-dropdown-min-width, 3em);
    --arc-popover-max-width: var(--arc-dropdown-max-width, 50em);
    --arc-popover-padding: var(--arc-dropdown-padding, 0em);
    --arc-popover-outline-size: 0em;
    --arc-popover-overflow: var(--arc-dropdown-overflow, auto);

    --arc-menu-item-gap: var(${Se}•gap);
    --arc-badge-align-self: center;
    --arc-badge-count-align-self: center;
  }

  [arc-dropdown-submenu] {
    &:where([anchor-at="left-start"], [anchor-at="right-start"]) {
      margin-top: var(--arc-dropdown-submenu-offset, var(${M}•4m));
    }

    &:where([anchor-at="left-end"], [anchor-at="right-end"]) {
      margin-top: var(--arc-dropdown-submenu-offset, var(${M}•4));
    }
  }

  [arc-dropdown-item] {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(${Se}•gap);
    text-align: start;
    min-height: var(${Se}•min•height);

    &:not([arc-button]) {
      padding: var(${Se}•padding);
      max-width: 100%;
    }

    &[arc-button] {
      --arc-button-padding: var(${Se}•padding);
      --arc-button-min-height: var(${b}•40);
    }

    [is-item-content] {
      flex: 1;
    }

    [arc-dropdown-submenu-icon] {
      --arc-icon-color: var(--arc-dropdown-submenu-icon-color, var(--arc-color-fg-secondary));
    }
  }

}
`,fn={OFFSET:void 0,ANCHOR_AT_LTR:"left-start",ANCHOR_AT_RTL:"right-start",ICON_LTR:"fa-regular fa-angle-right",ICON_RTL:"fa-regular fa-angle-left"},P$=(r,e)=>({anchorAt:r?fn.ANCHOR_AT_LTR:fn.ANCHOR_AT_RTL,offset:e??fn.OFFSET}),Gh=(0,s.forwardRef)((r,e)=>(0,i.jsx)(No,{...r,ref:e,"arc-dropdown-menu-button":""})),T$=r=>{const e={...r};return Hh.forEach(a=>{Reflect.deleteProperty(e,a)}),e},I$=r=>r?fn.ICON_RTL:fn.ICON_LTR,R$=(r,e)=>r===void 0?I$(e):typeof r=="function"?r(e):r,Qc=r=>{const{items:e,renderItem:a,keepMenuOpen:t,menuProps:o,passiveMode:n,submenuBackNavigation:c,renderSubmenu:l,submenuIcon:d,submenuOffset:h,ref:p,...v}=r,[g,f]=(0,s.useState)(!1),m=(0,s.useRef)(r);m.current=r;const y=(0,s.useRef)(null),w=(0,s.useCallback)(T=>{if(typeof document>"u")return;na(T,y.current)?.hidePopover?.()},[]),x=(0,s.useCallback)(T=>{y.current=T,ta(p,T)},[p]),C=(0,s.useCallback)(T=>{const P=m.current,L=T$(P),V=i$(T.item)??P.renderItem,{ids:I}=T,D=P.keepMenuOpen;if(T.item.renderSubmenu)return T.item.renderSubmenu({items:T.items,renderItem:V,keepMenuOpen:D,filterText:T.filterText,passiveMode:T.passiveMode,ids:I,closeSubmenu:()=>{w(I.menu)},inheritedFromParent:L});const{menuProps:X,popoverPassthrough:E}=n$(T.item);return(0,i.jsx)(Qc,{...L,...P$(T.isRtl,P.submenuOffset),...E,id:I.menu,"arc-dropdown-submenu":"",submenuBackNavigation:c$(I),alternateAnchorId:I.trigger,hidePopoverButton:!0,passiveMode:T.passiveMode,items:T.items,renderItem:V,keepMenuOpen:D,menuProps:X})},[w]),z=(0,s.useCallback)((...T)=>{const[P,,L]=T;if(a)return a(...T);const{ids:V,isRtl:I,menuControlId:D}=L,{endSlot:X,...E}=P,ar=!!V,W=R$(m.current.submenuIcon,!!I),rr=X||ar?(0,i.jsxs)(i.Fragment,{children:[X,ar?(0,i.jsx)(Sr,{"arc-dropdown-submenu-icon":"",icon:W}):null]}):void 0;return(0,i.jsx)(Vh,{...E,id:D,endSlot:rr,...V?{popoverTarget:V.menu,popoverTargetAction:"toggle","aria-haspopup":"menu","aria-controls":V.menu}:{}})},[a]),k=T=>{f(T.newState==="open"),r?.onToggle?.(T)};return(0,i.jsx)(ka,{...v,ref:x,"arc-dropdown":"",variant:"common",onToggle:k,children:(0,i.jsx)(A$,{...o,"arc-dropdown-menu":"",passiveMode:n,submenuBackNavigation:c,items:e??[],renderItem:z,isVisible:g,keepMenuOpen:t,renderSubmenu:C})})};Gh.displayName="ArcDropdownButton",Qc.Button=Gh,Qc.Item=Vh,Cr("ArcDropdownMenu",_$);const Uh=({size:r="md",layout:e="icon",variant:a="common",hierarchy:t="tertiary",...o})=>(0,i.jsx)(jr,{...o,"arc-input-action":"",size:r,layout:e,variant:a,hierarchy:t}),ri=u`--arc•link`,Ra=u`${ri}•fg`,mn=u`${Ra}•hover`,bn=u`${Ra}•disabled`,bl=u`${ri}•outline`,Kh=u`${bl}•size`,$l=u`${bl}•offset`,M$=u`${ri}•cursor`,$n=u`${ri}•focus•color`,L$=u`
@layer arc-components {
${Kg}

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    ${Ra}: currentcolor;
    ${mn}: color-mix(in srgb, currentcolor, transparent 38.75%);
    ${bn}: color-mix(in srgb, currentcolor, transparent 70%);

    ${$n}: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    ${Ra}: var(--arc-color-fg-primary);
    ${mn}: var(--arc-color-fg-secondary);
    ${bn}: var(--arc-color-fg-disabled);
    ${$n}: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    ${Ra}: var(--arc-color-fg-secondary);
    ${mn}: var(--arc-color-fg-primary);
    ${bn}: var(--arc-color-fg-disabled);
    ${$n}: var(--arc-color-border-focus);
  }

  /* @deprecated */
  &[data-variant=inverse] {
    ${Ra}: var(--arc-color-fg-on-mono-inverse);
    ${mn}: var(--arc-link-fg-hover-inverse);
    ${bn}: var(--arc-link-fg-disabled-inverse);
    ${$n}: var(--arc-link-focus-disabled-inverse);
  }

  & {
    ${Kh}: 0.125em; /* 2px */
    ${$l}: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    ${Ra}: var(--arc-link-color-hover, var(${mn}));
  }

  &:where(:focus, :focus-within):focus-visible {
    ${bl}: var(${Kh}) solid var(--arc-link-color-focus, var(${$n}));
    ${$l}: var(${$l});

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    ${Ra}: var(--arc-link-color-disabled, var(${bn}));
    ${M$}: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(${Ra}));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(${Ra}));
  border-radius: var(--arc-border-radius-sm); /* for focus outline */
  text-decoration: var(--arc-link-text-decoration, underline);

  [data-element=icon] {
    text-decoration: none;
  }

  [data-element=text] {
    text-decoration: var(--arc-link-text-decoration, underline);
    text-decoration-color: currentcolor;
  }
}

}
`,j$=fr(Wr,["inherit","primary","secondary","inverse"]),D$=({children:r,layout:e="gutter",size:a="inherit",variant:t="inherit",tag:o="a",href:n,icon:c,text:l,overflow:d,iconSize:h,gapSize:p,isFlipped:v,isDisabled:g,...f})=>(0,i.jsx)(o,{...f,href:g?void 0:n,"arc-link":"","data-variant":t,"aria-disabled":g,"data-is-disabled":g?"":void 0,children:r||(0,i.jsx)(le,{icon:c,text:l,overflow:d,iconSize:h,gapSize:p,size:a,layout:e,isFlipped:v})});Cr("ArcLink",L$);const B$=[...Oa],O$=fr(Wr,["common"]),N$=fr(Wr,["common","critical"]),F$=fr(Wr,["common","brand","info","success","warning","error","processing"]),H$=["auto","dark","light","none"],V$=["auto","all","top-bottom","left-right","left-right-top","left-right-bottom","top-bottom-left","top-bottom-right","none"],G$=fr(xe,["xl","lg","md","sm","custom","fullscreen"]),U$=["cancel","escape","outside","button:dismiss","button:back","button:primary","button:secondary","button:tertiary","confirm:discard","confirm:cancel"],yl=r=>r?.matches(":modal"),xl=(r,e)=>e.target===r,K$=(r,e)=>e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom,yn=({modalRef:r,shouldConfirm:e,setIsConfirming:a,onCloseOverride:t=void 0})=>(o,n)=>c=>{if(c?.preventDefault?.(),c?.stopPropagation?.(),!r?.current){n?.(c);return}if(t){t(o,c,r.current),n?.(c);return}if(e&&o!=="confirm:discard"){a?.(!0);return}r.current?.close(o),a?.(!1),n?.(c)},kl=({modalRef:r,shouldConfirm:e,setIsConfirming:a,onClose:t,onToggle:o})=>{(0,s.useEffect)(()=>{const n=r.current;if(!n)return;const c=d=>{yl(n)&&xl(n,d)&&(e?(d.preventDefault(),d.stopPropagation(),a?.(!0)):t?.("outside",d))},l=d=>{xl(n,d)&&(a?.(!1),t?.(n.returnValue,d),o?.(!1,d))};return n.addEventListener("close",l),n.addEventListener("cancel",c),()=>{n.removeEventListener("close",l),n.removeEventListener("cancel",c)}},[r,e,a,t,o])},wl=({modalRef:r,isOpen:e,isTopLayer:a})=>{(0,s.useEffect)(()=>{const t=r.current;t&&(e&&!t.open&&(a?t.showModal():t.show()),!e&&t.open&&t.close())},[e,a])},Cl=({modalRef:r,isOpen:e,autoFocusId:a})=>{(0,s.useEffect)(()=>{const t=r.current;if(!t||!a||!e)return;const o=t.querySelector(`#${a}`);if(!o||!(o instanceof HTMLElement))return;const n=setTimeout(()=>{o.focus()},0);return()=>clearTimeout(n)},[r,a,e])},Wh=(r,e)=>(typeof r.composedPath=="function"?r.composedPath():[]).includes(e)||r.target instanceof Node&&e.contains(r.target),Xh=({modalRef:r,isOpen:e=!1,closeOnBackdrop:a=!1,attemptCloseModal:t})=>{(0,s.useEffect)(()=>{const o=r.current;if(!o||!e||!a||!yl(o))return;let n=!1;const c=d=>{n=Wh(d,o)},l=d=>{if(n||Wh(d,o))return;const h=o.getBoundingClientRect();K$(h,d)&&t("outside")(d)};return document.documentElement?.addEventListener("pointerdown",c,{capture:!0}),document.documentElement?.addEventListener("click",l,{capture:!0}),()=>{document.documentElement?.removeEventListener("pointerdown",c,{capture:!0}),document.documentElement?.removeEventListener("click",l,{capture:!0})}},[r,t,e,a])},qh=({modalRef:r,isOpen:e=!1,closeOnEsc:a=!1,closedBy:t="closerequest",attemptCloseModal:o})=>{(0,s.useEffect)(()=>{const n=r.current;if(!n||!e||!a||!yl(n))return;const c=l=>{if(l.key==="Escape"&&xl(n,l)){if(t==="none"){l.stopPropagation(),l.preventDefault();return}o("escape")(l)}};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[r,o,e,a,t])},Sl=r=>(0,i.jsx)(jr,{"aria-label":"Dismiss",text:"Dismiss",...r,variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-xmark-large",layout:"icon",shape:"square",size:"md"}),W$=r=>(0,i.jsx)(jr,{"arc-modal-go-back":"","aria-label":"Go Back",text:"Go Back",...r,variant:"common",hierarchy:"secondary",icon:"fa-regular fa-arrow-left",layout:"icon",shape:"square",size:"md"}),ei=(0,s.forwardRef)(({inert:r,...e},a)=>(0,i.jsx)("div",{...e,ref:a,"arc-modal-content":"",inert:r}));ei.displayName="ModalContent";const Yh=({showDivider:r,...e})=>(0,i.jsx)("header",{...e,"arc-modal-header":"","has-divider":r?"":void 0}),X$=({glyph:r,variant:e="common"})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)(Sr,{icon:r,"arc-modal-glyph":"","arc-icon-status":e})}),Al=r=>{const{titleContent:e,TitleElement:a="h2",...t}=r;return(0,i.jsx)(i.Fragment,{children:e&&(0,i.jsx)(a,{...t,"arc-modal-title":"",children:typeof e=="string"?e:(0,i.jsx)(le,{...e})})})},q$=({message:r,...e})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)("p",{...e,"arc-modal-message":"",children:r})}),zl=({tag:r="section",padding:e,...a})=>(0,i.jsx)(r,{...a,"arc-modal-body":"","data-padding":e==="auto"?void 0:e}),El=({showDivider:r,...e})=>(0,i.jsx)("footer",{...e,"arc-modal-footer":"","has-divider":r?"":void 0}),Y$=r=>e=>{if(e.key==="Escape"){if(r==="none"){e.stopPropagation(),e.preventDefault();return}return"escape"}},mr=u`--arc•modal`,xn=u`${mr}•layout`,Z$=u`${mr}•header`,ai=u`${mr}•body`,kn=u`${mr}•footer`,Zh=u`${mr}•fg`,ti=u`${mr}•bg`,Ma=u`${mr}•backdrop`,lt=u`${mr}•scale`,ho=u`${Z$}•padding`,Kr=u`${ai}•padding`,dt=u`${kn}•padding`,J$=u`
  ${mr}•font•size: var(${b}•14);
  ${mr}•gap: var(${M}•16);

  ${xn}•rows: auto 1fr auto;
  ${xn}•columns: auto;

  &:not(:has([arc-modal-footer])):has([arc-modal-header]) {
    ${xn}•rows: auto 1fr;
  }

  &:not(:has([arc-modal-header])):has([arc-modal-footer]) {
    ${xn}•rows: 1fr auto;
  }

  &:not(:has([arc-modal-header])):not(:has([arc-modal-footer])) {
    ${xn}•rows: auto;
  }

  ${Zh}: var(--arc-color-fg-primary);
  ${ti}: var(--arc-color-bg-primary);
  ${mr}•border: none;
  ${mr}•border•radius: var(--arc-border-radius-lg);
  ${mr}•divider: var(${b}•1) solid var(--arc-color-border-mid);

  ${mr}•max•width: calc(100vw - var(${M}•32));
  ${mr}•min•width: unset;
  ${mr}•width: auto;

  ${mr}•max•height: calc(100vh - var(${M}•32));
  ${mr}•min•height: unset;
  ${mr}•height: max-content;

  ${lt}: 1;
  ${lt}•start: 0.95;

  ${ai}•text•align: unset;
  ${kn}•justify•content: flex-end;

  ${Ma}•bg: var(--arc-color-overlay-stark);
  ${Ma}•pointer•events: none;
  ${Ma}•cursor: default;

  &:where([is-backdrop=light]) {
    ${Ma}•bg: var(--arc-color-overlay-subtle);
  }

  &:where([is-backdrop=dark]) {
    ${Ma}•bg: var(--arc-color-overlay-stark);
  }

  &:where([is-backdrop=none]) {
    ${Ma}•bg: transparent;
  }
`,Q$=u`
  &[data-size=sm] {
    ${mr}•width: 28em;
  }

  &[data-size=md] {
    ${mr}•width: 40em;
  }

  &[data-size=lg] {
    ${mr}•width: 50em;
  }

  &[data-size=xl] {
    ${mr}•width: 64em;
  }

  &[data-size=custom] {
    ${mr}•width: auto;
    ${mr}•height: max-content;
  }

  &[data-size=fullscreen] {
    ${mr}•width: 100vw;
    ${mr}•height: 100vh;
    ${mr}•min•width: 100vw;
    ${mr}•min•height: 100vh;
    ${mr}•max•width: 100vw;
    ${mr}•max•height: 100vh;
    ${mr}•border•radius: var(--arc-border-radius-none);

    ${lt}: 1;
    ${lt}•start: 1.125;
  }
`,r1=u`
  &[is-confirm] {
    ${kn}•justify•content: flex-end;

    &[is-confirm=critical] [arc-modal-title] {
      --arc-icon-text-icon-color: var(--arc-color-fg-critical-mid);
    }
  }

  &[is-alert] {
    ${ai}•text•align: center;
    ${kn}•justify•content: center;

    ${Kr}•block•start: var(${M}•40);
    ${Kr}•block•end: var(${M}•20);

    ${dt}•block•start: var(${M}•12);
    ${dt}•block•end: var(${M}•40);

    ${mr}•glyph•size: var(${b}•48);

    [arc-modal-spinner] {
      --arc-spinner-circle-opacity: 9.8%; /* 9.8% = neutral-200 on white */
      --arc-spinner-size: var(${mr}•glyph•size);
    }

    [arc-modal-glyph] {
      --arc-icon-display: flex;
      --arc-icon-size: var(${mr}•glyph•size);
      --arc-icon-height: var(--arc-icon-size);
      --arc-icon-max-height: var(--arc-icon-size);
    }

    [arc-modal-body] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(${M}•12);
    }
  }

  &:not([is-top-layer]) {
    z-index: var(--arc-modal-z-index, 1000);
  }
`,e1=u`
  [arc-modal-content] {
    &:has([arc-modal-header]) {
      ${Kr}•block•start: var(${M}•10);
    }

    &:has([arc-modal-footer]) {
      ${Kr}•block•end: var(${M}•10);
    }

    &:has([arc-modal-header][has-divider]) {
      ${ho}•block•end: var(${M}•20);
      ${Kr}•block•start: var(${M}•20);
    }

    &:has([arc-modal-footer][has-divider]) {
      ${Kr}•block•end: var(${M}•20);
      ${dt}•block•start: var(${M}•12);
      ${dt}•block•end: var(${M}•12);
    }

    &:has([arc-modal-body][data-padding=top-bottom]) {
      ${Kr}•inline•start: 0;
      ${Kr}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right]) {
      ${Kr}•block•start: 0;
      ${Kr}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-top]) {
      ${Kr}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-bottom]) {
      ${Kr}•block•start: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-left]) {
      ${Kr}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-right]) {
      ${Kr}•inline•start: 0;
    }

    &:has([arc-modal-body][data-padding=all]) {
      ${Kr}•block•start: var(${M}•20);
      ${Kr}•inline•end: var(${M}•24);
      ${Kr}•block•end: var(${M}•20);
      ${Kr}•inline•start: var(${M}•24);
    }

    &:has([arc-modal-go-back]) {
      ${ho}•inline•start: var(${M}•20);
    }

    ${ho}:
      var(${M}•20)
      var(${M}•24)
      var(${ho}•block•end, var(${M}•10))
      var(${ho}•inline•start, var(${M}•24));

    ${Kr}:
      var(${Kr}•block•start, var(${M}•20))
      var(${Kr}•inline•end, var(${M}•24))
      var(${Kr}•block•end, var(${M}•20))
      var(${Kr}•inline•start, var(${M}•24));

    ${dt}:
      var(${dt}•block•start, var(${M}•10))
      var(${M}•24)
      var(${dt}•block•end, var(${M}•20))
      var(${M}•24);

    &:has([arc-modal-body][data-padding=none]) {
      ${Kr}: 0;
    }
  }
`,a1=u`
  [arc-modal] {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-modal-transition-duration, 240ms);
    transition-property: display, opacity, scale;
    transition-timing-function: ease-out;

    &::after {
      transition: inherit;
    }

    &::backdrop {
      transition: inherit;
    }
  }

  @supports (overlay: auto) {
    [arc-modal] {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity, scale;
    }
  }
`,t1=u`
  [arc-modal] {
    opacity: 0;
    scale: var(--arc-modal-scale, var(${lt}));

    &::after {
      opacity: 0;
    }

    &::backdrop {
      opacity: 0;
    }

    &[open] {
      display: flex;
      flex-direction: column;
      opacity: 1;
    }

    &[open]::after {
      opacity: 1;
    }

    &[open]::backdrop {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-modal][open] {
      opacity: 0;
      scale: var(--arc-modal-scale-start, var(${lt}•start));
    }

    [arc-modal][open]::after {
      opacity: 0;
    }

    [arc-modal][open]::backdrop {
      opacity: 0;
    }
  }
`,_l=u`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-modal] {
    ${J$}
    ${Q$}
    ${r1}
    ${e1}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-modal] {
      ${lt}: 1;
      ${lt}•start: 1;
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-modal] {
    will-change: opacity, scale;
    contain: layout style paint;

    inset: var(--arc-modal-inset, 0);
    translate: var(--arc-modal-translate, none);
    margin: var(--arc-modal-margin, auto);

    padding: 0;
    color: var(--arc-modal-color, var(${Zh}));
    background: var(--arc-modal-background, var(${ti}));
    border: var(--arc-modal-border, var(${mr}•border));
    border-radius: var(--arc-modal-border-radius, var(${mr}•border•radius));
    box-shadow: var(--arc-modal-box-shadow, var(--arc-shadow-lg));
    outline: var(--arc-modal-outline, none);

    width: var(--arc-modal-width, var(${mr}•width));
    height: var(--arc-modal-height, var(${mr}•height));
    min-width: var(--arc-modal-min-width, var(${mr}•min•width));
    min-height: var(--arc-modal-min-height, var(${mr}•min•height));
    max-width: var(--arc-modal-max-width, var(${mr}•max•width));
    max-height: var(--arc-modal-max-height, var(${mr}•max•height));

    &::backdrop {
      will-change: opacity;
      contain: layout style paint;

      background: var(--arc-modal-backdrop-background, var(${Ma}•bg));
      pointer-events: var(${Ma}•pointer•events, none);
      cursor: var(${Ma}•cursor, default);
    }

    [arc-modal-content] {
      font-size: var(--arc-modal-font-size, var(${mr}•font•size));
      flex: 1 1 min-content;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      z-index: 1;

      /* Force remove margin from controlled title and message elements */
      :is([arc-modal-title], [arc-modal-message]) { margin: 0 !important; }
    }

    [arc-modal-header] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      align-items: var(--arc-modal-header-align-items, unset);
      justify-content: space-between;
      gap: var(--arc-modal-header-gap, var(${mr}•gap));

      padding: var(${ho});
      background: var(--arc-modal-header-background, var(${ti}));
      max-width: 100%;

      &:where([has-divider]) {
        border-bottom: var(--arc-modal-header-divider, var(${mr}•divider));
      }

      :where([header-slot]) {
        display: flex;
        align-items: inherit;
        gap: inherit;
      }

      :where([header-slot=content]) {
        flex: 1;
        align-self: flex-start;
      }

      :where([header-slot=dismiss]) {
        margin: var(${M}•4m) var(${M}•8m) var(${M}•4m) var(${M}•4m);
      }

      :where([header-slot=go-back]) {
        margin: var(${M}•4m) 0 var(${M}•4m) var(${M}•4m);
      }
    }

    [arc-modal-title] {
      --arc-icon-text-gap: var(${M}•8);

      [data-element=subtext] {
        font-family: var(--arc-font-family-body);
        font-weight: var(--arc-font-weight-body);
        font-size: var(--arc-font-size-body-md);
        color: inherit;
        margin-top: var(${M}•4);
      }
    }

    [arc-modal-body] {
      flex: 1;
      padding: var(${Kr});
      overflow: auto;
      overscroll-behavior: var(--arc-modal-overscroll-behavior, contain);
      min-height: var(--arc-modal-body-min-height, 3em);
      text-align: var(--arc-modal-body-text-align, var(${ai}•text•align));
    }

    [arc-modal-footer] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: var(--arc-modal-footer-flex-direction, unset);
      align-items: var(--arc-modal-footer-align-items, center);
      justify-content: var(--arc-modal-footer-justify-content, var(${kn}•justify•content));
      gap: var(--arc-modal-footer-gap, var(${mr}•gap));

      background: var(--arc-modal-footer-background, var(${ti}));
      padding: var(--arc-modal-footer-padding, var(${dt}));
      max-width: 100%;

      &[has-divider] {
        border-top: var(--arc-modal-footer-divider, var(${mr}•divider));
      }

      [footer-slot=content] {
        flex: var(--arc-modal-footer-content-flex, none);
        display: var(--arc-modal-footer-content-display, flex);
        gap: inherit;
      }
    }

    [arc-modal-dismiss] {
      position: var(--arc-modal-dismiss-position, absolute);
      inset: var(--arc-modal-dismiss-inset, var(${M}•16) var(${M}•16) auto auto);
      width: var(--arc-modal-dismiss-width, auto);
      overflow: visible;
      z-index: 2;
    }

    /* Nested confirm modal */
    &:not([is-top-layer]):has([arc-modal][is-confirm][open])::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--arc-modal-backdrop-background, var(${Ma}•bg));
      z-index: var(--arc-modal-confirm-z-index, 2);
    }

    /* Nested modals */
    [arc-modal] {
      --arc-modal-min-width: var(--arc-modal-nested-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-min-height, none);
    }

    [arc-modal][is-alert] {
      --arc-modal-min-width: var(--arc-modal-nested-alert-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-alert-min-height, none);
    }

    [arc-modal][is-confirm] {
      --arc-modal-width: var(--arc-modal-confirm-width, 25em);
      --arc-modal-height: var(--arc-modal-confirm-height, max-content);
      --arc-modal-min-width: var(--arc-modal-confirm-min-width, none);
      --arc-modal-min-height: var(--arc-modal-confirm-min-height, none);
      --arc-modal-max-width: var(--arc-modal-confirm-max-width, calc(100% - var(${M}•32)));
      --arc-button-bar-flex: none;

      z-index: var(--arc-modal-confirm-z-index, 3);

      inset: var(--arc-modal-confirm-inset, 0);
      translate: var(--arc-modal-confirm-translate, none);
      margin: var(--arc-modal-confirm-margin, auto);
    }
  }

  ${a1}
  ${t1}
`,ut={variant:"common",backdropColor:"auto",message:"You have unsaved changes. Discard them?",onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},Jh=({children:r,headerProps:e,bodyProps:a,footerProps:t,...o})=>{const n=(0,s.useRef)(null),{isOpen:c,autoFocusId:l,isTopLayer:d=ut.isTopLayer,isInverse:h=ut.isInverse,scheme:p=ut.scheme,backdropColor:v=ut.backdropColor,variant:g=ut.variant,message:f=ut.message,onCloseOverride:m=ut.onCloseOverride,onConfirmDiscard:y,onConfirmCancel:w,contentRef:x,...C}=o,{slotStart:z,TitleElement:k,titleContent:T,slotEnd:P,...L}=e||{},{primaryButton:V,secondaryButton:I,...D}=t||{},X=!!(T||z||P),E=p==="auto"?void 0:p,ar=!!m,W=tr=>ar?m?.("confirm:discard",tr,n.current??void 0):y?.("confirm:discard",tr),rr=tr=>ar?m?.("confirm:cancel",tr,n.current??void 0):w?.("confirm:cancel",tr);kl({modalRef:n,onClose:m}),wl({modalRef:n,isOpen:c,isTopLayer:d}),Cl({modalRef:n,isOpen:c,autoFocusId:l});const F=tr=>{rr(tr),I?.onClick?.(tr)},Z=tr=>{W(tr),V?.onClick?.(tr)};return(0,i.jsx)("dialog",{...C,ref:n,"arc-modal":"","arc-scheme":h?"inverse":E,"is-confirm":g||"","is-inverse":h?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":v==="auto"?void 0:v,"data-size":"sm",closedby:"none",onKeyDown:Y$("none"),children:(0,i.jsxs)(ei,{ref:x,children:[X&&(0,i.jsxs)(Yh,{...L,children:[z&&(0,i.jsx)("div",{"header-slot":"start",children:z}),(0,i.jsx)("div",{"header-slot":"content",children:(0,i.jsx)(Al,{TitleElement:k,titleContent:T})}),P&&(0,i.jsx)("div",{"header-slot":"end",children:P})]}),(0,i.jsx)(zl,{...a,children:r||f&&(0,i.jsx)("p",{style:{margin:0},children:f})}),(0,i.jsx)(El,{...D,children:(0,i.jsxs)(to,{children:[(0,i.jsx)(jr,{...I,text:I?.text||"Cancel",variant:"common",hierarchy:"secondary",isInverse:h,onClick:F}),(0,i.jsx)(jr,{...V,text:V?.text||"Discard",variant:g??"common",hierarchy:"primary",isInverse:h,onClick:Z})]})})]})})};Cr("ArcModalConfirm",_l);const je={size:"md",variant:"common",backdropColor:"auto",isTopLayer:!0,isInverse:!1,scheme:"auto",showDismiss:!0,closeOnEsc:!0,closeOnBackdrop:!1,hasConfirmFlow:!1,hasUnsavedChanges:!1,onCloseOverride:void 0,bypassConfirmWhen:{didPressEscapeKey:!1,didClickBackdrop:!1,didClickGoBackButton:!1,didClickDismissButton:!1,didClickPrimaryButton:!1,didClickSecondaryButton:!1,didClickTertiaryButton:!1},headerProps:{showDivider:!1},bodyProps:{padding:"auto"},footerProps:{showDivider:!1}},o1=({children:r,confirmProps:e,headerProps:a,bodyProps:t,dismissProps:o,footerProps:n,...c})=>{const l=(0,s.useRef)(null),[d,h]=(0,s.useState)(!1),{isOpen:p,autoFocusId:v,isTopLayer:g=je.isTopLayer,isInverse:f=je.isInverse,scheme:m=je.scheme,backdropColor:y=je.backdropColor,hasConfirmFlow:w=je.hasConfirmFlow,hasUnsavedChanges:x=je.hasUnsavedChanges,onCloseOverride:C=je.onCloseOverride,bypassConfirmWhen:z=je.bypassConfirmWhen??{},size:k=je.size,closeOnBackdrop:T=je.closeOnBackdrop,closeOnEsc:P=je.closeOnEsc,showDismiss:L=je.showDismiss,onActionError:V,onClose:I,onToggle:D,width:X,height:E,style:ar,contentRef:W,...rr}=c,{showGoBack:F,goBackProps:Z,slotStart:tr,TitleElement:lr,titleContent:yr,slotEnd:H,showDivider:ir=je.headerProps?.showDivider,...Rr}=a??{},{slotStart:sr,primaryButton:br,secondaryButton:ur,tertiaryButton:hr,showDivider:gr=je.footerProps?.showDivider,...xr}=n??{},U=!!(F||yr||tr||H),er=!!(br||ur||hr),S=!!(er||sr),$=!!(w&&x),O=P?"closerequest":"none",K=m==="auto"?void 0:m,{didPressEscapeKey:_,didClickBackdrop:N,didClickGoBackButton:or,didClickDismissButton:nr,didClickPrimaryButton:cr,didClickSecondaryButton:wr,didClickTertiaryButton:Mr}=z,Qr=yn({modalRef:l,shouldConfirm:$,setIsConfirming:h,onCloseOverride:C});kl({modalRef:l,shouldConfirm:$,setIsConfirming:h,onClose:I,onToggle:D}),wl({modalRef:l,isOpen:p,isTopLayer:g}),Cl({modalRef:l,isOpen:p,autoFocusId:v}),Xh({modalRef:l,isOpen:p,closeOnBackdrop:T,attemptCloseModal:N?yn({modalRef:l,shouldConfirm:$&&!N,setIsConfirming:h}):Qr}),qh({modalRef:l,isOpen:p,closeOnEsc:P,closedBy:O,attemptCloseModal:_?yn({modalRef:l,shouldConfirm:$&&!_,setIsConfirming:h}):Qr});const De=()=>h(!1),Ae=(ze,Be)=>Qr(ze)(Be),oe=(ze,Be,aa)=>async ne=>{ne?.preventDefault?.(),ne?.stopPropagation?.();const Ee=()=>Be?yn({modalRef:l,shouldConfirm:$&&!Be,setIsConfirming:h})(ze,aa?.onCloseCallback)(ne):Qr(ze,aa?.onCloseCallback)(ne);try{await aa?.onClick?.(ne),Ee()}catch(re){V?.(re,{reason:ze,event:ne})}};return(0,i.jsxs)("dialog",{...rr,ref:l,"arc-modal":"","arc-scheme":f?"inverse":K,"is-inverse":f?"":void 0,"is-top-layer":g?"":void 0,"is-backdrop":y==="auto"?void 0:y,"data-size":k,closedby:O,style:{"--arc-modal-width":X??"","--arc-modal-height":E??"",...ar},children:[!U&&L&&(0,i.jsx)("div",{"arc-modal-dismiss":"",children:(0,i.jsx)(Sl,{...o,isInverse:f,onClick:oe("button:dismiss",nr,o)})}),(0,i.jsxs)(ei,{ref:W,inert:d?"":void 0,children:[U&&(0,i.jsxs)(Yh,{...Rr,showDivider:ir,children:[F&&(0,i.jsx)("div",{"header-slot":"go-back",children:(0,i.jsx)(W$,{...Z,isInverse:f,onClick:oe("button:back",or,Z)})}),tr&&(0,i.jsx)("div",{"header-slot":"start",children:tr}),(0,i.jsx)("div",{"header-slot":"content",children:(0,i.jsx)(Al,{TitleElement:lr,titleContent:yr})}),H&&(0,i.jsx)("div",{"header-slot":"end",children:H}),L&&(0,i.jsx)("div",{"header-slot":"dismiss",children:(0,i.jsx)(Sl,{...o,isInverse:f,onClick:oe("button:dismiss",nr,o)})})]}),(0,i.jsx)(zl,{...t,children:r}),S&&(0,i.jsxs)(El,{...xr,showDivider:gr,children:[sr&&(0,i.jsx)("div",{"footer-slot":"content",children:sr}),er&&(0,i.jsxs)(to,{children:[hr&&(0,i.jsx)(jr,{...hr,text:hr?.text||"Button",isInverse:f,variant:"common",hierarchy:"tertiary",onClick:oe("button:tertiary",Mr,hr)}),ur&&(0,i.jsx)(jr,{...ur,text:ur?.text||"Cancel",isInverse:f,variant:"common",hierarchy:"secondary",onClick:oe("button:secondary",wr,ur)}),br&&(0,i.jsx)(jr,{...br,text:br?.text||"Action",isInverse:f,variant:"common",hierarchy:"primary",onClick:oe("button:primary",cr,br)})]})]})]}),w&&(0,i.jsx)(Jh,{isOpen:d,isInverse:f,isTopLayer:g,backdropColor:y,...e,onConfirmDiscard:Ae,onConfirmCancel:De})]})};Cr("ArcModal",_l);const Za={variant:"common",backdropColor:"auto",showDismiss:!0,closeOnBackdrop:!1,closeOnEsc:!0,onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},n1={common:"fa-solid fa-cat-space",brand:"fa-kit fa-articulate",success:"fa-solid fa-badge-check",warning:"fa-solid fa-triangle-exclamation",error:"fa-solid fa-do-not-enter",info:"fa-solid fa-circle-info",processing:(0,i.jsx)(Xi,{"arc-modal-spinner":""})},c1=({children:r,dismissProps:e,bodyProps:a,footerProps:t,...o})=>{const n=(0,s.useRef)(null),{isOpen:c,autoFocusId:l,isTopLayer:d=Za.isTopLayer,isInverse:h=Za.isInverse,scheme:p=Za.scheme,backdropColor:v=Za.backdropColor,closeOnBackdrop:g=Za.closeOnBackdrop,closeOnEsc:f=Za.closeOnEsc,variant:m=Za.variant,icon:y,TitleElement:w,titleContent:x,message:C,showDismiss:z,onCloseOverride:k=Za.onCloseOverride,onClose:T,onToggle:P,contentRef:L,...V}=o,{primaryButton:I,...D}=t??{},X=y||n1[m],E=f?"closerequest":"none",ar=p==="auto"?void 0:p,W=yn({modalRef:n,onCloseOverride:k});return kl({modalRef:n,onClose:T,onToggle:P}),wl({modalRef:n,isOpen:c,isTopLayer:d}),Cl({modalRef:n,isOpen:c,autoFocusId:l}),Xh({modalRef:n,isOpen:c,closeOnBackdrop:g,attemptCloseModal:W}),qh({modalRef:n,isOpen:c,closeOnEsc:f,closedBy:E,attemptCloseModal:W}),(0,i.jsxs)("dialog",{...V,ref:n,"arc-modal":"","arc-scheme":h?"inverse":ar,"is-alert":m||"","is-inverse":h?"":void 0,"is-top-layer":d?"":void 0,"is-backdrop":v==="auto"?void 0:v,"data-size":"sm",closedby:E,children:[z&&(0,i.jsx)("div",{"arc-modal-dismiss":"",children:(0,i.jsx)(Sl,{...e,isInverse:h,onClick:W("button:dismiss",e?.onClick)})}),(0,i.jsxs)(ei,{ref:L,children:[(0,i.jsx)(zl,{...a,children:r||(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(X$,{glyph:X,variant:m}),(0,i.jsx)(Al,{TitleElement:w,titleContent:x}),(0,i.jsx)(q$,{message:C})]})}),(0,i.jsx)(El,{...D,children:(0,i.jsx)(to,{orientation:"vertical",children:(0,i.jsx)(jr,{...I,text:I?.text||"Close",variant:"common",hierarchy:"primary",isInverse:h,onClick:W("button:primary",I?.onClick)})})})]})]})};Cr("ArcModalAlert",_l);var Qh=ga(68563),ge,Jr,Aa,Ja;function i1(r=!1){if(typeof r!="boolean")throw new Error("defaultValue must be `true` or `false`");const[e,a]=ge(r),t=Jr(()=>{a(!0)},[]),o=Jr(()=>{a(!1)},[]),n=Jr(()=>{a(c=>!c)},[]);return{value:e,setValue:a,setTrue:t,setFalse:o,toggle:n}}var za=typeof window<"u"?s.useLayoutEffect:s.useEffect;function ha(r,e,a,t){const o=(0,s.useRef)(e);za(()=>{o.current=e},[e]),(0,s.useEffect)(()=>{const n=a?.current??window;if(!(n&&n.addEventListener))return;const c=l=>{o.current(l)};return n.addEventListener(r,c,t),()=>{n.removeEventListener(r,c,t)}},[r,a,t])}function Sy(r){ha("click",e=>{r(e)})}function Ay(){const[r,e]=ge(null),a=Jr(async t=>{if(!navigator?.clipboard)return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(t),e(t),!0}catch(o){return console.warn("Copy failed",o),e(null),!1}},[]);return[r,a]}function s1(r){const[e,a]=ge(r??0),t=Jr(()=>{a(c=>c+1)},[]),o=Jr(()=>{a(c=>c-1)},[]),n=Jr(()=>{a(r??0)},[r]);return{count:e,increment:t,decrement:o,reset:n,setCount:a}}function l1(r,e){const a=Aa(r);za(()=>{a.current=r},[r]),Ja(()=>{if(e===null)return;const t=setInterval(()=>{a.current()},e);return()=>{clearInterval(t)}},[e])}function zy({countStart:r,countStop:e=0,intervalMs:a=1e3,isIncrement:t=!1}){const{count:o,increment:n,decrement:c,reset:l}=s1(r),{value:d,setTrue:h,setFalse:p}=i1(!1),v=Jr(()=>{p(),l()},[p,l]),g=Jr(()=>{if(o===e){p();return}t?n():c()},[o,e,c,n,t,p]);return l1(g,d?a:null),[o,{startCountdown:h,stopCountdown:p,resetCountdown:v}]}function oi(r){const e=(0,s.useRef)(()=>{throw new Error("Cannot call an event handler while rendering.")});return za(()=>{e.current=r},[r]),(0,s.useCallback)((...a)=>{var t;return(t=e.current)==null?void 0:t.call(e,...a)},[e])}var Pl=typeof window>"u";function Tl(r,e,a={}){const{initializeWithValue:t=!0}=a,o=(0,s.useCallback)(g=>a.serializer?a.serializer(g):JSON.stringify(g),[a]),n=(0,s.useCallback)(g=>{if(a.deserializer)return a.deserializer(g);if(g==="undefined")return;const f=e instanceof Function?e():e;let m;try{m=JSON.parse(g)}catch(y){return console.error("Error parsing JSON:",y),f}return m},[a,e]),c=(0,s.useCallback)(()=>{const g=e instanceof Function?e():e;if(Pl)return g;try{const f=window.localStorage.getItem(r);return f?n(f):g}catch(f){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,f),g}},[e,r,n]),[l,d]=(0,s.useState)(()=>t?c():e instanceof Function?e():e),h=oi(g=>{Pl&&console.warn(`Tried setting localStorage key \u201C${r}\u201D even though environment is not a client`);try{const f=g instanceof Function?g(c()):g;window.localStorage.setItem(r,o(f)),d(f),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))}catch(f){console.warn(`Error setting localStorage key \u201C${r}\u201D:`,f)}}),p=oi(()=>{Pl&&console.warn(`Tried removing localStorage key \u201C${r}\u201D even though environment is not a client`);const g=e instanceof Function?e():e;window.localStorage.removeItem(r),d(g),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))});(0,s.useEffect)(()=>{d(c())},[r]);const v=(0,s.useCallback)(g=>{g.key&&g.key!==r||d(c())},[r,c]);return ha("storage",v),ha("local-storage",v),[l,h,p]}var d1=null;function r0(r,{defaultValue:e=!1,initializeWithValue:a=!0}={}){const t=l=>d1?e:window.matchMedia(l).matches,[o,n]=ge(()=>a?t(r):e);function c(){n(t(r))}return za(()=>{const l=window.matchMedia(r);return c(),l.addListener?l.addListener(c):l.addEventListener("change",c),()=>{l.removeListener?l.removeListener(c):l.removeEventListener("change",c)}},[r]),o}var u1="(prefers-color-scheme: dark)",h1="usehooks-ts-dark-mode";function Ey(r={}){const{defaultValue:e,localStorageKey:a=h1,initializeWithValue:t=!0}=r,o=r0(u1,{initializeWithValue:t,defaultValue:e}),[n,c]=Tl(a,e??o??!1,{initializeWithValue:t});return za(()=>{o!==n&&c(o)},[o]),{isDarkMode:n,toggle:()=>{c(l=>!l)},enable:()=>{c(!0)},disable:()=>{c(!1)},set:l=>{c(l)}}}function e0(r){const e=(0,s.useRef)(r);e.current=r,(0,s.useEffect)(()=>()=>{e.current()},[])}function ni(r,e=500,a){const t=(0,s.useRef)();e0(()=>{t.current&&t.current.cancel()});const o=(0,s.useMemo)(()=>{const n=Qh(r,e,a),c=(...l)=>n(...l);return c.cancel=()=>{n.cancel()},c.isPending=()=>!!t.current,c.flush=()=>n.flush(),c},[r,e,a]);return(0,s.useEffect)(()=>{t.current=Qh(r,e,a)},[r,e,a]),o}function _y(r,e,a){const t=a?.equalityFn??((h,p)=>h===p),o=r instanceof Function?r():r,[n,c]=ge(o),l=Aa(o),d=ni(c,e,a);return t(l.current,o)||(d(o),l.current=o),[n,d]}function Py(r,e={}){const{preserveTitleOnUnmount:a=!0}=e,t=Aa(null);za(()=>{t.current=window.document.title},[]),za(()=>{window.document.title=r},[r]),e0(()=>{!a&&t.current&&(window.document.title=t.current)})}function Ty(r){const[e,a]=ge(!1),t=()=>{a(!0)},o=()=>{a(!1)};return ha("mouseenter",t,r),ha("mouseleave",o,r),e}function Iy({threshold:r=0,root:e=null,rootMargin:a="0%",freezeOnceVisible:t=!1,initialIsIntersecting:o=!1,onChange:n}={}){var c;const[l,d]=ge(null),[h,p]=ge(()=>({isIntersecting:o,entry:void 0})),v=Aa();v.current=n;const g=((c=h.entry)==null?void 0:c.isIntersecting)&&t;Ja(()=>{if(!l||!("IntersectionObserver"in window)||g)return;let y;const w=new IntersectionObserver(x=>{const C=Array.isArray(w.thresholds)?w.thresholds:[w.thresholds];x.forEach(z=>{const k=z.isIntersecting&&C.some(T=>z.intersectionRatio>=T);p({isIntersecting:k,entry:z}),v.current&&v.current(k,z),k&&t&&y&&(y(),y=void 0)})},{threshold:r,root:e,rootMargin:a});return w.observe(l),()=>{w.disconnect()}},[l,JSON.stringify(r),e,a,g,t]);const f=Aa(null);Ja(()=>{var y;!l&&((y=h.entry)!=null&&y.target)&&!t&&!g&&f.current!==h.entry.target&&(f.current=h.entry.target,p({isIntersecting:o,entry:void 0}))},[l,h.entry,t,g,o]);const m=[d,!!h.isIntersecting,h.entry];return m.ref=m[0],m.isIntersecting=m[1],m.entry=m[2],m}function Ry(){const[r,e]=ge(!1);return Ja(()=>{e(!0)},[]),r}function p1(){const r=Aa(!1);return Ja(()=>(r.current=!0,()=>{r.current=!1}),[]),Jr(()=>r.current,[])}function My(r=new Map){const[e,a]=ge(new Map(r)),t={set:Jr((o,n)=>{a(c=>{const l=new Map(c);return l.set(o,n),l})},[]),setAll:Jr(o=>{a(()=>new Map(o))},[]),remove:Jr(o=>{a(n=>{const c=new Map(n);return c.delete(o),c})},[]),reset:Jr(()=>{a(()=>new Map)},[])};return[e,t]}function Ly(r,e,a="mousedown",t={}){ha(a,o=>{const n=o.target;if(!n||!n.isConnected)return;(Array.isArray(r)?r.filter(l=>!!l.current).every(l=>l.current&&!l.current.contains(n)):r.current&&!r.current.contains(n))&&e(o)},void 0,t)}var a0=null;function jy(r,e={}){let{initializeWithValue:a=!0}=e;a0&&(a=!1);const t=Jr(d=>{if(e.deserializer)return e.deserializer(d);if(d==="undefined")return;let h;try{h=JSON.parse(d)}catch(p){return console.error("Error parsing JSON:",p),null}return h},[e]),o=Jr(()=>{if(a0)return null;try{const d=window.localStorage.getItem(r);return d?t(d):null}catch(d){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,d),null}},[r,t]),[n,c]=ge(()=>{if(a)return o()});Ja(()=>{c(o())},[r]);const l=Jr(d=>{d.key&&d.key!==r||c(o())},[r,o]);return ha("storage",l),ha("local-storage",l),n}var t0=null;function Dy(r){const{ref:e,box:a="content-box"}=r,[{width:t,height:o},n]=ge(t0),c=p1(),l=Aa({...t0}),d=Aa(void 0);return d.current=r.onResize,Ja(()=>{if(!e.current||typeof window>"u"||!("ResizeObserver"in window))return;const h=new ResizeObserver(([p])=>{const v=a==="border-box"?"borderBoxSize":a==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",g=o0(p,v,"inlineSize"),f=o0(p,v,"blockSize");if(l.current.width!==g||l.current.height!==f){const y={width:g,height:f};l.current.width=g,l.current.height=f,d.current?d.current(y):c()&&n(y)}});return h.observe(e.current,{box:a}),()=>{h.disconnect()}},[a,e,c]),{width:t,height:o}}function o0(r,e,a){return r[e]?Array.isArray(r[e])?r[e][0][a]:r[e][a]:e==="contentBoxSize"?r.contentRect[a==="inlineSize"?"width":"height"]:void 0}var n0=null;function By(r={}){let{initializeWithValue:e=!0}=r;n0&&(e=!1);const a=()=>{if(!n0)return window.screen},[t,o]=ge(()=>{if(e)return a()}),n=ni(o,r.debounceDelay);function c(){const l=a(),d=r.debounceDelay?n:o;if(l){const{width:h,height:p,availHeight:v,availWidth:g,colorDepth:f,orientation:m,pixelDepth:y}=l;d({width:h,height:p,availHeight:v,availWidth:g,colorDepth:f,orientation:m,pixelDepth:y})}}return ha("resize",c),za(()=>{c()},[]),t}var ci=null;function g1(r){const e=document.querySelector(`script[src="${r}"]`),a=e?.getAttribute("data-status");return{node:e,status:a}}function Oy(r,e){const[a,t]=ge(()=>!r||e?.shouldPreventLoad?"idle":typeof window>"u"?"loading":ci.get(r)??"loading");return Ja(()=>{if(!r||e?.shouldPreventLoad)return;const o=ci.get(r);if(o==="ready"||o==="error"){t(o);return}const n=g1(r);let c=n.node;if(c)t(n.status??o??"loading");else{c=document.createElement("script"),c.src=r,c.async=!0,e?.id&&(c.id=e.id),c.setAttribute("data-status","loading"),document.body.appendChild(c);const d=h=>{const p=h.type==="load"?"ready":"error";c?.setAttribute("data-status",p)};c.addEventListener("load",d),c.addEventListener("error",d)}const l=d=>{const h=d.type==="load"?"ready":"error";t(h),ci.set(r,h)};return c.addEventListener("load",l),c.addEventListener("error",l),()=>{c&&(c.removeEventListener("load",l),c.removeEventListener("error",l)),c&&e?.removeOnUnmount&&(c.remove(),ci.delete(r))}},[r,e?.shouldPreventLoad,e?.removeOnUnmount,e?.id]),a}var v1=null;function Ny(r={}){const{autoLock:e=!0,lockTarget:a,widthReflow:t=!0}=r,[o,n]=ge(!1),c=Aa(null),l=Aa(null),d=()=>{if(c.current){const{overflow:p,paddingRight:v}=c.current.style;if(l.current={overflow:p,paddingRight:v},t){const g=c.current===document.body?window.innerWidth:c.current.offsetWidth,f=parseInt(window.getComputedStyle(c.current).paddingRight,10)||0,m=g-c.current.scrollWidth;c.current.style.paddingRight=`${m+f}px`}c.current.style.overflow="hidden",n(!0)}},h=()=>{c.current&&l.current&&(c.current.style.overflow=l.current.overflow,t&&(c.current.style.paddingRight=l.current.paddingRight)),n(!1)};return za(()=>{if(!v1)return a&&(c.current=typeof a=="string"?document.querySelector(a):a),c.current||(c.current=document.body),e&&d(),()=>{h()}},[e,a,t]),{isLocked:o,lock:d,unlock:h}}var Il=typeof window>"u";function f1(r,e,a={}){const{initializeWithValue:t=!0}=a,o=(0,s.useCallback)(g=>a.serializer?a.serializer(g):JSON.stringify(g),[a]),n=(0,s.useCallback)(g=>{if(a.deserializer)return a.deserializer(g);if(g==="undefined")return;const f=e instanceof Function?e():e;let m;try{m=JSON.parse(g)}catch(y){return console.error("Error parsing JSON:",y),f}return m},[a,e]),c=(0,s.useCallback)(()=>{const g=e instanceof Function?e():e;if(Il)return g;try{const f=window.sessionStorage.getItem(r);return f?n(f):g}catch(f){return console.warn(`Error reading sessionStorage key \u201C${r}\u201D:`,f),g}},[e,r,n]),[l,d]=(0,s.useState)(()=>t?c():e instanceof Function?e():e),h=oi(g=>{Il&&console.warn(`Tried setting sessionStorage key \u201C${r}\u201D even though environment is not a client`);try{const f=g instanceof Function?g(c()):g;window.sessionStorage.setItem(r,o(f)),d(f),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))}catch(f){console.warn(`Error setting sessionStorage key \u201C${r}\u201D:`,f)}}),p=oi(()=>{Il&&console.warn(`Tried removing sessionStorage key \u201C${r}\u201D even though environment is not a client`);const g=e instanceof Function?e():e;window.sessionStorage.removeItem(r),d(g),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))});(0,s.useEffect)(()=>{d(c())},[r]);const v=(0,s.useCallback)(g=>{g.key&&g.key!==r||d(c())},[r,c]);return ha("storage",v),ha("session-storage",v),[l,h,p]}function Fy(r){const[e,a]=ge(1),t=e+1<=r,o=e-1>0,n=Jr(h=>{const p=h instanceof Function?h(e):h;if(p>=1&&p<=r){a(p);return}throw new Error("Step not valid")},[r,e]),c=Jr(()=>{t&&a(h=>h+1)},[t]),l=Jr(()=>{o&&a(h=>h-1)},[o]),d=Jr(()=>{a(1)},[]);return[e,{goToNextStep:c,goToPrevStep:l,canGoToNextStep:t,canGoToPrevStep:o,setStep:n,reset:d}]}var m1="(prefers-color-scheme: dark)",b1="usehooks-ts-ternary-dark-mode";function Hy({defaultValue:r="system",localStorageKey:e=b1,initializeWithValue:a=!0}={}){const t=r0(m1,{initializeWithValue:a}),[o,n]=Tl(e,r,{initializeWithValue:a});return{isDarkMode:o==="dark"||o==="system"&&t,ternaryDarkMode:o,setTernaryDarkMode:n,toggleTernaryDarkMode:()=>{const d=["light","system","dark"];n(h=>{const p=(d.indexOf(h)+1)%d.length;return d[p]})}}}function Vy(r,e){const a=Aa(r);za(()=>{a.current=r},[r]),Ja(()=>{if(!e&&e!==0)return;const t=setTimeout(()=>{a.current()},e);return()=>{clearTimeout(t)}},[e])}function Gy(r){const[e,a]=ge(!!r),t=Jr(()=>{a(o=>!o)},[]);return[e,t,a]}var $1=null;function Uy(r={}){let{initializeWithValue:e=!0}=r;$1&&(e=!1);const[a,t]=ge(()=>e?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),o=ni(t,r.debounceDelay);function n(){(r.debounceDelay?o:t)({width:window.innerWidth,height:window.innerHeight})}return ha("resize",n),za(()=>{n()},[]),a}const y1=(r,e)=>{const a=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set;a?a.call(r,e):r.value=e,r.dispatchEvent(new Event("input",{bubbles:!0}))},x1=({defaultValue:r="",value:e,debounceMs:a,inputElementRef:t,onClear:o,onKeyDown:n,onSearch:c})=>{const l=e!==void 0,d=c!==void 0&&a!==void 0,[h,p]=(0,s.useState)(r),v=l?e??"":h,g=(0,s.useRef)(!1),f=ni(C=>{c?.(C)},a??0),m=(0,s.useCallback)(()=>{f.cancel()},[f]),y=(0,s.useCallback)(C=>{l||p(C)},[l]);(0,s.useEffect)(()=>m,[m]),(0,s.useEffect)(()=>{if(d){if(!g.current){g.current=!0;return}m(),f(v)}},[m,f,v,d]);const w=(0,s.useCallback)(()=>{m();const C=t.current;if(C){y1(C,""),o?.(),C.focus();return}l||p(""),o?.()},[m,t,l,o]),x=(0,s.useCallback)(C=>{n?.(C),!(C.defaultPrevented||C.key!=="Enter"||!c)&&(m(),c(v))},[m,n,c,v]);return{resolvedValue:v,handleValueChange:y,handleClear:w,handleKeyDown:x}},k1=qc,w1=Yc,C1=fr(sl,["outline","solid"]),c0="Search",S1="Clear search",Rl={layout:"hug",size:"inherit",variant:"outline"},A1=({canClear:r,isDisabled:e,onClear:a})=>{if(r)return(0,i.jsx)(Uh,{"aria-label":S1,disabled:e,icon:"fa-regular fa-xmark",onClick:a})},z1=({ariaLabel:r,ariaLabelledBy:e,headerLabel:a})=>r??(!a&&!e?c0:void 0),i0=(0,s.forwardRef)(({debounceMs:r,inputProps:e,layout:a=Rl.layout,onClear:t,onSearch:o,size:n=Rl.size,variant:c=Rl.variant,headerLabel:l,headerSlot:d,footerCaption:h,footerSlot:p,onChange:v,...g},f)=>{const{id:m,value:y,defaultValue:w="",onChange:x,onKeyDown:C,placeholder:z=c0,disabled:k,readOnly:T,required:P,"aria-label":L,"aria-labelledby":V,...I}=e,D=Br(m,"arc-search"),X=(0,s.useRef)(null),{resolvedValue:E,handleValueChange:ar,handleClear:W,handleKeyDown:rr}=x1({defaultValue:w,value:y,debounceMs:r,inputElementRef:X,onClear:t,onKeyDown:C,onSearch:o}),F=!k&&!T&&E.length>0,Z=z1({ariaLabel:L,ariaLabelledBy:V,headerLabel:l}),tr=A1({canClear:F,isDisabled:k,onClear:W}),lr=H=>{X.current=H,ta(f,H)},yr=(H,ir)=>{ar(ir.target.value),x?.(H,ir)};return(0,i.jsx)(io,{...g,"arc-search":"",layout:a,size:n,variant:c,ref:lr,onChange:v,headerLabel:l,headerSlot:d,inputPrefix:(0,i.jsx)(Sr,{icon:"fa-regular fa-search"}),inputAction:tr,footerCaption:h,footerSlot:p,inputProps:{...I,id:D,value:E,disabled:k,placeholder:z,readOnly:T,required:P,onChange:yr,onKeyDown:rr,"aria-disabled":k||void 0,"aria-label":Z,"aria-labelledby":V,"aria-readonly":T||void 0,"aria-required":P||void 0}})});i0.displayName="ArcSearch";const E1=qc,_1=Yc,P1=fr(Wr,["outline","solid","plain"]),s0=()=>typeof globalThis?.CSS?.supports=="function"&&globalThis.CSS.supports("appearance","base-select"),ii=r=>Array.isArray(r.options),po=r=>{const e=r?.variant;return e!=="divider"&&e!=="section-label"},l0=r=>r?.variant==="section-label"&&!!(r.text||r.icon),d0=r=>{},u0=(r=[])=>r.flatMap(e=>ii(e)?e.options:[e]).some(e=>po(e)&&e.value===""),h0=r=>{const e=o=>typeof o=="string"&&o.trim().length>0,a=o=>{if(typeof o!="object"||o===null)return;const{name:n}=o;return e(n)?n:void 0};return[r?.text,a(r?.avatar),r?.["aria-label"]].find(e)??"Anonymous"},wn=u`--arc•select`,We=u`${wn}•picker`,p0=u`${We}•fg`,g0=u`${We}•bg`,Ml=u`${wn}•option`,Cn=u`${Ml}•fg`,Sn=u`${Ml}•bg`,_t=u`${Ml}•icon`,T1=u`
  ${p0}: currentcolor;
  ${g0}: var(--arc-color-bg-mono);
  ${wn}•placeholder•fg: var(--arc-select-placeholder-color, var(--arc-color-fg-secondary));

  ${We}•width: auto;
  ${We}•min•width: 3em;
  ${We}•border•radius: var(--arc-border-radius-lg);
  ${We}•shadow: var(--arc-shadow-lg);

  ${Cn}: currentcolor;
  ${Sn}: transparent;

  ${_t}•display: none;
  ${_t}•color: var(${Cn});
`,I1=u`
  &[data-layout=fill] {
    ${We}•width: 100%; /* fallback */
    ${We}•width: anchor-size(inline);
  }
`,R1=u`
  [arc-select] ::picker(select) {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-select-transition-duration, 240ms);
    transition-property: display, opacity;
    transition-timing-function: ease-out;
  }

  @supports (overlay: auto) {
    [arc-select] ::picker(select) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }
  }
`,M1=u`
  [arc-select] {
    ::picker(select) {
      opacity: 0;
    }

    ::picker(select):popover-open {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-select] ::picker(select):popover-open {
      opacity: 0;
    }
  }
`,L1=u`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-select] {
    ${T1}
    ${I1}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-select] {
    select,
    ::picker(select) {
      appearance: base-select;
    }

    ::picker(select) {
      flex: 1;
      display: var(${We}•display, none);
      flex-direction: column;
      gap: var(${M}•4);
      border: none;
      color: var(${p0});
      width: var(--arc-select-picker-width, var(${We}•width));
      min-width: var(--arc-select-picker-min-width, var(${We}•min•width));
      margin: var(--arc-select-picker-margin, var(${M}•4) 0);
      padding: var(--arc-select-picker-padding, var(${M}•4));
      background: var(--arc-select-picker-background, var(${g0}));
      border-radius: var(--arc-select-picker-border-radius, var(${We}•border•radius));
      box-shadow: var(--arc-select-picker-shadow, var(${We}•shadow));
    }

    ::picker(select):popover-open {
      ${We}•display: flex;
    }

    /* Hide default picker icon */
    ::picker-icon {
      display: none;
    }

    select {
      cursor: inherit;
      flex: 1;
      align-items: center;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      outline: none;
      padding-inline: var(${b}•12);
      max-width: var(--arc-select-max-width, var(--js•max•width, none));
    }

    [arc-select-button] {
      display: flex;
      align-items: center;
      gap: var(${M}•8);
      width: 100%;
    }

    [arc-select-placeholder] {
      flex: 1;
      color: var(${wn}•placeholder•fg);
    }

    selectedcontent {
      /* Inter-Component Communication -----------------------------• */
      --arc-icon-text-font-weight: normal;
      --arc-icon-text-subtext-display: none;
      --arc-avatar-text-font-weight: normal;
      --arc-avatar-subtext-display: none;
      --arc-avatar-size: var(${b}•24);
      --arc-avatar-initial-font-size: var(${b}•12);

      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      min-width: 0;

      [arc-select-icon=selected] {
        display: none;
      }
    }

    /* Hide the cloned <selectedcontent> when the placeholder span drives the trigger. */
    select[data-placeholder] selectedcontent {
      display: none;
    }

    [arc-select-option-group-legend] {
      font-size: var(${b}•12);
      font-weight: var(--arc-font-weight-600);
      color: var(--arc-select-legend-color, var(--arc-color-fg-secondary));
      padding: var(--arc-select-legend-padding, var(${M}•8));
      cursor: default;
    }

    /* Separator above each legend after the first optgroup. */
    optgroup ~ optgroup [arc-select-option-group-legend] {
      border-top: var(${b}•1) solid var(--arc-color-border-mid);
      margin-top: var(${M}•4);
    }

    [arc-select-option] {
      flex: none;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: var(${M}•8);
      width: 100%;
      min-width: 0;
      color: var(${Cn});
      background: var(--arc-select-option-background, var(${Sn}));
      border-radius: var(--arc-select-option-border-radius, var(--arc-border-radius-md));
      padding: var(--arc-select-option-padding, var(${M}•8));

      &::checkmark {
        display: none;
      }

      &:disabled {
        ${Cn}: var(--arc-color-fg-disabled);
        ${Sn}: transparent;
        ${_t}•display: none;
        cursor: var(--arc-select-disabled-cursor, not-allowed);
      }

      &:not(:disabled):hover {
        ${Sn}: var(--arc-color-bg-hover-default);
      }

      &:not(:disabled):checked {
        ${Sn}: var(--arc-color-bg-selected-default);
        ${_t}•display: flex;
        ${_t}•color: var(--arc-select-option-selected-icon-color, var(${Cn}));
      }

      [arc-select-icon=selected] {
        display: var(${_t}•display, none);
        color: var(${_t}•color, currentcolor);
      }
    }

    @supports not (appearance: base-select) {
      select {
        appearance: none;
        background: transparent;
        outline: none;

        /* caret */
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 11'><polyline points='1 1 10 10 19 1' fill='none' stroke='%23000000' stroke-width='2.5' stroke-linecap='round' /></svg>");
        background-repeat: no-repeat;
        background-size: 0.75em;
        background-origin: padding-box;
        background-position: calc(100% - 1em) center;
        padding-inline-end: 3em;
      }

      select[data-placeholder] {
        color: var(${wn}•placeholder•fg);
      }
    }
  }

  ${R1}
  ${M1}

}
`,j1=(0,s.forwardRef)(({layout:r="hug",size:e="inherit",variant:a="outline",tag:t="span",items:o,placeholder:n,renderItem:c,headerLabel:l,headerSlot:d,footerCaption:h,footerSlot:p,id:v,value:g,defaultValue:f,required:m,disabled:y,readOnly:w,maxWidth:x,inputProps:C,...z},k)=>{const{name:T,onBlur:P,onChange:L,onFocus:V,onInput:I,"aria-describedby":D,"aria-label":X,"aria-labelledby":E,...ar}=z,W=Br(v,"arc-select"),rr=a==="plain"&&r==="fill"?"hug":r,F=y||void 0,Z=w||void 0,tr=m||void 0,lr=s0(),yr=a!=="plain"&&!!(l||d),H=a!=="plain"&&!!(h||p),ir=typeof n=="string"&&n.length>0&&!u0(o),Rr=f??(ir?"":void 0),sr=g??Rr,br=ir&&sr==="",ur=lr&&ir&&sr==="",hr=Z&&sr!=null?String(sr):void 0,gr=o.flatMap($=>ii($)?$.options.filter(po):po($)?[$]:(d0($),[])),xr=new Map(gr.map(($,O)=>[$,O])),U=$=>{const{itemId:O,...K}=$,_=Oh(vn($));return(0,i.jsx)(_,{...K})},er=$=>{const O=xr.get($)??0,K=$["aria-disabled"]===!0||$.disabled===!0,_=typeof $.itemId=="string"&&$.itemId.length>0?$.itemId:O,N=String($?.value??$?.itemId??O);return(0,i.jsx)("option",{value:N,disabled:K||hr!==void 0&&N!==hr||void 0,"arc-select-option":"",children:lr?(0,i.jsxs)(i.Fragment,{children:[c?c($,O):U($),(0,i.jsx)("span",{"arc-select-icon":"selected","aria-hidden":!0,children:(0,i.jsx)(Sr,{icon:"fa-regular fa-check arc-fw"})})]}):h0($)},_)},S=($,O)=>{const K=$.options.filter(po);if(K.length===0)return null;const _=$.options.find(l0);return(0,i.jsxs)("optgroup",{label:$.label,disabled:$.disabled||void 0,children:[lr&&_&&(0,i.jsx)("legend",{"arc-select-option-group-legend":"",children:U(_)}),K.map(er)]},$.itemId??`${$.label}-${O}`)};return(0,i.jsxs)(t,{...ar,"arc-select":"","arc-input":"select","data-layout":rr,"data-size":e,"data-variant":a,children:[yr&&(0,i.jsxs)(zr.Header,{children:[(0,i.jsx)(zr.HeaderLabel,{htmlFor:W,children:l}),!!d&&(0,i.jsx)(zr.Spacer,{}),(0,i.jsx)(zr.HeaderSlot,{children:d})]}),(0,i.jsx)(zr.InputBody,{children:(0,i.jsxs)("select",{...C,name:C?.name??T,onBlur:C?.onBlur??P,onChange:C?.onChange??L,onFocus:C?.onFocus??V,onInput:C?.onInput??I,"aria-describedby":C?.["aria-describedby"]??D,"aria-label":C?.["aria-label"]??X,"aria-labelledby":C?.["aria-labelledby"]??E,value:g,defaultValue:g==null?Rr:void 0,required:m,disabled:y,ref:k,id:W,"aria-disabled":F,"aria-required":tr,"data-readonly":Z,"data-placeholder":br||void 0,style:{...x?{"--js\u2022max\u2022width":x}:{},...C?.style},children:[(0,i.jsxs)("button",{"arc-select-button":"",children:[ur&&(0,i.jsx)(le,{"arc-select-placeholder":"",text:n,overflow:"truncate"}),(0,i.jsx)("selectedcontent",{}),(0,i.jsx)("span",{"aria-hidden":!0,children:(0,i.jsx)(Sr,{icon:"fa-regular fa-angle-down arc-fw"})})]}),ir&&(0,i.jsx)("option",{value:"",disabled:!0,hidden:!0,children:n}),o.map(($,O)=>ii($)?S($,O):po($)?er($):null)]})}),H&&(0,i.jsxs)(zr.Footer,{children:[(0,i.jsx)(zr.FooterCaption,{children:h}),!!p&&(0,i.jsx)(zr.Spacer,{}),(0,i.jsx)(zr.FooterSlot,{children:p})]})]})});Cr("ArcSelect",L1);const D1=fr(xe,["inherit","md","sm"]),ve={On:"on",Off:"off"},go={Before:"before",After:"after"},B1=({disabled:r,id:e,name:a,size:t="md",value:o,labelOff:n,labelOn:c,onChange:l,...d})=>{const h=Br(a,"arc-switch-name"),p=Br(e?`${e}-off`:void 0,"arc-switch-off"),v=Br(e?`${e}-on`:void 0,"arc-switch-on"),g=C=>{if(C.code==="Space"){C.preventDefault(),C.stopPropagation();const z=o===ve.On?ve.Off:ve.On;l?.({value:z},C)}},f=C=>{const z={on:Eo(c),off:Eo(n)};return z?.on&&z?.off?z[C]:!z?.on&&z?.off?`${z?.off}: ${C}`:z?.on&&!z?.off?`${z?.on}: ${C}`:z[C]},m=(0,i.jsxs)(xc,{type:"switch",onKeyDown:g,children:[(0,i.jsx)(Xo,{type:"switch",name:h,id:p,value:ve.Off,checked:o===ve.Off,disabled:r,"aria-label":f(ve.Off)?.trim(),onChange:l}),(0,i.jsx)(Xo,{type:"switch",name:h,id:v,value:ve.On,checked:o===ve.On,disabled:r,"aria-label":f(ve.On)?.trim(),onChange:l}),(0,i.jsx)("span",{"data-element":"mask"})]}),y=!c&&o===ve.Off?v:p,w=!n&&o===ve.On?p:v,x=!!(c||n)&&(0,i.jsxs)(i.Fragment,{children:[!!n&&(0,i.jsx)(wt,{htmlFor:y,"arc-switch-label":c?ve.Off:"",children:(0,i.jsx)(Ct,{children:n})}),m,!!c&&(0,i.jsx)(wt,{htmlFor:w,"arc-switch-label":n?ve.On:"",children:(0,i.jsx)(Ct,{children:c})})]});return(0,i.jsx)("span",{...d,"arc-switch":"","data-state":o,"data-size":t,role:"radiogroup",children:x||m})},ce=u`--arc•switch`,Fr=u`${ce}•knob`,O1=u`
@layer arc-components {

  [arc-switch] {
    ${ce}•background: var(--arc-color-alpha-white-100);
    ${Fr}•shadow: var(--arc-shadow-md);

    &:has(:disabled) {
      ${ce}•background: var(--arc-color-alpha-white-70);
      ${Fr}•shadow: var(--arc-shadow-none);

      [arc-switch-label] {
        --arc-label-cursor: not-allowed;
        --arc-label-opacity: var(--arc-alpha-60);
      }
    }

    /* Uses Neutral-ish Colors */
    &[data-state=off] {
      ${G}•background: var(--arc-color-bg-neutral-subtle);
      ${G}•border•color: var(--arc-color-border-stark);
      ${Fr}•border•color: var(--arc-color-border-on-stark);
      ${Fr}•color: var(--arc-color-fg-on-heavy);

      &:not(:has(:disabled)):hover {
        ${G}•border•color: var(--arc-color-border-heavy);
        ${Fr}•border•color: var(--arc-color-border-heavy);
      }

      &:has(:disabled) {
        ${G}•background: var(--arc-color-bg-disabled);
        ${G}•border•color: var(--arc-color-border-disabled);
        ${Fr}•border•color: var(--arc-color-border-on-stark);
        ${Fr}•color: var(--arc-color-bg-tertiary);
      }
    }

    /* Uses Theme Colors */
    &[data-state=on] {
      ${G}•background: var(--arc-color-bg-theme-heavy);
      ${G}•border•color: var(--arc-color-border-theme-heavy);
      ${Fr}•border•color: var(--arc-color-border-theme-heavy);
      ${Fr}•color: var(--arc-color-fg-on-theme-heavy);

      &:not(:has(:disabled)):hover {
        ${G}•opacity: var(--arc-alpha-60);
      }

      &:has(:disabled) {
        ${G}•opacity: var(--arc-alpha-30);
      }
    }

    /* SIZES  ------------------------------------------------------• */
    &[data-size=inherit] {
      ${ce}•font•size: 1em;
      ${ce}•width: 2.5em;
      ${ce}•height: 1.5em;
      ${ce}•gap: 0.5em;
      ${Fr}•size: 1.5em;
      ${Fr}•x•shift: 0.25em;
    }

    &[data-size=md] { /* @default */
      ${ce}•font•size: var(${b}•14);
      ${ce}•width: var(${b}•40);
      ${ce}•height: var(${b}•24);
      ${ce}•gap: var(${b}•8);
      ${Fr}•x•shift: var(${b}•4);
      ${Fr}•size: var(${b}•24);
    }

    &[data-size=sm] {
      ${ce}•font•size: var(${b}•12);
      ${ce}•width: var(${b}•30);
      ${ce}•height: var(${b}•14);
      ${ce}•gap: var(${b}•8);
      ${Fr}•x•shift: var(${b}•1);
      ${Fr}•size: var(${b}•16);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${G}•border•radius: var(--arc-border-radius-pill);
    ${G}•width: var(${ce}•width);
    ${G}•height: var(${ce}•height);
    ${G}•x•shift: var(${Fr}•x•shift);
    ${G}•size: var(${Fr}•size);

    /* for: ArcLabel */
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                                    stay inline with the label text
                                                    regardless of applied line-height */

    /* KNOB PLACEMENT ----------------------------------------------• */
    &[data-state=off] {
      ${Fr}•translate: calc(-100% + var(${Fr}•x•shift)) -50%;
    }

    &[data-state=on] {
      ${Fr}•translate: calc(0% - var(${Fr}•x•shift)) -50%;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-switch]:not([hidden]) {
    font-size: var(--arc-switch-font-size, var(${ce}•font•size));
    display: var(--arc-switch-display, inline-flex);
    align-items:  var(--arc-switch-align-items, center);
    gap: var(--arc-switch-gap, var(${ce}•gap));
    user-select: none;

    [arc-switch-label] {
      font-size: inherit;
      hyphens: auto;
    }

    [arc-input-type=switch]:where(:not(:checked)) {
      ${G}•z•index: 1;
    }

    [arc-input-mask-wrapper] {
      height: 1.25em;
    }

    /* the knob */
    [data-element=mask] {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: var(${Fr}•translate);

      display: inline-flex;
      width: var(${Fr}•size);
      height: var(${Fr}•size);

      transition-duration: 100ms;
      transition-behavior: allow-discrete;
      transition-timing-function: ease-in-out;
      transition-property:
        opacity,
        background,
        color,
        border-color,
        outline,
        translate;

      background: var(${Fr}•color);
      box-shadow: var(${Fr}•shadow);
      border: var(${G}•border•width) solid var(${Fr}•border•color);
      border-radius: var(--arc-border-radius-circle);
      pointer-events: none;
    }
  }

}
`,N1=({disabled:r,id:e,name:a,size:t="md",value:o,label:n,labelPosition:c=go.After,onChange:l,labelOff:d,labelOn:h,...p})=>{const v=Br(a,"arc-switch-name"),g=Br(e,"arc-switch"),f=(w,x)=>{const C=w.checked?ve.On:ve.Off;l?.({...w,value:C},x)};!n&&(h||d)&&(n=h||d,c=h?go.After:go.Before);const m=(0,i.jsxs)(xc,{type:"checkbox",children:[(0,i.jsx)(Xo,{type:"checkbox",name:v,id:g,checked:o===ve.On,disabled:r,role:"switch","aria-checked":o===ve.On,"aria-label":n?void 0:"Toggle switch",tabIndex:0,onChange:f}),(0,i.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),y=(0,i.jsx)(wt,{htmlFor:g,"arc-switch-label":c,children:(0,i.jsx)(Ct,{children:n})});return d&&h?(0,i.jsx)(B1,{...p,disabled:r,id:e,name:a,labelOff:d,labelOn:h,size:t,value:o,onChange:l}):(0,i.jsxs)("span",{...p,"arc-switch":"","data-state":o,"data-size":t,"data-label-position":c,role:"presentation","aria-live":"off",children:[n&&c===go.Before&&y,m,n&&c===go.After&&y]})};Cr("ArcSwitch",O1);const F1=["title","heading","subheading","body"],v0=["h1","h2","h3","h4","h5","h6"],f0=["code","div","li","p","pre","span"],m0=[...v0,...f0],H1=[...Oa],V1=["title-inherit","title-lg","title-md","title-sm"],G1=["heading-inherit","heading-lg","heading-md","heading-sm"],U1=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],K1=fr(Wr,["inherit","primary","primary-inverse"]),W1=["body-inherit","body-lg","body-md","body-sm","body-xs"],X1=me(Wr,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),q1=fr(Ln,["inherit","start","center","justify","end"]),Y1=fr(jn,["inherit","loose","standard","tight"]),Z1={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},J1=r=>{const{align:e,lineHeight:a,size:t,variant:o,scheme:n="auto",isMonospace:c,tag:l,...d}=r,h=Z1?.[l]??"body",p=t?.includes("inherit")?t?.split("-")?.[0]:t,v=o?.endsWith("-inverse");let g;return n!=="auto"?g=n:v&&(g=void 0),{...d,"arc-text":p||h,"arc-scheme":g,"data-is-monospace":c?"":void 0,"data-align":e?.includes("inherit")?void 0:e,"data-variant":o?.includes("inherit")?void 0:o,"data-line-height":a?.includes("inherit")?void 0:a}},Qa=u`--arc•text`,Ll=u`${Qa}•font`,vo=u`${Qa}•align`,La=u`${Qa}fg`,b0=u`${Qa}•flex`,$0=u`${Qa}•hyphens`,An=u`${Qa}•letterspacing`,ja=u`${Qa}•lineheight`,y0=u`${Qa}•opacity`,x0=u`${Qa}•whitespace`,Pt=u`${Ll}•family`,te=u`${Ll}•size`,fo=u`${Ll}•weight`,Q1=u`
@layer arc-components {

[arc-text] {
  /* SETUP ---------------------------------------------------------• */
  ${vo}: unset;
  ${La}: unset;
  ${b0}: unset;
  ${$0}: auto;
  ${An}: unset;
  ${ja}: unset;
  ${y0}: unset;
  ${x0}: unset;

  ${Pt}: unset;
  ${te}: unset;
  ${fo}: unset;

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    ${ja}: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    ${ja}: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    ${ja}: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    ${vo}: start;
  }

  &[data-align=center] {
    ${vo}: center;
  }

  &[data-align=justify] {
    ${vo}: justify;
  }

  &[data-align=end] {
    ${vo}: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    ${La}: var(--arc-color-fg-primary);
  }

  /* @deprecated */
  &[data-variant=primary-inverse] {
    ${La}: var(--arc-color-fg-on-mono-inverse);
  }

  &[data-variant=secondary] {
    ${La}: var(--arc-color-fg-secondary);
  }

  /* @deprecated - 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  &[data-variant=secondary-inverse] {
    ${La}: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 61.2%, transparent);
  }

  &[data-variant=critical] {
    ${La}: var(--arc-color-fg-critical-mid);
  }

  &[data-variant=warning] {
    ${La}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=success] {
    ${La}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=info] {
    ${La}: var(--arc-color-fg-info-stark);
  }

}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  ${Pt}: var(--arc-font-family-title);
  ${fo}: var(--arc-font-weight-title);
  ${An}: var(--arc-letter-spacing-title);
  ${ja}: var(--arc-line-height-title);

  ${te}: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${te}: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    ${te}: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    ${te}: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  ${Pt}: var(--arc-font-family-heading);
  ${fo}: var(--arc-font-weight-heading);
  ${An}: var(--arc-letter-spacing-heading);
  ${ja}: var(--arc-line-height-heading);

  ${te}: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${te}: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    ${te}: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    ${te}: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  ${Pt}: var(--arc-font-family-subheading);
  ${fo}: var(--arc-font-weight-subheading);
  ${An}: unset;
  ${ja}: var(--arc-line-height-subheading);

  ${te}: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${te}: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    ${te}: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    ${te}: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  ${Pt}: var(--arc-font-family-body);
  ${fo}: var(--arc-font-weight-body);
  ${ja}: var(--arc-line-height-body);
  ${te}: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${te}: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    ${te}: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    ${te}: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    ${te}: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  ${te}: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  ${Pt}: var(--arc-font-family-mono);
  ${ja}: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, var(${b0}));
  hyphens: var(--arc-text-hyphens, var(${$0})); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, var(${y0}));
  text-align: var(--arc-text-align, var(${vo}));
  white-space: var(--arc-text-white-space, var(${x0}));

  color: var(--arc-text-color, var(${La}));

  font-size: var(--arc-text-font-size, var(${te}));
  font-family: var(--arc-text-font-family, var(${Pt}));
  font-weight: var(--arc-text-font-weight, var(${fo}));
  line-height: var(--arc-text-line-height, var(${ja}));
  letter-spacing: var(--arc-text-letter-spacing, var(${An}));

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,ry=r=>(0,s.forwardRef)((e,a)=>(0,s.createElement)(r,{...J1({...e,tag:r}),ref:a})),ey=[...m0].reduce((r,e)=>({...r,[e]:ry(e)}),{});Cr("Arc",Q1);const ay=fr(Wr,["common","ai","critical"]),k0=[...Oa],w0=["default","success","warning","error"],C0=fr(xe,["inherit","md"]),S0=fr(Wr,["common"]),A0=[...pt],ty=[...Rt],z0=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],oy=ay.filter(r=>r!=="critical"),E0={size:C0[1],variant:S0[0],scheme:k0[2],popover:A0[2],placement:z0[4],severity:w0[0],showDismiss:!0},_0=(r,e="toggle")=>{const a=document.getElementById(r);({toggle:()=>a?.togglePopover(),show:()=>a?.showPopover(),hide:()=>a?.hidePopover()})[e]()},P0=u`--arc•progress`,ny=u`${P0}•bar`,cy=u`${P0}•value`,T0=u`${ny}•bg`,zn=u`${cy}•bg`,iy=u`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${Xg}

  [arc-progress-bar] {
    ${T0}: var(--arc-color-alpha-subtle);
    ${zn}: var(--arc-color-bg-brand-stark);

    &[data-variant=ai] {
      ${zn}: var(--arc-progress-bar-gradient-ai-200);
    }

    &[data-variant=critical] {
      ${zn}: var(--arc-color-bg-critical-mid);
    }
  }

  [arc-progress-bar] {
    appearance: none;
    width: 100%;
    height: var(${b}•8);

    /* firefox needs these at this level, other browsers can use these too */
    background: var(--arc-progress-bar-background, var(${T0}));
    border-radius: var(--arc-border-radius-pill);
    border: none;

    /* turn off the default bar background for other browsers */
    &::-webkit-progress-bar { background: none; }

    /* firefox's progress-value bar */
    &::-moz-progress-bar {
      border-radius: var(--arc-border-radius-pill);
      background: var(--arc-progress-bar-value-background, var(${zn}));
    }

    /* all the others' progress-value bar */
    &::-webkit-progress-value {
      border-radius: var(--arc-border-radius-pill);
      background: var(--arc-progress-bar-value-background, var(${zn}));
    }
  }

}
`,sy=({progress:r=0,variant:e="common",...a})=>(0,i.jsxs)("progress",{...a,"arc-progress-bar":"","data-variant":e,value:r,max:a.max||100,"aria-valuenow":r,"aria-valuemax":a.max||100,children:[r,"% "]});Cr("ArcProgressBar",iy);const Da=u`--arc•toast`,si=u`${Da}•content`,I0=u`${Da}•color`,R0=u`${Da}•background`,En=u`${Da}•icon•color`,_n=u`${Da}•transition`,ly=u`
@layer arc-components {

  [arc-toast] {
    ${si}•gap: var(${M}•2);
    ${_n}•duration: 300ms;
    ${En}: currentcolor;

    /* SIZES -------------------------------------------------------• */
    &[data-size=md] { /* @default */
      ${Da}•font•size: var(${b}•16);
      ${si}•font•size: var(${b}•14);
    }

    &[data-size=inherit] {
      ${Da}•font•size: 1em;
      ${si}•font•size: 0.875em;
    }

    /* STATES ------------------------------------------------------• */
    &[data-severity=error] {
      ${En}: var(--arc-color-fg-critical-mid);
    }

    &[data-severity=success] {
      ${En}: var(--arc-color-fg-success-mid);
    }

    &[data-severity=warning] {
      ${En}: var(--arc-color-fg-warning-mid);
    }

    /* VARIANTS ----------------------------------------------------• */
    &[data-variant=common] { /* @default */
      ${R0}: var(--arc-color-bg-mono);
      ${I0}: var(--arc-color-fg-primary);
    }

    /* PLACEMENTS --------------------------------------------------• */
    &[data-placement*=top-] { inset-block-start: var(--arc-toast-inset-block-start, 0); }
    &[data-placement*=bottom-] { inset-block-end: var(--arc-toast-inset-block-end, 0); }
    &[data-placement*=-left] { inset-inline-start: var(--arc-toast-inset-inline-start, 0); }
    &[data-placement*=-right] { inset-inline-end: var(--arc-toast-inset-inline-end, 0); }
    &[data-placement*=-center] { inset-inline-start: var(--arc-toast-inset-inline-start, 50%); translate: -50% 0; }
    &[data-placement=center] { inset: var(--arc-toast-inset, 0); margin: var(--arc-toast-offset, auto); }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-toast] {
    inset: var(--arc-toast-inset, auto);
    margin: var(--arc-toast-offset, var(${M}•16)); /* @note: '-offset' here is legacy variable name */
    align-items: center;

    font-size: var(${Da}•font•size); /* @note: see [arc-toast-content] for actual font-size via the [data-size] attribute */

    color: var(--arc-toast-color, var(${I0}));
    background-color: var(--arc-toast-background, var(${R0}));
    border-radius: var(--arc-toast-border-radius, var(--arc-border-radius-lg));
    padding: var(--arc-toast-padding, var(${M}•12) var(${M}•12) var(${M}•12) var(${M}•16));
    box-shadow: var(--arc-shadow-lg);
    border: none;

    max-width: var(--arc-toast-max-width, 40em);
    min-width: var(--arc-toast-min-width, 12em);
    min-height: var(--arc-toast-min-height, var(${Da}•min•height, 3.5em));

    &:has([arc-toast-heading] + [arc-toast-subtext]) {
      ${Da}•min•height: 5em;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(${M}•8) var(${M}•16);
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: var(${M}•8);
      padding: var(${M}•4) 0; /* vertical padding to align with action button text */
      min-width: 14em;

      p {
        margin: 0;
      }
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, var(${En}));

      height: 1lh;
      padding: 0 var(${M}•2);
    }

    [arc-toast-content] {
      flex: 1;

      font-size: var(--arc-toast-font-size, var(${si}•font•size));
      line-height: var(--arc-line-height-loose);
      hyphens: auto;

      display: block;

      &:has([arc-toast-heading] + [arc-toast-subtext]) {
        display: flex;
        flex-direction: column;
        gap: var(${M}•2);
      }
    }

    [arc-toast-actions] {
      align-self: baseline;

      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    [arc-toast-progress-bar] {
      grid-column: 1 / -1;
    }
  }

  /* POPOVER + state -----------------------------------------------• */

  [arc-toast] {
    opacity: 0;
    content-visibility: hidden;
    transition:
      display var(${_n}•duration) allow-discrete,
      overlay var(${_n}•duration) allow-discrete,
      content-visibility var(${_n}•duration) allow-discrete,
      opacity var(${_n}•duration);
  }

  [arc-toast]:popover-open {
    display: flex;
    opacity: 1;
    content-visibility: visible;
  }

  @starting-style {
    [arc-toast]:popover-open {
      opacity: 0;
      content-visibility: hidden;
    }
  }
}
`,M0=({id:r,children:e,icon:a,heading:t,subtext:o,dismissProps:n,showDismiss:c=!0,onClose:l,actionSlot:d,size:h="md",variant:p="common",scheme:v=E0.scheme,placement:g="bottom-left",getToastId:f,progressBarProps:m,severity:y,...w})=>{const x=()=>{l?.()},C=v==="auto"?void 0:v,z=!!d||c,k=Br(r,"arc-toast"),{variant:T,hierarchy:P,...L}=n||{};(0,s.useEffect)(()=>{f?.(k)},[f,k]);const V=Li(a);return(0,i.jsx)("div",{...w,"arc-toast":"","arc-scheme":C,"data-size":h,"data-variant":p,"data-placement":g,"data-severity":y||void 0,id:k,children:(0,i.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,i.jsxs)("div",{"arc-toast-body":"",children:[a&&(0,i.jsx)(Sr,{icon:V,"arc-toast-icon":""}),(0,i.jsx)("div",{"arc-toast-content":"",children:e||(0,i.jsxs)(i.Fragment,{children:[t&&(0,i.jsx)("header",{"arc-toast-heading":"",children:(0,i.jsx)("strong",{children:t})}),o&&(0,i.jsx)("p",{"arc-toast-subtext":"",children:o})]})})]}),z&&(0,i.jsxs)("div",{"arc-toast-actions":"",children:[d,c&&(0,i.jsx)(jr,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",size:"md",shape:"square","aria-label":"Dismiss",...L,popoverTarget:k,onClick:x})]}),m&&(0,i.jsx)(sy,{...m,variant:y==="error"?"critical":m.variant,"arc-toast-progress-bar":""})]})})};M0.handleToast=_0,Cr("ArcToast",ly);var Pn;(function(r){r.None="none",r.Persistent="localStorage",r.Temporary="sessionStorage"})(Pn||(Pn={}));const dy=(r,e,a)=>{const[t,o]=(0,s.useState)(e),[n,c]=f1(r,e),[l,d]=Tl(r,e);return a===Pn.Temporary?[n,c]:a===Pn.Persistent?[l,d]:[t,o]},uy=["auto","hex","hexa","rgb","hsl","oklch"],hy=()=>typeof DOMRect<"u"?new DOMRect:{x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0,toJSON:()=>({x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0})}}}]);
