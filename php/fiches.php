<?php
// Je fais une boucle pour afficher les informations des fiches explicatives
foreach ($fiches as $id => $lignes): 
?> 
    <div class="bloc__fiche__explication">
        <h4><?= $id ?></h4>
        <h6><?= $lignes ?></h6>
            <ul>
                <?php foreach ($fiches[$id] as $name => $value): ?>
                <li>
                    <span class="bloc__explication__title"><?= $name ?></span>
                    <span class="bloc__explication__infos"><?= $value ?></span>
                </li>
                <?php endforeach; ?>
            </ul>
    </div>
<?php
endforeach;
?>