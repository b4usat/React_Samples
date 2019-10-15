<Route exact path="/" component={Home}/>
<Route path="/products" component={Products}/>
<Route path="/category" component={Category}/>
<Route path="/:id" render = {()=> (<p> I want this text to show up for all routes
                                        other than '/', '/products' and '/category' </p>)}/>