# VA
> Dead simple responsive-flexible-adaptive CSS framework for [Hugo](https://gohugo.io/) websites

## Install
### Config
[Import module](https://gohugo.io/hugo-modules/use-modules/#use-a-module-for-a-theme) in your site
configuration:

```yaml
imports:
  - path: gitlab.com/toby3d/va
```

### Templates
Inject cached partials in your `<head>` (as early as possible to speed up loading) and `<body>` (preferably as close as possible to the closing tag):

```html
<head>
  {{ partialCached "va/head" . }}
</head>
<body>
  ...
  {{ partialCached "va/body" . }}
</body>
```

...And that's it!

## Usage
Use the classes from the attached styles for the layout of your templates.

### Methodologies
I use [CUBE CSS](https://cube.fyi/) for class readability with brackets and class sorting and [BEM](https://bem.info/) to reduce code coherence and ease of debugging.

### Blocks
See [Every Layout](https://every-layout.dev/) (and buy the book, it's great!).

### Exceptions
Use variables for changing some values and implement exceptions.

Easy example:

```html
<figure class="frame" style="--frame-denominator: 1; --frame-numerator: 1">
  ...
</figure>
```

Advanced example:

```html
<div class="[ sidebar sidebar_side_left sidebar_no-stretch ][ stack center ]" style="--sidebar-side-width: 25%; --sidebar-content-min: 70%; --center-gutters: var(--s0); --center-max: calc(var(--measure) * 1.5)">
  <div>
    <aside>
      ...
    </aside>
    <article>
      ...
    </article>
  </div>
</div>
```

### Docs
Coming soon.
