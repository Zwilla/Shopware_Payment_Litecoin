/*
 * (c) LX <lxhost.com@gmail.com>
 * (c) 2017 Miguel Padilla <miguel.padilla@zwilla.de>
 * Donations: B_C_H:1L81xy6FoMHpNWxFtKTKGbsz9Sye1sSpSp BTC:1kD11aS83Du87EigaCodD8HVYmurHgT6i  ETH:0x8F2E4fd2f76235f38188C2077978F3a0B278a453
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

Ext.define('Shopware.apps.PaymentLiteCoin', {

    extend: 'Enlight.app.SubApplication',

    bulkLoad: true,
    loadPath: '{url action=load}',

    params: {},

    controllers: [ 'Main' ],

    stores: [ 'main.List' ],
    models: [ 'main.List' ],
    views: [ 'main.Window', 'main.List' ],

    launch: function() {
        return this.getController('Main').mainWindow;
    }
});