from typing import Dict, List

from mage_ai.data_preparation.models.block import Block
from mage_ai.data_preparation.models.global_data_product import GlobalDataProduct
from mage_ai.orchestration.triggers.global_data_product import trigger_and_check_status


class GlobalDataProductBlock(Block):
    def get_global_data_product(self) -> GlobalDataProduct:
        override_configuration = self.global_data_product_override_configuration

        global_data_product = GlobalDataProduct.get(override_configuration.get('uuid'))

        for key in [
            'outdated_after',
            'outdated_starting_at',
            'settings',
        ]:
            value = override_configuration.get(key)
            if value and len(value) >= 1:
                setattr(global_data_product, key, value)

        return global_data_product

    @property
    def global_data_product_override_configuration(self) -> str:
        return (self.configuration or {}).get('global_data_product', {})

    def _execute_block(
        self,
        outputs_from_input_vars,
        global_vars: Dict = None,
        **kwargs,
    ) -> List:
        trigger_and_check_status(
            self.get_global_data_product(),
            global_vars.get('variables') if global_vars else None,
        )

        return []
