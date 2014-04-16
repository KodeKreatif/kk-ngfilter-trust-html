Trust an html text in Angular 1.2.

1. Load `ngSanitize` and `kk.ngfilter.trust-html`
1. Filter trusted html variable down
```
<p ng-bind-html="variable">
  {{ variable | trustHtml }} 
</p>
```
1. That's it
