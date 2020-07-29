<template>
  <div id="app" class="circle-category">
    <SfHeader 
      :logo="logo"
      title="CircleK logo"
    >
      <template #navigation>
        <SfHeaderNavigationItem
            v-for="item in navigation"
            :key="item">
          <SfLink href="#">{{item}}</SfLink>
        </SfHeaderNavigationItem>
      </template>
    </SfHeader>    
    <section class="circle-category__upper-bar">
      <div>
        <SfBreadcrumbs 
          :breadcrumbs="breadcrumbs"
        />
        <SfHeading class="circle-category__heading" title="Beverages" :level="3"/>
      </div>
      <div class="circle-category__sort">
        <SfSelect label="Sort by:" class="circle-category__sort-select" selected="Price from high to low">
          <SfSelectOption v-for="(option, key) in selectOptions" :key="key" :value="option">
            {{option}}
          </SfSelectOption>
        </SfSelect>
      </div>
    </section>
    <section class="circle-category__main">
      <aside class="circle-category__sidebar">
        <SfAccordion :multiple="true" :showChevron="false" :open="getAccordionItemsHeader()" >
          <SfAccordionItem 
              class="circle-category__filter"
              v-for="(accordion, i) in sidebarAccordion"
              :key="i"
              :header="accordion.header"
            >
            <template>
              <SfScrollable class="circle-category__scrollable" showText="More" hideText="Less" maxContentHeight="4rem">
                <SfList
                  class="circle-category__filter-items"
                >
                  <SfListItem
                    v-for="item in accordion.items"
                    :key="item"
                  >
                    <SfMenuItem :label="item"/>
                  </SfListItem>
                </SfList>
              </SfScrollable>
            </template>
          </SfAccordionItem>
        </SfAccordion>
      </aside>
      <div class="circle-category__products">
        <SfButton @click="visible = !visible">
          otwórz
        </SfButton>
        <SfModal :visible="visible" @close="visible = false">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non nisl auctor dui euismod condimentum. In quis dui augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis imperdiet vestibulum ipsum mollis bibendum. Fusce vestibulum nisi eu velit bibendum, id commodo enim efficitur. Nulla imperdiet convallis ligula, nec suscipit lacus blandit ut. Proin mollis molestie enim ut auctor.</p>

<p>Proin dapibus interdum augue sed egestas. In porta dolor et efficitur rutrum. Ut sed ligula sit amet urna tempus vehicula eu id leo. Proin fringilla eu felis eu ultricies. Curabitur sagittis lectus sed nunc euismod mollis ac at neque. Duis lorem augue, volutpat a mi vitae, tincidunt luctus sapien. Phasellus eu accumsan erat, ut eleifend risus. Suspendisse vitae lectus molestie, iaculis libero non, gravida nulla. Vivamus eu tincidunt ipsum. Curabitur ac vehicula neque, non elementum quam. Aenean maximus ipsum diam, vehicula hendrerit lorem iaculis nec.</p>

<p>Phasellus in venenatis nibh. Curabitur egestas dignissim lacus ut lacinia. Curabitur tempus dui sed egestas interdum. Fusce sit amet risus eget ex efficitur facilisis. Ut gravida non lectus vitae condimentum. Maecenas felis turpis, dignissim at enim sed, ornare congue urna. Etiam ultricies ligula vitae varius hendrerit. Ut suscipit nisi consectetur, tincidunt dui et, blandit odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer ut neque vel tellus viverra viverra at vitae nulla. Quisque eu faucibus lacus, ut iaculis lacus. Fusce quis pharetra nunc. Proin sed tellus vitae neque molestie auctor sit amet et justo.</p>

<p>Etiam viverra massa metus, at volutpat enim laoreet ut. Donec quam augue, placerat quis nibh id, fermentum facilisis sem. Nulla iaculis porttitor bibendum. Donec eget gravida nulla. Suspendisse in dolor facilisis, sagittis nisi quis, luctus erat. Curabitur pellentesque fringilla massa, iaculis venenatis turpis luctus et. Nulla efficitur, lorem sed vehicula ornare, libero tortor pellentesque augue, eu feugiat urna arcu nec nisi. Aenean consequat magna id nulla hendrerit, non iaculis velit luctus. Nam sagittis leo varius massa pellentesque lacinia quis sed odio. Nam tempus, elit a mollis consequat, metus lorem feugiat diam, a tristique arcu nisl ac nibh. Vivamus iaculis massa ac auctor ultricies. Morbi et nibh ultricies, tempor felis eu, hendrerit odio. Pellentesque accumsan dolor eget sem molestie, eget euismod neque vestibulum.</p>

<p>Pellentesque eget lacus felis. Phasellus at feugiat velit, in euismod tortor. In pharetra tellus a metus eleifend mollis. Integer semper a arcu in venenatis. Maecenas vel sapien accumsan, finibus lectus quis, aliquam ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sed eros ut magna mattis volutpat. Vivamus eget nulla velit. Vestibulum congue molestie erat sed tincidunt.
        </SfModal>
        <SfProductCard
          class="circle-category__product"
          v-for="(product, key) in products" :key="key"
          :image="product.image"          
          :regularPrice="product.price"
          :title="product.title"
          wishlistIcon="heart"
          :data-subtitle-content="product.subtitle"
        >        
        </SfProductCard>
      </div>
      
    </section>
    <SfFooter class="circle-category__footer" :column="4">
      <div class="circle-category__footer-bar">
      </div>
      <SfFooterColumn class="circle-category__footer-column" v-for="(column, key) in footerColumns" :key="key" :title="column.header">
        <SfList v-if="column.items">
          <SfListItem v-for="item in column.items" :key="item">
            <SfLink href="#">
              {{item}}
            </SfLink>
          </SfListItem>
        </SfList>
        <div v-else-if="column.pictures">
          <SfImage v-for="picture in column.pictures" :key="picture" :src='require("./assets/"+picture+"_Icon.png")' :width="32" :height="32"/>          
        </div>
        <div class="circle-category__footer-input" v-else>
          <SfInput  type="email" placeholder="Type your email address" />
          <SfButton>subscribe</SfButton>
        </div>
      </SfFooterColumn>
    </SfFooter>
  </div>
</template>

<script>
import {SfHeader,
    SfBreadcrumbs,
    SfHeading,
    SfSelect,
    SfProductCard,
    SfAccordion,
    SfList,
    SfFooter,
    SfLink,
    SfInput,
    SfImage,
    SfMenuItem,
    SfScrollable,
    SfButton,
    SfModal
    } from '@storefront-ui/vue'

export default {
  name: 'App',
  components: {
    SfHeader,
    SfBreadcrumbs,
    SfHeading,
    SfSelect,
    SfProductCard,
    SfAccordion,
    SfList,
    SfFooter,
    SfLink,
    SfInput,
    SfImage,
    SfMenuItem,
    SfScrollable,
    SfButton,
    SfModal
  },
  data() {
    return {
      visible: false,
      logo: require("./assets/logo.png"),
      navigation: ["home", "products", "our stores"],
      breadcrumbs: [
                    {
                      "text": "Shop",
                      "link": "#"
                    },
                    {
                      "text": "Products",
                      "link": "#"
                    },
                    {
                      "text": "Beverages",
                      "link": "#"
                    }
                  ],
      selectOptions: [
        "Price from high to low", "Price from high to low", "Price from high to low"
      ],
      products: [
        {
          title: "5 Hour Energy Peach Mango",
          subtitle: "health and beauty",
          price: "$ 50",
          image: require("./assets/image_93.png"),
        },
        {
          title: "5 Hour Energy Peach Mango",
          subtitle: "health and beauty",
          price: "$ 50",
          image: require("./assets/image_93.png")
        },
        {
          title: "5 Hour Energy Peach Mango",
          subtitle: "health and beauty",
          price: "$ 50",
          image: require("./assets/image_93.png")
        },
        {
          title: "5 Hour Energy Peach Mango",
          subtitle: "health and beauty",
          price: "$ 50",
          image: require("./assets/image_93.png")
        },
        {
          title: "5 Hour Energy Peach Mango",
          subtitle: "health and beauty",
          price: "$ 50",
          image: require("./assets/image_93.png")
        },
        {
          title: "5 Hour Energy Peach Mango",
          subtitle: "health and beauty",
          price: "$ 50",
          image: require("./assets/image_93.png")
        },
        {
          title: "5 Hour Energy Peach Mango",
          subtitle: "health and beauty",
          price: "$ 50",
          image: require("./assets/image_93.png")
        },
        {
          title: "5 Hour Energy Peach Mango",
          subtitle: "health and beauty",
          price: "$ 50",
          image: require("./assets/image_93.png")
        },
        {
          title: "5 Hour Energy Peach Mango",
          subtitle: "health and beauty",
          price: "$ 50",
          image: require("./assets/image_93.png")
        },
        {
          title: "5 Hour Energy Peach Mango",
          subtitle: "health and beauty",
          price: "$ 50",
          image: require("./assets/image_93.png")
        }        
      ],
      sidebarAccordion: [
        {
          header: "Categories",
          items: ["Energy Drinks", "Soft Drinks", "Cans", "Water", "Sugar-free Drinks"]
        }, 
        {
          header: "Brands",
          items: ["Extra Strenght", "Coca-cola", "Pepsi", "Red Bull", "Waterlove"]
        },
        {
          header: "Price",
          items: []
        },
        {
          header: "Popular",
          items: ["Candy","E-Cigarettes", "Grocery", "Health & Beauty", "Household", "Ready to Eat / Food"]
        },
      ],
      footerColumns: [
        {
          header: "ABOUT US",
          items: ["Who we are", "Quality in the details", "Customer Reviews"]
        },
        {
          header: "DEPARTMENTS",
          items: ["Department1", "Department2", "Department3", "Department4" ]
        },
        {
          header: "HELP",
          items: ["Energy Drinks", "Soft Drinks", "Cans", "Water", "Sugar-free Drinks"]
        },
        {
          header: "PAYMENTS & DELIVERY",
          items: ["Energy Drinks", "Soft Drinks", "Cans", "Water", "Sugar-free Drinks"]
        },
        {
          header: "SOCIAL",
          pictures: ["Facebook", "Pinterest", "Google", "Twitter", "Youtube"]
        },
        {
          header: "",
          input: ""
        }
      ]
    }
  },
  methods: 
  {
    getAccordionItemsHeader() {
      return this.sidebarAccordion.map(
        item => item.header 
      )
    }
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
:root {
  --color-active:  #EE2E24;
}

.circle-category {
  font-family: Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  max-width: 1280px;
  margin: 0 auto;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .sf-header {
    height:90px;
    margin: 0 0 1.5rem 0;
    background: var(--c-white);
    box-shadow: 0px 0px 30px rgba(29, 31, 34, 0.08), 1px 10px 10px rgba(102, 62, 51, 0.02);
    border-radius: 60px;
    &-navigation-item {
      --header-navigation-item-border: none;
      --header-navigation-item-font-weight: bold;
      --header-navigation-item-font-line-height: 1.0625rem;
      .sf-link {
        --header-navigation-item-color: var(--c-text);
        &:hover,
        &:active {
          --header-navigation-item-color: var(--color-active);
        }
      }      
    }
    .sf-search-bar {
      --search-bar-icon-right: 0.875rem;
      --search-bar-input-text-align: left;
      --search-bar-font: normal var(--font-sm) Montserrat;
      --search-bar-border: none;
      --search-bar-padding: 0 2.1875rem 0 2.125rem;      
      width: 21.75rem;
      height: 3rem;
      border: 2px solid  var(--color-active);
      box-sizing: border-box;
      border-radius: 34px;
      &__icon {
        bottom: 50%;
        transform: translate3d(0, 50%, 0);
      }
    }
    &__action:hover,
    &__action:active
     {
      --icon-color: var(--color-active);
    }
  }
  &__upper-bar {
    display: flex;
    justify-content: space-between;       
  }
  &__sort {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      &-select {   
        --select-label-top: 65%; 
        --select-label-left: calc(var(--spacer-2xl) * -1);  
        --select-label-font: var(--font-bold) var(--font-lg) Montserrat;  
        width: 15rem;
        .sf-select-option {
          --select-option-background: var(--c-white);          
        }
        &:hover,
        &:focus {
          --chevron-color: var(--c-black);
        }
      }
    } 
  &__heading {
    --heading-title-color:  var(--color-active); 
    display: flex;
    align-self: flex-end;  
    margin: 2.875rem 0 var(--spacer-xl) 0;   
    font-weight: bold;
    font-size: var(--font-lg);
  } 
  &__main {
    display: flex;
    width: 100%;    
  }
  &__sidebar {
    display: flex;
    flex-direction: column;    
    margin: 0 var(--spacer-base) 0 0;
  }
  &__filter {    
    --accordion-item-header-color: var(--c-text);
    --accordion-item-header-font: bold var(--spacer-base) Montserrat;
    position: relative;
    width: 13.125rem;
    margin: var(--spacer-2xl) 0;
    box-shadow: 4px 12px 24px rgba(119, 121, 122, 0.15);
      border-radius: 10px; 
    &-items {      
      padding: var(--spacer-sm) var(--spacer-sm) var(--spacer-2xs) var(--spacer-sm);        
      text-align: left;
      background: var(--c-white);      
    }    
    @media (min-width: 1024px) {
      .sf-accordion-item__header {
      position: absolute;
      top: -3.75rem;
      pointer-events: none;
      &--open {
        --accordion-item-header-color: var(--c-text);
      } 
    }  
    }         
  }
  &__scrollable {
      position: relative;
      text-align: left;     
      .sf-button{
        --button-color: var(--color-active);
        margin: 0 0 0 var(--spacer-sm);
        font-size: var(--spacer-sm);
        text-decoration: none;
      }        
      button:after {
        position: absolute;
        bottom: var(--spacer-2xs);
        right: var(--spacer-sm);       
        content: url(./assets/Vector.svg);
      }
    }
  &__products {
    display: flex;
    flex-wrap: wrap;
  }   
  &__product {
    text-align: left;  
    .sf-price__regular {
      color:  var(--color-active);
    }
    .sf-product-card__title {
      position: relative;
      &:before {
        position: absolute;
        content: "health and beauty"; // these should work, but it does't: attr(data-subtitle-content string, "health and beauty")
        top: calc(var(--spacer-base) * -1);
        color: #72757E;
        font-size: 10px;
        font-family: Raleway;
        text-transform: uppercase;
      }
    }
  }
  &__footer {
    --list-item-color:  var(--c-white);
    position: relative;
    background-color: var(--c-text);
    &-column {
      --link-text-decoration: none;
      --link-font-weight: normal;
      --link-font-size: var(--font-sm);
      text-align: left;
    }
    button {
      color:  var(--c-white);
    }
    .sf-image {
      margin: 0 var(--spacer-2xs) 0 0;
    }
  }
  &__footer-bar {
    position: absolute;
    height: 1.25rem;
    width: 100%;
    top: 0;    
    left: 0;
    background: #F99B2A;
  }
  &__footer-input {
    position: relative;
    --input-bar-display: none;
    --input-background:  var(--c-light);
    --input-padding: 0 0 0 var(--spacer-sm);
    --button-font-size: 0.625rem;
    --button-font-weight: var(--font-extra-bold);
    --button-background:  var(--color-active);
    --button-border-radius: 1.5rem;
    display: flex;    
    align-items: flex-start;    
    input {
      height: var(--spacer-lg);
      width: 16.6875rem;
      color: #43464E;
      font-size: 0.75rem;
      border-radius: 2.125rem;
    }
    button {
      position: absolute;
      right: calc(var(--spacer-xl) * -1);
      width: 7.25rem;
      height: var(--spacer-lg);
    }    
  }
}
</style>
