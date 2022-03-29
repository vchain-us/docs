import{r as i,o as l,c,a as e,d as n,w as r,F as d,b as t,e as s}from"./app.e0d15f64.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const h={},p=e("h1",{id:"quick-start",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#quick-start","aria-hidden":"true"},"#"),t(" Quick start")],-1),_=e("h2",{id:"overview",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#overview","aria-hidden":"true"},"#"),t(" Overview")],-1),m=e("code",null,"vcn",-1),g=t(" is the "),b=e("em",null,"Command Line Interface",-1),v=t(" for the Codenotary platform. Basically, it can "),f=t("notarize and authenticate"),x=t(" any of the following kind of assets:"),y=s("<li>a <strong>file</strong></li><li>an entire <strong>directory</strong> (by prefixing the directory path with <code>dir://</code>)</li><li>a <strong>git commit</strong> (by prefixing the local git working directory path with <code>git://</code>)</li>",3),k=t("a "),w=e("strong",null,"container image",-1),z=t(" (by using "),I=e("code",null,"docker://",-1),L=t(" or "),C=e("code",null,"podman://",-1),q=t(" followed by the name of an image present in the local registry of docker or podman, respectively)"),B=e("blockquote",null,[e("p",null,[t("It's also possible to provide a hash value directly by using the "),e("code",null,"--hash"),t(" flag.")])],-1),N=e("h2",{id:"install-the-cli",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-the-cli","aria-hidden":"true"},"#"),t(" Install the CLI")],-1),T=t("The easiest way to get "),E=e("code",null,"vcn",-1),F=t(" is to download the latest version for your platform from the "),O={href:"https://github.com/vchain-us/vcn/releases",target:"_blank",rel:"noopener noreferrer"},V=t("release page"),A=t("."),R=e("p",null,[t("Once downloaded, you can rename the binary to "),e("code",null,"vcn"),t(" and store it in your "),e("code",null,"PATH"),t(", then run it from anywhere.")],-1),S=e("blockquote",null,[e("p",null,[t("For Linux and macOS you need to mark the file as executable: "),e("code",null,"chmod +x vcn")])],-1),j=e("h2",{id:"authenticate-an-asset",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#authenticate-an-asset","aria-hidden":"true"},"#"),t(" Authenticate an asset")],-1),H=t("Authentication is always free and can be performed by anyone, anywhere, at any time. You can use "),P=e("code",null,"vcn authenticate",-1),Q=t(" even without a "),Y={href:"https://codenotary.io",target:"_blank",rel:"noopener noreferrer"},D=t("codernotary.io"),G=t(" account."),J=s(`<p>Examples:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vcn authenticate &lt;file&gt;
vcn authenticate dir://&lt;directory&gt;
vcn authenticate docker://&lt;imageId&gt;
vcn authenticate podman://&lt;imageId&gt;
vcn authenticate git://&lt;path_to_git_repo&gt;
vcn authenticate --hash &lt;hash&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>To output results in <code>json</code> or <code>yaml</code> formats:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vcn authenticate --output=json &lt;asset&gt;
vcn authenticate --output=yaml &lt;asset&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="notarize-an-asset" tabindex="-1"><a class="header-anchor" href="#notarize-an-asset" aria-hidden="true">#</a> Notarize an asset</h2>`,5),K=t("Register an account with "),M={href:"https://codenotary.io",target:"_blank",rel:"noopener noreferrer"},U=t("codernotary.io"),W=t(" first."),X=s(`<p>Then start with the <code>login</code> command. <code>vcn</code> will walk you through login and importing up your secret upon initial use.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vcn login
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Once your secret is set you can notarize assets like in the following examples:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vcn notarize &lt;file /&gt;
vcn notarize dir://&lt;directory /&gt;
vcn notarize docker://&lt;imageId&gt;
vcn notarize podman://&lt;imageId&gt;
vcn notarize git://&lt;path_to_git_repo&gt;
vcn notarize --hash &lt;hash&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>By default all assets are notarized private, so not much information is disclosed about the asset. If you want to make that public and therefore, more trusted, please use the <code>--public</code> flag.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vcn notarize --public &lt;asset&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Change the asset&#39;s status:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vcn unsupport &lt;asset&gt;
vcn untrust &lt;asset&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Finally, to fetch all assets you&#39;ve notarized:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vcn list
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,10);function Z($,ee){const o=i("RouterLink"),a=i("ExternalLinkIcon");return l(),c(d,null,[p,_,e("p",null,[m,g,b,v,n(o,{to:"/vcn/user-guide/notarization.html"},{default:r(()=>[f]),_:1}),x]),e("ul",null,[y,e("li",null,[k,n(o,{to:"/vcn/user-guide/schemes/docker.html"},{default:r(()=>[w]),_:1}),z,I,L,C,q])]),B,N,e("p",null,[T,E,F,e("a",O,[V,n(a)]),A]),R,S,j,e("p",null,[H,P,Q,e("a",Y,[D,n(a)]),G]),J,e("p",null,[K,e("a",M,[U,n(a)]),W]),X],64)}var ae=u(h,[["render",Z]]);export{ae as default};
