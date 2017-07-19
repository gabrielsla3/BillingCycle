(function () {
    angular.module('billingCycleApp').component('paginator', {
        bindings: {
            url: '@',
            pages: '@'
        },
        controller: [
            '$location',
            function ($location) {
                this.pages = "2";
                //Cria um array com todas as páginas
                this.$onInit = function () {
                    const pages = parseInt(this.pages) || 1;
                    this.pagesArray = Array(pages).fill(0).map((e, i) => i + 1);
                }

                //Página atual
                this.current = parseInt($location.search().page) || 1;
                //Verificar se existe a necessidade de atualizar a página
                this.needPagination = this.pages > 1;
                //Se precisa ter o botão "Anterior"
                this.hasPrev = this.current > 1;
                //Se precisa ter o botão "Próximo"
                this.hasNext = this.current < this.pages;

                this.isCurrent = function (i) {
                    return this.current == i;
                }
            }
        ],
        template: `
            <ul ng-if="$ctrl.needPagination" class="pagination pagination-sm no-margin pull-right">
                <li ng-if="$ctrl.hasPrev">
                    <a href="{{ $ctrl.url }}?page={{ $ctrl.current - 1 }}">Anterior</a>
                </li>

                <li ng-class="{active: $ctrl.isCurrent(index)}" ng-repeat="index in $ctrl.pagesArray">
                    <a href="{{ $ctrl.url }}?page={{ index }}">{{ index }}</a>
                </li>

                <li ng-if="$ctrl.hasNext">
                    <a href="{{ $ctrl.url }}?page={{ $ctrl.current + 1 }}">Próximo</a>
                </li>
            </ul>
        `
    });
})();