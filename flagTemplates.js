FlagFilter.templates = {"flag": function(it) {
var out='<h3><a href=\''+(it.url||'').toString().encodeHTML()+'\'>'+(it.title||'').toString().encodeHTML()+'</a></h3><div class="tags">';var arr1=it.tags;if(arr1){var tag,i1=-1,l1=arr1.length-1;while(i1<l1){tag=arr1[i1+=1];out+=' <a href="/questions/tagged/'+(tag||'').toString().encodeHTML()+'" class="post-tag" title="show questions tagged \''+(tag||'').toString().encodeHTML()+'\'" rel="tag">'+(tag||'').toString().encodeHTML()+'</a>';} } out+='</div><div class="author"> created <span title="'+(it.created)+'" class="relativetime"> '+(FlagFilter.tools.formatDate(it.created)||'').toString().encodeHTML()+' </span>';if(it.author){out+=' <a href=\''+(it.author.url||'').toString().encodeHTML()+'\'>'+(it.author.name||'').toString().encodeHTML()+'</a>';}else{out+=' unknown';}out+='</div><ul class="flagList">';var arr2=it.flags;if(arr2){var flag,i2=-1,l2=arr2.length-1;while(i2<l2){flag=arr2[i2+=1];out+=' <li>'+(flag.description)+' ';if(flag.relatedPosts){out+=' <ul> ';var arr3=flag.relatedPosts;if(arr3){var rpost,i3=-1,l3=arr3.length-1;while(i3<l3){rpost=arr3[i3+=1];out+=' <li><a href=\''+(rpost.url||'').toString().encodeHTML()+'\'>'+(rpost.title||'').toString().encodeHTML()+'</a></li> ';} } out+=' </ul> ';}out+=' - ';var arr4=flag.flaggers;if(arr4){var flagger,i=-1,l4=arr4.length-1;while(i<l4){flagger=arr4[i+=1];out+=' <a href=\''+(flagger.url||'').toString().encodeHTML()+'\'>'+(flagger.name||'').toString().encodeHTML()+'</a> ('+(flagger.helpfulFlags||0)+'/'+(flagger.declinedFlags||0)+'), ';} } out+=' <span title="'+(flag.created)+'" class="relativetime"> '+(FlagFilter.tools.formatDate(flag.created)||'').toString().encodeHTML()+' </span> </li>';} } out+='</ul>';return out;
},
"flagFilter": function(it) {
var out='';var arr1=it;if(arr1){var cat,i1=-1,l1=arr1.length-1;while(i1<l1){cat=arr1[i1+=1];out+='<h3>'+(cat.category||'').toString().encodeHTML()+'</h3><div class="flagFilterCategory"> <ul> ';var arr2=cat.filters;if(arr2){var filter,i2=-1,l2=arr2.length-1;while(i2<l2){filter=arr2[i2+=1];out+=' <li class="flagFilter"> <b>'+(filter.count)+'</b> &times; <a href=\'?filter='+(filter.search||'').toString().encodeHTML()+'\' class=\''+(filter.cssClass||"")+'\'>'+(filter.name||'').toString().encodeHTML()+'</a> </li> ';} } out+=' </ul></div>';} } return out;
},
"flagsLayout": function(it) {
var out='<div id="mainbar-full"> <div class="subheader"> <h1>Moderator Tools</h1> <div id="tabs"> <a href="/admin/links" title="moderator utilities and links">links</a> <a href="/admin" title="summary of moderator activity">history</a> <a href="/admin/dashboard" title="summary of current moderator alerts">flags</a> <a class="youarehere" href="/admin/flags" title="a simple list of all pending flags with fast filtering">filtered flags</a> <a href="/admin/posts/migrated/here" title="recently migrated posts">migrated</a> <a href="/admin/users" title="users with flags, user messages, suspended users, annotations">users</a> <a href="/admin/posts" title="locked posts, auto-flagged posts">posts</a> <a href="/admin/analytics" title="site usage metrics">analytics</a> </div> </div></div><div id="flagSort"><label>Sort:</label><label><input type="radio" name="sort" value="postDesc">post creation (desc)</label><label><input type="radio" name="sort" value="postAsc">post creation (asc)</label><label><input type="radio" name="sort" value="flagDesc" checked="checked">first flag (desc)</label><label><input type="radio" name="sort" value="flagAsc">first flag (asc)</label><label><input type="radio" name="sort" value="netHelpfulDesc">flagger hist (desc)</label><label><input type="radio" name="sort" value="netHelpfulAsc">flagger hist (asc)</label></div><div id=\'flaggedPosts\'> <h1>Loading Flags <img src=\'//sstatic.net/img/progress-dots.gif\'></h1></div><div id=\'flagFilters\'></div>';return out;
}};
