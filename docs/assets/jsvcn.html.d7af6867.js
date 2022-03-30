import{r as e,o,c as p,a as n,d as t,F as c,b as a,e as r}from"./app.0a892dac.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";const l={},u=n("h1",{id:"jsvcn",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#jsvcn","aria-hidden":"true"},"#"),a(" jsvcn")],-1),d=n("h4",{id:"codenotary-javascript-client",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#codenotary-javascript-client","aria-hidden":"true"},"#"),a(" Codenotary - JavaScript Client")],-1),h=n("blockquote",null,[n("p",null,"Global, de-centralized signing of code and other digital assets.")],-1),k=a("This "),b={href:"https://github.com/vchain-us/jsvcn",target:"_blank",rel:"noopener noreferrer"},m=a("package"),g=a(" provides an easy to use javascript client for the "),v={href:"https://www.codenotary.io",target:"_blank",rel:"noopener noreferrer"},f=a("Codenotary"),y=a(" platform."),j=n("h2",{id:"features",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#"),a(" Features:")],-1),w=n("ul",null,[n("li",null,"authenticate digital assets via Codenotary API or Codenotary Blockchain"),n("li",null,"notarize, untrust and unsupport digital assets via Codenotary API")],-1),_=n("h2",{id:"demo",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#demo","aria-hidden":"true"},"#"),a(" Demo")],-1),x={href:"https://vchain-us.github.io/jsvcn/",target:"_blank",rel:"noopener noreferrer"},C=a("Demo App - Vue.js"),q=a(" ("),A={href:"https://github.com/vchain-us/jsvcn/tree/master/example",target:"_blank",rel:"noopener noreferrer"},z=a("source"),I=a(")"),S={href:"https://authenticate.codenotary.io/",target:"_blank",rel:"noopener noreferrer"},D=a("Codenotary Authenticate App"),B={href:"https://chrome.google.com/webstore/detail/vchain-codenotary-downloa/mnloemedehacppeggbipipjlphdjpjcb",target:"_blank",rel:"noopener noreferrer"},E=a("Codenotary Chrome Extension"),P=r(`<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install:</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>npm install jsvcn

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="init" tabindex="-1"><a class="header-anchor" href="#init" aria-hidden="true">#</a> Init</h2><p>ES6:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">import</span> Jsvcn <span class="token keyword">from</span> <span class="token string">&quot;jsvcn&quot;</span>

<span class="token keyword">const</span> jsvcn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jsvcn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>ES5 (bundled):</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://unpkg.com/jsvcn@2.1.7/dist/jsvcn.min.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/javascript<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">var</span> jsvcn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jsvcn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="configuration" tabindex="-1"><a class="header-anchor" href="#configuration" aria-hidden="true">#</a> Configuration</h3><p>Configure the client via passing a configuration object to the constructor:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;test@vchain.us&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;abc123&#39;</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;blockchain&#39;</span><span class="token punctuation">,</span>
	<span class="token operator">...</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> jsvcn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jsvcn</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="list-of-configuration-options" tabindex="-1"><a class="header-anchor" href="#list-of-configuration-options" aria-hidden="true">#</a> List of configuration options</h4><table><thead><tr><th>Configuration</th><th>Description</th></tr></thead><tbody><tr><td>credentials</td><td>Credentials for notarization</td></tr><tr><td>mode</td><td>Default value: &#39;api&#39; - Switch between &#39;api and &#39;blockchain&#39; mode</td></tr><tr><td>checksums</td><td>Default value: [&#39;sha256&#39;] You can add more hash algorithms to get the hashed file&#39;s checksums.</td></tr><tr><td>validationOnly</td><td>Default: false. Blockchain mode only. Set it to true in case you don&#39;t want to query asset details from the Codenotary Asset Server (faster response)</td></tr><tr><td>apiUrl</td><td>Custom Codenotary API url - overwrite this if you use local vcn api</td></tr><tr><td>blockchainUrl</td><td>Codenotary Blockchain url - overwrite this if you want to use staging</td></tr><tr><td>assetUrl</td><td>Codenotary Asset Server url - overwrite this if you want to use staging</td></tr><tr><td>blockchainAssetAddress</td><td>Custom Contract address - for staging</td></tr><tr><td>blockchainOrganizationAddress</td><td>Custom Org. Contract address - for staging</td></tr></tbody></table><p>Every configuration option is optional.</p><h2 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication" aria-hidden="true">#</a> Authentication</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>jsvcn<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>More information about the response format: [#] (Codenotary API Documentation])</p><h3 id="authentication-with-organization" tabindex="-1"><a class="header-anchor" href="#authentication-with-organization" aria-hidden="true">#</a> Authentication with Organization</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>jsvcn<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> progressCb<span class="token punctuation">,</span> <span class="token string">&quot;myorg.com&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="authentication-with-signerids" tabindex="-1"><a class="header-anchor" href="#authentication-with-signerids" aria-hidden="true">#</a> Authentication with SignerIDs</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>jsvcn<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&#39;id1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;id2&#39;</span><span class="token punctuation">,</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="notarization" tabindex="-1"><a class="header-anchor" href="#notarization" aria-hidden="true">#</a> Notarization</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>jsvcn<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>file<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>For notarization you need to pass valid Codenotary user credentials in the config:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">const</span> jsvcn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jsvcn</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">credentials</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">&#39;test@vchain.us&#39;</span><span class="token punctuation">,</span>
		<span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">&#39;abc123&#39;</span><span class="token punctuation">,</span>
		<span class="token comment">// notarizationPassword: &#39;abc321&#39; - required only when your notarization password is different than your normal user password. </span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token operator">...</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>More information about the response format: [#] (Codenotary API Documentation])</p><h2 id="untrust-unsupport" tabindex="-1"><a class="header-anchor" href="#untrust-unsupport" aria-hidden="true">#</a> Untrust / Unsupport</h2><p>In case you want to unsupport/untrust an asset of yours that you no longer have, you can do that exactly the same way like signing one:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
jsvcn<span class="token punctuation">.</span><span class="token function">untrust</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>file or hash<span class="token operator">&gt;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">response</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq" aria-hidden="true">#</a> FAQ:</h2><h3 id="authenticate-notarize-sha256-hashes" tabindex="-1"><a class="header-anchor" href="#authenticate-notarize-sha256-hashes" aria-hidden="true">#</a> Authenticate / notarize sha256 hashes</h3><p>Verify and sign are able to authenticate / notarize directly the SHA256 hash of an asset:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
jsvcn<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span><span class="token string">&quot;32c6a50aba0b30f63f124f4b2bb47dc027b9e48f838f71d1debe69d8680ecf70&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="async-await-syntax" tabindex="-1"><a class="header-anchor" href="#async-await-syntax" aria-hidden="true">#</a> Async - await syntax</h3><p>Verify and sign methods are always returning with a Promise. If you prefer async-await syntax you can use that as well:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">myAuthenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 <span class="token keyword">const</span> <span class="token punctuation">{</span>status<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">await</span> jsvcn<span class="token punctuation">.</span><span class="token function">verify</span><span class="token punctuation">(</span><span class="token constant">FILE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
 <span class="token operator">...</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="progress-callback-for-large-files" tabindex="-1"><a class="header-anchor" href="#progress-callback-for-large-files" aria-hidden="true">#</a> Progress callback (for large files)</h3><p>Since verify and sign methods are asynchronous calls it&#39;s easy to implement progress indicators (eg. just toggle a variable before and after the call.) But for the commands <code>verify</code> and <code>sign</code> we are also providing a progress callback as second parameter which periodically returns with the exact percentage of the file hashing progress. This is really handy when you verify large files and want to display (the real) status of the progress.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>jsvcn<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>file<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">progress</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>progress <span class="token operator">+</span> <span class="token string">&#39;%&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="calculate-checksums" tabindex="-1"><a class="header-anchor" href="#calculate-checksums" aria-hidden="true">#</a> Calculate Checksums</h3><p>Codenotary.io uses SHA256 algorithm to calculate and compare file hashes, but our library can also provide SHA1, SHA512, MD5 checksums of the file. You can add &quot;checksums&quot; attribute to the config object with an array of checksums you want to get back from the verify method.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> jsvcn <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Jsvcn</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">checksums</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;sha1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;md5&quot;</span><span class="token punctuation">]</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="authentication-directly-via-the-codenotary-blockchain-with-ethers-js" tabindex="-1"><a class="header-anchor" href="#authentication-directly-via-the-codenotary-blockchain-with-ethers-js" aria-hidden="true">#</a> Authentication directly via the Codenotary Blockchain with Ethers.js</h3><p>If you want to directly authenticate assets with Codenotary Blockchain add this to your html page:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;script src=&quot;https://cdn.ethers.io/scripts/ethers-v4.min.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>and set <code> mode: &#39;blockchain&#39;,</code> in your config.</p><h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2><p>This software is released under GPL3.</p>`,48);function J(V,F){const s=e("ExternalLinkIcon");return o(),p(c,null,[u,d,h,n("p",null,[k,n("a",b,[m,t(s)]),g,n("a",v,[f,t(s)]),y]),j,w,_,n("ul",null,[n("li",null,[n("a",x,[C,t(s)]),q,n("a",A,[z,t(s)]),I]),n("li",null,[n("a",S,[D,t(s)])]),n("li",null,[n("a",B,[E,t(s)])])]),P],64)}var U=i(l,[["render",J]]);export{U as default};