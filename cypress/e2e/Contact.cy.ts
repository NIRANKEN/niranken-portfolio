describe('Main', () => {
  beforeEach(() => {
    cy.viewport(1280, 960);
  });

  it('cannot click SUBMIT button', () => {
    cy.log('visit about page');
    cy.dataTestId('menu-icon-button').click();
    cy.dataTestId('menu-portfolio').click();

    cy.contains('にらんけんのポートフォリオ').should('be.visible');
    cy.contains('ホーム').should('not.exist');
    cy.dataTestId('menu-home').should('not.exist');
    cy.dataTestId('menu-portfolio').should('not.exist');
    cy.contains('自己紹介・価値観').should('be.visible');
    cy.contains('連絡先').should('be.visible');
    cy.contains('人事さま向けWebアプリケーション開発者として').should(
      'not.exist'
    );
    cy.contains('得意なこと3選').should('not.exist');
    cy.contains('スキル一覧').should('not.exist');

    // TODO: Contact Formのテスト
  });
});
