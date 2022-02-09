Vue.component("course",{
    props: {
        start: Number,
        end: Number,
        title: String,
        date: String,
        dateend: String,
    },
    template: `
        <div>
            <div class="flex">
                <h3 class="font-noedisplay text-sm">{{start}}/</h3>
                <h3 class="font-noedisplay text-sm mt-2 text-gray-400">{{end}}</h3>
            </div>
            <h2 class="font-noedisplay text-2xl mt-4">{{title}}</h2>
            <h3 class="font-gilroylight text-sm">{{date}}</h3>
            <h3 class="font-gilroylight text-sm">{{dateend}}</h3>
        </div>
    `,
});

new Vue({
    el: '#main',
});