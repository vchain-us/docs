import{r,o as i,c as s,a as e,d as a,F as c,e as t,b as n}from"./app.0a892dac.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";var d="/assets/Docker_container_engine_logo.1205eded.png",u="/assets/VCN-Alert-Docker-1.b995dc99.png";const h={},g=t('<h1 id="docker-integration-for-vcn" tabindex="-1"><a class="header-anchor" href="#docker-integration-for-vcn" aria-hidden="true">#</a> Docker Integration for vcn</h1><p><img src="'+d+`" alt="Docker_container_engine_logo"></p><ul><li><a href="#docker-integration-for-vcn">Docker Integration for vcn</a></li><li><a href="#out-of-the-box-integration">Out-of-the-box integration</a><ul><li><a href="#sign-a-local-docker-image">Sign a local Docker image</a></li><li><a href="#docker-sidecar-integration">Docker Sidecar Integration</a></li></ul></li></ul><h1 id="out-of-the-box-integration" tabindex="-1"><a class="header-anchor" href="#out-of-the-box-integration" aria-hidden="true">#</a> Out-of-the-box integration</h1><p>vcn supports local Docker installations out of the box using docker:// as a location. You just need to point to the correct container image name or the container image id.</p><h2 id="sign-a-local-docker-image" tabindex="-1"><a class="header-anchor" href="#sign-a-local-docker-image" aria-hidden="true">#</a> Sign a local Docker image</h2><p>vcn uses Docker default schemes, so the latest tag is automatically used if no tag is given. For example:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vcn sign docker://hello-world
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Or use the command with a tag:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>vcn sign docker://hello-world:v1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,10),p=n("*To be able to sign, you need to register at "),m={href:"https://dashboard.codenotary.io/",target:"_blank",rel:"noopener noreferrer"},f=n("Codenotary"),v=n(" for a free trial account."),b=e("h2",{id:"docker-sidecar-integration",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker-sidecar-integration","aria-hidden":"true"},"#"),n(" Docker Sidecar Integration")],-1),_=e("p",null,"vcn also offers a sidecar project, you can use to automatically verify used container images during runtime.",-1),k=n("Check out "),x={href:"https://github.com/vchain-us/vcn-watchdog",target:"_blank",rel:"noopener noreferrer"},y=n("https://github.com/vchain-us/vcn-watchdog"),w=n(" on your server. The tool continuously verifies the integrity of your containers:"),D=t(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code> git clone https://github.com/vchain-us/vcn-watchdog.git
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Edit the verify file and set the alerting/monitoring tool you are using (see the following instructions), if you want to change the alerting</p><p>Make sure /var/run/docker.sock is accessible and run the following command on your server within the vcn-watchdog directory.</p><p>docker-compose build &amp;&amp; docker-compose up</p><p>To modify the verify file, hook up your alerting tool into the err() function.</p><p>Example using Slack, do the following:</p><p>Create a Slack Bot (Slack documentation here) Use the following code:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>function err() {
    echo &quot;Container \${1} (\${2}) verification failed&quot; &gt;&amp;2
    curl -q -X POST \\
        -H &#39;Content-type: application/json&#39; \\
        --data &quot;{\\&quot;text\\&quot;:\\&quot;Container \${1} (\${2}) verification failed\\&quot;}&quot; \\
        &quot;https://hooks.slack.com/services/$TOKEN/$KEY&quot; &gt; /dev/null 2&gt;&amp;1}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>If all works well, you should receive slack messages in your slack channel <img src="`+u+'" alt="vcn-alert-1"></p>',9);function q(S,C){const o=r("ExternalLinkIcon");return i(),s(c,null,[g,e("p",null,[p,e("a",m,[f,a(o)]),v]),b,_,e("p",null,[k,e("a",x,[y,a(o)]),w]),D],64)}var N=l(h,[["render",q]]);export{N as default};