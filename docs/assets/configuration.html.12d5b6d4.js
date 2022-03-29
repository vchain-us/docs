import{r as a,o as t,c as s,a as e,d as r,w as c,F as i,b as n,e as d}from"./app.88d1a4f1.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},h=e("h1",{id:"configuration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#configuration","aria-hidden":"true"},"#"),n(" Configuration")],-1),p=e("p",null,[n("By default, the "),e("code",null,"vcn"),n(" command line stores its config file ("),e("code",null,"config.json"),n(") in a directory called "),e("code",null,".vcn"),n(" within your "),e("code",null,"$HOME"),n(" directory.")],-1),f=n("If the "),m=e("code",null,"STAGE",-1),b=n(" environment variable has been set, the default configuration directory can be different. See "),g=n("environments"),x=n("."),_=d(`<p>However, you can specify a different location for the config file via the <code>--config</code> command line option. For example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vcn --config /path/to/your/config.json
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="config-file" tabindex="-1"><a class="header-anchor" href="#config-file" aria-hidden="true">#</a> Config file</h2><h3 id="example-of-config-json" tabindex="-1"><a class="header-anchor" href="#example-of-config-json" aria-hidden="true">#</a> Example of <code>config.json</code></h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
  &quot;currentcontext&quot;: &quot;example@example.net&quot;,
  &quot;users&quot;: [
    {
      &quot;email&quot;: &quot;example@example.net&quot;,
      &quot;token&quot;: &quot;&lt;authentication_bearer_token&gt;&quot;
      ]
    }
  ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="breakdown-of-config-json-s-components" tabindex="-1"><a class="header-anchor" href="#breakdown-of-config-json-s-components" aria-hidden="true">#</a> Breakdown of <code>config.json</code>&#39;s components</h3><h4 id="currentcontext" tabindex="-1"><a class="header-anchor" href="#currentcontext" aria-hidden="true">#</a> currentcontext</h4><p>The property <code>currentcontext</code> holds the reference (user&#39;s email) to the current authenticated user.</p><h4 id="users" tabindex="-1"><a class="header-anchor" href="#users" aria-hidden="true">#</a> users</h4><p>The property <code>users</code> is an array of objects (one entry per user). Each object holds:</p><ul><li><code>email</code> the email address that identifies a specific user</li><li><code>token</code> a bearer token used obtained by using <code>vcn login</code></li></ul>`,11);function v(q,y){const o=a("RouterLink");return t(),s(i,null,[h,p,e("blockquote",null,[e("p",null,[f,m,b,r(o,{to:"/vcn/user-guide/environments.html"},{default:c(()=>[g]),_:1}),x])]),_],64)}var w=l(u,[["render",v]]);export{w as default};
