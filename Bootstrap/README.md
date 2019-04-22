# Bootstrap Notes

## 面板
~~~html
(div.panel.panel-info>div.panel-heading+div.panel-body)*5
~~~

## 折叠
~~~html
div.panel-heading[rol="tab" id="First"]>(h4.panel-title>a[data-toggle="collapse" aria-expanded="true" href="#bodyName"])+div#bodyName.panel-collapse.collapse>div.panel-body
~~~
