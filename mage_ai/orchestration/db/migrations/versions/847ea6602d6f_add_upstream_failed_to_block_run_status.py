"""Add upstream failed to block run status

Revision ID: 847ea6602d6f
Revises: 1f9353eddbc6
Create Date: 2023-03-01 11:17:44.684404

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '847ea6602d6f'
down_revision = '1f9353eddbc6'
branch_labels = None
depends_on = None


def upgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    bind = op.get_bind()
    if bind.engine.name == 'postgresql':
        with op.get_context().autocommit_block():
            op.execute("ALTER TYPE blockrunstatus ADD VALUE 'UPSTREAM_FAILED'")
    # ### end Alembic commands ###


def downgrade() -> None:
    # ### commands auto generated by Alembic - please adjust! ###
    bind = op.get_bind()
    if bind.engine.name == 'postgresql':
        op.execute("ALTER TYPE blockrunstatus RENAME TO blockrunstatus_old")
        op.execute("CREATE TYPE blockrunstatus AS ENUM('INITIAL', 'QUEUED', 'RUNNING', 'COMPLETED', 'FAILED', 'CANCELLED')")
        op.execute((
            "ALTER TABLE block_run ALTER COLUMN status TYPE blockrunstatus USING "
            "status::text::blockrunstatus"
        ))
        op.execute("DROP TYPE blockrunstatus_old")
    # ### end Alembic commands ###
