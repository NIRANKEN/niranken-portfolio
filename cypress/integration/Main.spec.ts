describe('Main', () => {
  beforeEach(() => {
    cy.viewport(1280, 960);
  });

  it('should open / and should render tab contents', () => {
    cy.log('visit HOME');
    cy.visit('/home');
    cy.contains('ホーム').should('be.visible');
    cy.contains('にらんけんのPlaygroundスペースです。 ポートフォリオ置いてます。').should('be.visible');
    cy.dataTestId('menu-home').should('not.exist');
    cy.dataTestId('menu-portfolio').should('not.exist');

    cy.log('click menu icon');
    cy.dataTestId('menu-icon-button').click();
    cy.dataTestId('menu-home').should('be.visible');
    cy.dataTestId('menu-portfolio').should('be.visible');

    cy.log('click "ポートフォリオ"');
    cy.dataTestId('menu-portfolio').click();
    cy.contains('にらんけんのポートフォリオ').should('be.visible');
    cy.contains('ホーム').should('not.exist');
    cy.dataTestId('menu-home').should('not.exist');
    cy.dataTestId('menu-portfolio').should('not.exist');

    cy.log('check display ABOUT page');
    cy.contains('自己紹介・価値観').should('be.visible');
    cy.contains('人事さま向けWebアプリケーション開発者として').should(
      'not.exist'
    );
    cy.contains('3つのスキルアピール').should('not.exist');
    cy.contains('スキル一覧').should('not.exist');
    cy.contains('連絡先').should('not.exist');
    // TODO: ABOUTが選択されていること、ほかが選択されていないこと

    cy.log('click "WORKS" tab');
    cy.dataTestId('portfolio-tab-1').click();
    cy.contains('にらんけんのポートフォリオ').should('be.visible');
    cy.contains('自己紹介・価値観').should('not.exist');
    cy.contains('人事さま向けWebアプリケーション開発者として').should(
      'be.visible'
    );
    cy.contains('3つのスキルアピール').should('not.exist');
    cy.contains('スキル一覧').should('not.exist');
    cy.contains('連絡先').should('not.exist');

    cy.log('click "APPEALS" tab');
    cy.dataTestId('portfolio-tab-2').click();
    cy.contains('にらんけんのポートフォリオ').should('be.visible');
    cy.contains('自己紹介・価値観').should('not.exist');
    cy.contains('人事さま向けWebアプリケーション開発者として').should(
      'not.exist'
    );
    cy.contains('3つのスキルアピール').should('be.visible');
    cy.contains('スキル一覧').should('not.exist');
    cy.contains('連絡先').should('not.exist');

    cy.log('click "SKILLS" tab');
    cy.dataTestId('portfolio-tab-3').click();
    cy.contains('にらんけんのポートフォリオ').should('be.visible');
    cy.contains('自己紹介・価値観').should('not.exist');
    cy.contains('人事さま向けWebアプリケーション開発者として').should(
      'not.exist'
    );
    cy.contains('3つのスキルアピール').should('not.exist');
    cy.contains('スキル一覧').should('be.visible');
    cy.contains('連絡先').should('not.exist');

    cy.log('click "CONTACT" tab');
    cy.dataTestId('portfolio-tab-4').click();
    cy.contains('にらんけんのポートフォリオ').should('be.visible');
    cy.contains('自己紹介・価値観').should('not.exist');
    cy.contains('人事さま向けWebアプリケーション開発者として').should(
      'not.exist'
    );
    cy.contains('3つのスキルアピール').should('not.exist');
    cy.contains('スキル一覧').should('not.exist');
    cy.contains('連絡先').should('be.visible');
  });

  // TODO: /portfolioで直接ポートフォリオのページに遷移できること
});
